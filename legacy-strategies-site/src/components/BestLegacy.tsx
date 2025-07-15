const BestLegacy = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-serif text-4xl font-bold text-navy">Prepare for Your Best Legacy</h2>
          <p className="font-sans text-lg text-navy mt-8">A bespoke strategy is a living document, a guide that adapts and grows with you. It anticipates needs, identifies opportunities, and provides a clear path forward. Generic plans, on the other hand, are static and often fail to account for the unique complexities of your life and legacy.</p>
          <button className="mt-8 border border-gold text-gold font-bold py-4 px-8 rounded-full hover:bg-gold hover:text-white">Schedule a Discovery Call</button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img src="/img/brad-raschke.png" alt="Brad Raschke at his desk" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default BestLegacy;
