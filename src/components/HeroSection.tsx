import { useState } from 'react';

const HeroSection = () => {
  const [activeMuseum, setActiveMuseum] = useState(0);

  const museums = [
    {
      id: 1,
      name: "Museum Ullen Sentalu",
      location: "Kaliurang, Sleman",
      description: "Museum seni dan budaya Jawa yang menampilkan koleksi batik, wayang, dan artefak keraton",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      rating: 4.8,
      category: "Seni & Budaya"
    },
    {
      id: 2,
      name: "Museum Affandi",
      location: "Solo, Jawa Tengah",
      description: "Museum yang didedikasikan untuk maestro seni lukis Indonesia, Affandi",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      rating: 4.6,
      category: "Seni Lukis"
    },
    {
      id: 3,
      name: "Museum Sonobudoyo",
      location: "Yogyakarta",
      description: "Museum budaya Jawa terlengkap dengan koleksi wayang, keris, dan artefak kuno",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      rating: 4.7,
      category: "Budaya Jawa"
    },
    {
      id: 4,
      name: "Museum Benteng Vredeburg",
      location: "Yogyakarta",
      description: "Benteng peninggalan Belanda yang kini menjadi museum sejarah perjuangan kemerdekaan",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      rating: 4.5,
      category: "Sejarah"
    }
  ];

  const nextMuseum = () => {
    setActiveMuseum((prev) => (prev + 1) % museums.length);
  };

  const prevMuseum = () => {
    setActiveMuseum((prev) => (prev - 1 + museums.length) % museums.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display text-amber-900 mb-4">
            Jelajahi Museum Terbaik di <span className="text-gradient">Yogyakarta</span>
          </h2>
          <p className="text-amber-700 text-lg font-body max-w-3xl mx-auto">
            Temukan keindahan seni, budaya, dan sejarah melalui koleksi museum terbaik di kota gudeg
          </p>
        </div>

        {/* Museum Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={museums[activeMuseum].image}
                  alt={museums[activeMuseum].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(museums[activeMuseum].rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-white font-body text-sm ml-1">
                          {museums[activeMuseum].rating}
                        </span>
                      </div>
                    </div>
                    <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-button">
                      {museums[activeMuseum].category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-display text-amber-900 mb-2">
                    {museums[activeMuseum].name}
                  </h3>
                  <p className="text-amber-600 font-body text-lg mb-4">
                    📍 {museums[activeMuseum].location}
                  </p>
                  <p className="text-amber-700 font-body leading-relaxed">
                    {museums[activeMuseum].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 px-8 py-3 rounded-full font-button hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Lihat Detail
                  </button>
                  <button className="border-2 border-amber-500 text-amber-700 px-8 py-3 rounded-full font-button hover:bg-amber-500 hover:text-amber-900 transition-all duration-300">
                    Tambah ke Favorit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevMuseum}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextMuseum}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Museum Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {museums.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveMuseum(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeMuseum
                  ? 'bg-amber-500 w-8'
                  : 'bg-amber-200 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-display text-amber-900 mb-2">50+</div>
            <div className="text-amber-700 font-body">Museum Terdaftar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display text-amber-900 mb-2">100K+</div>
            <div className="text-amber-700 font-body">Pengunjung Bulanan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display text-amber-900 mb-2">4.8</div>
            <div className="text-amber-700 font-body">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display text-amber-900 mb-2">24/7</div>
            <div className="text-amber-700 font-body">Dukungan Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
