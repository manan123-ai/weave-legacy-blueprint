import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MapboxWorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Export locations with coordinates
  const exportLocations = [
    { name: 'United States', coordinates: [-74.006, 40.7128] as [number, number], color: '#FF6B6B' },
    { name: 'United Kingdom', coordinates: [-0.1276, 51.5074] as [number, number], color: '#4ECDC4' },
    { name: 'Germany', coordinates: [13.4050, 52.5200] as [number, number], color: '#45B7D1' },
    { name: 'France', coordinates: [2.3522, 48.8566] as [number, number], color: '#96CEB4' },
    { name: 'Italy', coordinates: [12.4964, 41.9028] as [number, number], color: '#FFEAA7' },
    { name: 'Japan', coordinates: [139.6503, 35.6762] as [number, number], color: '#DDA0DD' },
    { name: 'Australia', coordinates: [151.2093, -33.8688] as [number, number], color: '#98D8C8' },
    { name: 'Canada', coordinates: [-75.6972, 45.4215] as [number, number], color: '#F7DC6F' },
    { name: 'Brazil', coordinates: [-46.6333, -23.5505] as [number, number], color: '#BB8FCE' },
    { name: 'South Africa', coordinates: [18.4241, -33.9249] as [number, number], color: '#85C1E9' },
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [20, 20],
      zoom: 1.8,
      projection: 'mercator',
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsMapLoaded(true);
      
      // Add export routes
      exportLocations.forEach((location, index) => {
        // Add markers for each location
        const marker = new mapboxgl.Marker({
          color: location.color,
          scale: 0.8
        })
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<div class="font-semibold">${location.name}</div>`)
          )
          .addTo(map.current!);

        // Add route lines from India to each location
        const indiaCoords: [number, number] = [77.1025, 28.7041]; // Delhi, India
        
        map.current!.addSource(`route-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [indiaCoords, location.coordinates]
            }
          }
        });

        map.current!.addLayer({
          id: `route-${index}`,
          type: 'line',
          source: `route-${index}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': location.color,
            'line-width': 2,
            'line-opacity': 0.7
          }
        });
      });

      // Add India HQ marker
      const indiaMarker = new mapboxgl.Marker({
        color: '#FF4444',
        scale: 1.2
      })
        .setLngLat([77.1025, 28.7041] as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="font-semibold text-primary">India (HQ)</div>')
        )
        .addTo(map.current!);
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
          Interactive World Map
        </h3>
        <p className="text-muted-foreground text-center mb-6 max-w-md">
          To display the interactive world map, please enter your Mapbox public token. 
          You can get one from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
        </p>
        <div className="flex gap-3 w-full max-w-md">
          <Input
            placeholder="Enter Mapbox public token..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
            Load Map
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading world map...</p>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-primary">Global Export Network</p>
        <p className="text-xs text-muted-foreground">Click markers to see locations</p>
      </div>
    </motion.div>
  );
};

export default MapboxWorldMap;