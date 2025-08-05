const GlobalExportMap = () => {
  const exportLocations = [
    { name: 'New York', x: '25%', y: '35%' },
    { name: 'London', x: '45%', y: '30%' },
    { name: 'Paris', x: '48%', y: '32%' },
    { name: 'Milan', x: '50%', y: '38%' },
    { name: 'Tokyo', x: '85%', y: '40%' },
    { name: 'Hong Kong', x: '82%', y: '48%' },
    { name: 'Dubai', x: '60%', y: '45%' },
    { name: 'Mumbai', x: '70%', y: '48%' },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Global Reach
          </h2>
          <p className="font-body text-xl opacity-90 max-w-3xl mx-auto">
            Trusted by international labels and high-volume manufacturers across the world
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* World Map SVG - Simplified */}
          <div className="relative bg-primary-foreground/10 rounded-2xl p-8 h-96 overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-20"
              fill="currentColor"
            >
              {/* Simplified world map paths */}
              <path d="M 100 150 Q 200 120 300 150 Q 400 140 500 160 Q 600 150 700 170 Q 800 160 900 180 L 900 350 Q 800 330 700 340 Q 600 350 500 340 Q 400 360 300 350 Q 200 380 100 350 Z" />
              <path d="M 150 200 Q 250 180 350 200 Q 450 190 550 210 L 550 280 Q 450 260 350 270 Q 250 280 150 270 Z" />
              <path d="M 600 220 Q 700 200 800 220 Q 850 210 900 230 L 900 300 Q 850 280 800 290 Q 700 300 600 290 Z" />
            </svg>

            {/* Glowing dots for cities */}
            {exportLocations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: location.x, top: location.y }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-body whitespace-nowrap opacity-75">
                    {location.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="font-serif text-3xl font-bold mb-2">50+</div>
            <div className="font-body text-lg opacity-90">Countries Served</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold mb-2">500+</div>
            <div className="font-body text-lg opacity-90">Global Partners</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold mb-2">25+</div>
            <div className="font-body text-lg opacity-90">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExportMap;