import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import heroWeaving from '@/assets/hero-weaving.jpg';

const HeroBanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroWeaving}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            {/* Real fabric weaving videos */}
            <source src="https://player.vimeo.com/external/442256088.sd.mp4?s=f4a3b8fc8d6e3e4e8c2de8d8d9a8c2b6b6b8c4c4&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            <source src="https://cdn.pixabay.com/vimeo/461408906/weaving-57322.mp4?width=1280&hash=f6c8c4b8f5e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3" type="video/mp4" />
          </video>
        ) : (
          // Weaving-inspired animated background fallback
          <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-stone-100">
            <img
              src={heroWeaving}
              alt="Premium fabric weaving process"
              className="w-full h-full object-cover"
            />
            {/* Weaving pattern animation overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full relative overflow-hidden">
                {/* Horizontal threads */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full animate-pulse" 
                     style={{ animationDuration: '3s' }} />
                {/* Vertical threads */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent transform translate-y-full animate-pulse" 
                     style={{ animationDuration: '4s', animationDelay: '1s' }} />
                {/* Weaving motion */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-transparent animate-ping" 
                     style={{ animationDuration: '6s' }} />
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
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