// Factory process film: stages from yarn to dispatch. Click to play, no autoplay, no audio.
const ProcessVideo = () => (
  <section className="py-24 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">From yarn to dispatch</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold">How your fabric is made</h2>
        <p className="mt-4 font-body text-muted-foreground max-w-2xl mx-auto">
          Ten stages in 40 seconds: yarn, winding, warping, sizing, drawing-in, weaving, dyeing, finishing, inspection and dispatch.
        </p>
      </div>
      <video
        className="w-full rounded-lg bg-black shadow-xl"
        controls
        preload="none"
        playsInline
        poster="/video/factory-poster.jpg"
        aria-label="Woven fabric production process at a Janki Nath and Co. weaving unit, from yarn to dispatch"
      >
        <source src="/video/factory-process.mp4" type="video/mp4" />
        Your browser cannot play this video.
      </video>
      <p className="mt-3 text-center font-body text-xs text-muted-foreground">
        Illustrative footage of the production stages.
      </p>
    </div>
  </section>
);

export default ProcessVideo;
