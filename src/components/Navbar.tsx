import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-amber-900 font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display text-2xl">MuseGuide</span>
              <span className="text-amber-200 text-xs font-body">Yogyakarta</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-amber-200 transition-colors duration-300 font-heading text-sm"
            >
              Beranda
            </a>
            <a 
              href="#museums" 
              className="text-white hover:text-amber-200 transition-colors duration-300 font-heading text-sm"
            >
              Museum
            </a>
            <a 
              href="#recommendations" 
              className="text-white hover:text-amber-200 transition-colors duration-300 font-heading text-sm"
            >
              Rekomendasi
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-amber-200 transition-colors duration-300 font-heading text-sm"
            >
              Tentang
            </a>
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-6 py-2 rounded-full font-button hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              Mulai Jelajahi
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-amber-200 focus:outline-none focus:text-amber-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-800 rounded-lg mt-2">
              <a 
                href="#home" 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-heading transition-colors duration-300"
              >
                Beranda
              </a>
              <a 
                href="#museums" 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-heading transition-colors duration-300"
              >
                Museum
              </a>
              <a 
                href="#recommendations" 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-heading transition-colors duration-300"
              >
                Rekomendasi
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-heading transition-colors duration-300"
              >
                Tentang
              </a>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-6 py-2 rounded-full font-button hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg mt-4">
                Mulai Jelajahi
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
