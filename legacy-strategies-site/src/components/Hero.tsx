const Hero = () => {
  return (
    <section className="w-full bg-cream">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-serif text-5xl font-bold text-navy">Legacy stewardship starts right here.</h1>
          <div className="mt-8 relative">
            <input type="text" placeholder="How do I..." className="w-full p-4 border border-gray-300 rounded-full" />
            <button className="absolute right-0 top-0 mt-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <button className="mt-8 bg-gold text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-80">Begin Your Legacy Blueprint</button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img src="/img/hero-family.png" alt="Multigenerational family in golden-hour light" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
