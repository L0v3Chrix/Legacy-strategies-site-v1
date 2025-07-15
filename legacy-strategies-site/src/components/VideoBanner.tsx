const VideoBanner = () => {
  return (
    <section className="w-full bg-navy py-20 relative">
      <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/legacy-academy.mp4" autoPlay loop muted />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl font-bold text-white">Join the 1322 Legacy Academy</h2>
        <button className="mt-8 bg-gold text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-80">Learn More</button>
      </div>
    </section>
  );
};

export default VideoBanner;
