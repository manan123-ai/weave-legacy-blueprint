import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import heroWeaving from '@/assets/hero-weaving.jpg';

const HeroBanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    console.log('Video states:', { videoLoaded, videoError });
  }, [videoLoaded, videoError]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroWeaving}
          onLoadedData={() => {
            console.log('Video loaded successfully');
            setVideoLoaded(true);
          }}
          onError={(e) => {
            console.log('Video error:', e);
            setVideoError(true);
          }}
          onCanPlay={() => {
            console.log('Video can play');
          }}
        >
          {/* Try multiple video sources */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay that's always visible */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Debug info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 bg-black/80 text-white p-2 rounded text-xs">
            Video Loaded: {videoLoaded ? 'Yes' : 'No'} | Error: {videoError ? 'Yes' : 'No'}
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            What others can't weave,<br />
            <span className="italic">we perfect.</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            High-quality woven fabric for the world's most iconic brands.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-body font-medium px-8 py-3 text-lg"
          >
            Explore Our Craft
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;