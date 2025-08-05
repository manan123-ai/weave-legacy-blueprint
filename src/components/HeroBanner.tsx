import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder-weaving.jpg"
        >
          <source src="/weaving-process.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-stone-100" />
        </video>
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