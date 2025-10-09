import { useState, useEffect } from 'react';

const RecommendationSection = () => {
  const [userPreferences, setUserPreferences] = useState({
    interests: [] as string[],
    budget: 'medium',
    timeAvailable: 'half-day',
    groupSize: 'small',
    transportation: 'public'
  });

  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    'Seni & Budaya',
    'Sejarah',
    'Teknologi',
    'Edukasi',
    'Seni Lukis',
    'Budaya Jawa',
    'Arsitektur',
    'Sains'
  ];

  const museums = [
    {
      id: 1,
      name: "Museum Ullen Sentalu",
      location: "Kaliurang, Sleman",
      description: "Museum seni dan budaya Jawa yang menampilkan koleksi batik, wayang, dan artefak keraton",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Seni & Budaya",
      price: 25000,
      duration: "2-3 jam",
      difficulty: "Mudah",
      bestFor: ["Keluarga", "Pasangan", "Solo Traveler"],
      highlights: ["Koleksi Batik Antik", "Arsitektur Jawa", "Garden Museum"],
      matchScore: 0
    },
    {
      id: 2,
      name: "Museum Affandi",
      location: "Solo, Jawa Tengah",
      description: "Museum yang didedikasikan untuk maestro seni lukis Indonesia, Affandi",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Seni Lukis",
      price: 20000,
      duration: "1-2 jam",
      difficulty: "Mudah",
      bestFor: ["Solo Traveler", "Seniman", "Mahasiswa"],
      highlights: ["Koleksi Lukisan Affandi", "Studio Lukis", "Galeri Seni"],
      matchScore: 0
    },
    {
      id: 3,
      name: "Museum Sonobudoyo",
      location: "Yogyakarta",
      description: "Museum budaya Jawa terlengkap dengan koleksi wayang, keris, dan artefak kuno",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Budaya Jawa",
      price: 15000,
      duration: "2-3 jam",
      difficulty: "Mudah",
      bestFor: ["Keluarga", "Pasangan", "Wisatawan Asing"],
      highlights: ["Koleksi Wayang", "Keris Kuno", "Pertunjukan Wayang"],
      matchScore: 0
    },
    {
      id: 4,
      name: "Museum Benteng Vredeburg",
      location: "Yogyakarta",
      description: "Benteng peninggalan Belanda yang kini menjadi museum sejarah perjuangan kemerdekaan",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Sejarah",
      price: 10000,
      duration: "1-2 jam",
      difficulty: "Mudah",
      bestFor: ["Keluarga", "Siswa", "Sejarawan"],
      highlights: ["Arsitektur Kolonial", "Diorama Sejarah", "Artefak Perang"],
      matchScore: 0
    },
    {
      id: 5,
      name: "Museum Dirgantara",
      location: "Yogyakarta",
      description: "Museum yang menampilkan koleksi pesawat terbang dan sejarah kedirgantaraan Indonesia",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Teknologi",
      price: 20000,
      duration: "2-3 jam",
      difficulty: "Sedang",
      bestFor: ["Keluarga", "Anak-anak", "Aviation Enthusiast"],
      highlights: ["Pesawat Asli", "Simulator Penerbangan", "Sejarah Aviation"],
      matchScore: 0
    },
    {
      id: 6,
      name: "Museum Gunungapi Merapi",
      location: "Sleman",
      description: "Museum edukasi tentang gunung berapi dan bencana alam dengan teknologi interaktif",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Edukasi",
      price: 30000,
      duration: "3-4 jam",
      difficulty: "Sedang",
      bestFor: ["Keluarga", "Siswa", "Nature Lovers"],
      highlights: ["Simulator Gempa", "Edukasi Bencana", "View Merapi"],
      matchScore: 0
    }
  ];

  const calculateMatchScore = (museum: any, preferences: any) => {
    let score = 0;
    
    // Interest matching (40% weight)
    if (preferences.interests.includes(museum.category)) {
      score += 40;
    }
    
    // Budget matching (20% weight)
    const budgetRanges = {
      low: { min: 0, max: 15000 },
      medium: { min: 15000, max: 25000 },
      high: { min: 25000, max: 50000 }
    };
    const range = budgetRanges[preferences.budget as keyof typeof budgetRanges];
    if (museum.price >= range.min && museum.price <= range.max) {
      score += 20;
    }
    
    // Time available matching (20% weight)
    const timeRanges = {
      'quick': { min: 0, max: 1 },
      'half-day': { min: 1, max: 3 },
      'full-day': { min: 3, max: 8 }
    };
    const timeRange = timeRanges[preferences.timeAvailable as keyof typeof timeRanges];
    const museumDuration = parseInt(museum.duration.split('-')[0]);
    if (museumDuration >= timeRange.min && museumDuration <= timeRange.max) {
      score += 20;
    }
    
    // Group size matching (10% weight)
    const groupSizes = {
      'small': ['Solo Traveler'],
      'medium': ['Pasangan', 'Keluarga'],
      'large': ['Keluarga', 'Grup']
    };
    const preferredGroups = groupSizes[preferences.groupSize as keyof typeof groupSizes];
    if (preferredGroups.some(group => museum.bestFor.includes(group))) {
      score += 10;
    }
    
    // Transportation matching (10% weight)
    if (preferences.transportation === 'public' && museum.location.includes('Yogyakarta')) {
      score += 10;
    } else if (preferences.transportation === 'private') {
      score += 10;
    }
    
    return Math.min(score, 100);
  };

  const generateRecommendations = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const scoredMuseums = museums.map(museum => ({
        ...museum,
        matchScore: calculateMatchScore(museum, userPreferences)
      }));
      
      const sortedMuseums = scoredMuseums
        .filter(museum => museum.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 4);
      
      setRecommendations(sortedMuseums);
      setIsLoading(false);
    }, 1500);
  };

  const handleInterestToggle = (interest: string) => {
    setUserPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setUserPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display text-amber-900 mb-4">
            Rekomendasi <span className="text-gradient">Personal</span>
          </h2>
          <p className="text-amber-700 text-lg font-body max-w-3xl mx-auto">
            Dapatkan rekomendasi museum yang sesuai dengan minat dan preferensi Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Preference Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-display text-amber-900 mb-6">
              Ceritakan Preferensi Anda
            </h3>
            
            {/* Interest Selection */}
            <div className="mb-6">
              <label className="block text-amber-700 font-heading text-sm mb-3">
                Minat Anda (Pilih yang sesuai):
              </label>
              <div className="grid grid-cols-2 gap-2">
                {interestOptions.map(interest => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                      userPreferences.interests.includes(interest)
                        ? 'bg-amber-500 text-amber-900 shadow-md'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-6">
              <label className="block text-amber-700 font-heading text-sm mb-3">
                Budget Tiket:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'low', label: 'Murah (<15k)' },
                  { value: 'medium', label: 'Sedang (15-25k)' },
                  { value: 'high', label: 'Mahal (>25k)' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handlePreferenceChange('budget', option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                      userPreferences.budget === option.value
                        ? 'bg-amber-500 text-amber-900 shadow-md'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Available */}
            <div className="mb-6">
              <label className="block text-amber-700 font-heading text-sm mb-3">
                Waktu yang Tersedia:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'quick', label: 'Cepat (1 jam)' },
                  { value: 'half-day', label: 'Setengah Hari' },
                  { value: 'full-day', label: 'Seharian' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handlePreferenceChange('timeAvailable', option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                      userPreferences.timeAvailable === option.value
                        ? 'bg-amber-500 text-amber-900 shadow-md'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Group Size */}
            <div className="mb-6">
              <label className="block text-amber-700 font-heading text-sm mb-3">
                Ukuran Grup:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'small', label: 'Sendiri' },
                  { value: 'medium', label: 'Pasangan' },
                  { value: 'large', label: 'Keluarga' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handlePreferenceChange('groupSize', option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                      userPreferences.groupSize === option.value
                        ? 'bg-amber-500 text-amber-900 shadow-md'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="mb-8">
              <label className="block text-amber-700 font-heading text-sm mb-3">
                Transportasi:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'public', label: 'Transportasi Umum' },
                  { value: 'private', label: 'Kendaraan Pribadi' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handlePreferenceChange('transportation', option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                      userPreferences.transportation === option.value
                        ? 'bg-amber-500 text-amber-900 shadow-md'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateRecommendations}
              disabled={userPreferences.interests.length === 0}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 py-3 px-6 rounded-lg font-button hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Dapatkan Rekomendasi
            </button>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-display text-amber-900 mb-6">
              Rekomendasi untuk Anda
            </h3>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mb-4"></div>
                <p className="text-amber-600 font-body">Menganalisis preferensi Anda...</p>
              </div>
            ) : recommendations.length > 0 ? (
              <div className="space-y-4">
                {recommendations.map((museum, index) => (
                  <div key={museum.id} className="border border-amber-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={museum.image}
                        alt={museum.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-amber-900 text-lg">
                            {museum.name}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-button">
                              #{index + 1}
                            </div>
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-button">
                              {museum.matchScore}% Match
                            </div>
                          </div>
                        </div>
                        <p className="text-amber-600 font-body text-sm mb-2">
                          📍 {museum.location} • ⏱️ {museum.duration} • 💰 Rp {museum.price.toLocaleString()}
                        </p>
                        <p className="text-amber-700 font-body text-sm mb-3">
                          {museum.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {museum.highlights.map((highlight: string, idx: number) => (
                            <span key={idx} className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs font-body">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-xl font-display text-amber-900 mb-2">
                  Belum Ada Rekomendasi
                </h4>
                <p className="text-amber-600 font-body">
                  Pilih minat Anda dan klik "Dapatkan Rekomendasi" untuk melihat museum yang sesuai
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
