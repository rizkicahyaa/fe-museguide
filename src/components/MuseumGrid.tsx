import { useState, useMemo } from 'react';

const MuseumGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('rating');

  const museums = [
    {
      id: 1,
      name: "Museum Ullen Sentalu",
      location: "Kaliurang, Sleman",
      description: "Museum seni dan budaya Jawa yang menampilkan koleksi batik, wayang, dan artefak keraton",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Seni & Budaya",
      price: "Rp 25.000",
      hours: "09:00 - 16:00",
      isOpen: true,
      distance: "15 km"
    },
    {
      id: 2,
      name: "Museum Affandi",
      location: "Solo, Jawa Tengah",
      description: "Museum yang didedikasikan untuk maestro seni lukis Indonesia, Affandi",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Seni Lukis",
      price: "Rp 20.000",
      hours: "09:00 - 15:00",
      isOpen: true,
      distance: "45 km"
    },
    {
      id: 3,
      name: "Museum Sonobudoyo",
      location: "Yogyakarta",
      description: "Museum budaya Jawa terlengkap dengan koleksi wayang, keris, dan artefak kuno",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Budaya Jawa",
      price: "Rp 15.000",
      hours: "08:00 - 15:00",
      isOpen: true,
      distance: "5 km"
    },
    {
      id: 4,
      name: "Museum Benteng Vredeburg",
      location: "Yogyakarta",
      description: "Benteng peninggalan Belanda yang kini menjadi museum sejarah perjuangan kemerdekaan",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Sejarah",
      price: "Rp 10.000",
      hours: "08:00 - 16:00",
      isOpen: true,
      distance: "2 km"
    },
    {
      id: 5,
      name: "Museum Dirgantara",
      location: "Yogyakarta",
      description: "Museum yang menampilkan koleksi pesawat terbang dan sejarah kedirgantaraan Indonesia",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Teknologi",
      price: "Rp 20.000",
      hours: "09:00 - 15:00",
      isOpen: false,
      distance: "8 km"
    },
    {
      id: 6,
      name: "Museum Gunungapi Merapi",
      location: "Sleman",
      description: "Museum edukasi tentang gunung berapi dan bencana alam dengan teknologi interaktif",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Edukasi",
      price: "Rp 30.000",
      hours: "08:00 - 16:00",
      isOpen: true,
      distance: "25 km"
    }
  ];

  const categories = ['Semua', 'Seni & Budaya', 'Seni Lukis', 'Budaya Jawa', 'Sejarah', 'Teknologi', 'Edukasi'];

  const filteredMuseums = useMemo(() => {
    let filtered = museums;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(museum =>
        museum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        museum.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        museum.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(museum => museum.category === selectedCategory);
    }

    // Sort museums
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display text-amber-900 mb-4">
            Jelajahi Semua <span className="text-gradient">Museum</span>
          </h2>
          <p className="text-amber-700 text-lg font-body max-w-3xl mx-auto">
            Temukan museum yang sesuai dengan minat dan preferensi Anda
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari museum, lokasi, atau kategori..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 border-2 border-amber-200 rounded-full focus:border-amber-500 focus:outline-none transition-colors duration-300 font-body"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-full focus:border-amber-500 focus:outline-none transition-colors duration-300 font-body"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-full focus:border-amber-500 focus:outline-none transition-colors duration-300 font-body"
              >
                <option value="rating">Rating Tertinggi</option>
                <option value="name">Nama A-Z</option>
                <option value="distance">Jarak Terdekat</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-amber-600 font-body">
            Menampilkan {filteredMuseums.length} dari {museums.length} museum
          </div>
        </div>

        {/* Museum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMuseums.map((museum) => (
            <div
              key={museum.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Museum Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={museum.image}
                  alt={museum.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-button">
                    {museum.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-amber-900 font-body text-sm font-medium">
                      {museum.rating}
                    </span>
                  </div>
                </div>
                {!museum.isOpen && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-button">
                      Tutup
                    </span>
                  </div>
                )}
              </div>

              {/* Museum Info */}
              <div className="p-6">
                <h3 className="text-xl font-display text-amber-900 mb-2">
                  {museum.name}
                </h3>
                <p className="text-amber-600 font-body text-sm mb-3 flex items-center">
                  📍 {museum.location} • {museum.distance}
                </p>
                <p className="text-amber-700 font-body text-sm mb-4 line-clamp-2">
                  {museum.description}
                </p>

                {/* Museum Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-body text-sm">Tiket:</span>
                    <span className="text-amber-900 font-body text-sm font-medium">{museum.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-body text-sm">Jam Buka:</span>
                    <span className="text-amber-900 font-body text-sm font-medium">{museum.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-body text-sm">Status:</span>
                    <span className={`font-body text-sm font-medium ${museum.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {museum.isOpen ? 'Buka' : 'Tutup'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 py-2 px-4 rounded-lg font-button hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 text-sm">
                    Lihat Detail
                  </button>
                  <button className="px-4 py-2 border-2 border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMuseums.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-display text-amber-900 mb-2">Tidak ada museum yang ditemukan</h3>
            <p className="text-amber-600 font-body">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MuseumGrid;
