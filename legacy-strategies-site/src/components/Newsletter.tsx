const Newsletter = () => {
  return (
    <section className="w-full bg-cream py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-navy">Sign Up for Our Newsletter</h2>
        <form className="mt-12 flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-8">
            <input type="text" placeholder="First Name" className="p-4 border border-gray-300 rounded-full" />
            <input type="text" placeholder="Last Name" className="p-4 border border-gray-300 rounded-full" />
            <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-full" />
          </div>
          <div className="mt-8 flex items-center">
            <input type="radio" id="steward" name="role" value="steward" className="mr-2" />
            <label htmlFor="steward" className="mr-8">Steward</label>
            <input type="radio" id="professional" name="role" value="professional" className="mr-2" />
            <label htmlFor="professional">Professional</label>
          </div>
          <div className="mt-8 flex items-center">
            <input type="checkbox" id="consent" className="mr-2" />
            <label htmlFor="consent">I consent to the privacy policy.</label>
          </div>
          <button type="submit" className="mt-8 bg-gold text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-80">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
