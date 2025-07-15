import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-navy text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        <div className="flex items-center">
          <img src="/img/logo-shield.png" alt="1322 Legacy Strategies Logo" className="h-12" />
          <p className="ml-4 font-sans">Steward your blessings.</p>
        </div>
        <div className="flex items-center mt-8 md:mt-0">
          <Link href="/legal/disclaimer" className="font-sans hover:text-gold">Disclaimer</Link>
          <Link href="/legal/privacy" className="font-sans ml-8 hover:text-gold">Privacy Policy</Link>
          <div className="flex items-center ml-8">
            <a href="#" className="text-white hover:text-copper"><img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" /></a>
            <a href="#" className="ml-4 text-white hover:text-copper"><img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" /></a>
            <a href="#" className="ml-4 text-white hover:text-copper"><img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
