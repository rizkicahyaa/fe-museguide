import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Museum', href: '#museums' },
    { name: 'Rekomendasi', href: '#recommendations' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' }
  ];

  const museumCategories = [
    { name: 'Seni & Budaya', href: '#seni-budaya' },
    { name: 'Sejarah', href: '#sejarah' },
    { name: 'Teknologi', href: '#teknologi' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Seni Lukis', href: '#seni-lukis' }
  ];

  const supportLinks = [
    { name: 'Bantuan', href: '#help' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kebijakan Privasi', href: '#privacy' },
    { name: 'Syarat & Ketentuan', href: '#terms' },
    { name: 'Kontak Support', href: '#support' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.057a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-2xl">MuseGuide</span>
                <span className="text-amber-200 text-sm font-body">Yogyakarta</span>
              </div>
            </div>
            <p className="text-amber-200 font-body text-sm leading-relaxed mb-6">
              Platform rekomendasi museum terbaik di Yogyakarta. Temukan pengalaman budaya yang tak terlupakan dengan panduan yang tepat untuk Anda.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display text-white mb-6">Navigasi Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Museum Categories */}
          <div>
            <h3 className="text-xl font-display text-white mb-6">Kategori Museum</h3>
            <ul className="space-y-3">
              {museumCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 font-body text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-xl font-display text-white mb-6">Tetap Terhubung</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-amber-200 font-body text-sm mb-3">
                Dapatkan update museum terbaru dan rekomendasi eksklusif
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="flex-1 px-4 py-2 bg-amber-800 border border-amber-600 rounded-l-lg focus:outline-none focus:border-amber-400 text-white placeholder-amber-300 font-body text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 rounded-r-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 font-button text-sm font-medium"
                  >
                    Subscribe
                  </button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 font-body text-xs">
                    ✅ Terima kasih! Anda telah berlangganan newsletter kami.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-amber-200 font-body text-sm">info@museguide.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-amber-200 font-body text-sm">+62 274 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-amber-200 font-body text-sm">Yogyakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Links */}
        <div className="border-t border-amber-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {supportLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-amber-300 hover:text-white transition-colors duration-300 font-body text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-300 font-body text-sm">Powered by</span>
              <span className="text-white font-heading text-sm">MuseGuide Technology</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-300 font-body text-sm mb-4 md:mb-0">
              © 2024 MuseGuide. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber-300 font-body text-sm">Bahasa:</span>
              <button className="text-white font-body text-sm hover:text-amber-200 transition-colors duration-300">
                Indonesia
              </button>
              <span className="text-amber-600">|</span>
              <button className="text-amber-300 font-body text-sm hover:text-white transition-colors duration-300">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
