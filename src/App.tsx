import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-display text-amber-900 mb-6 leading-tight">
              Selamat Datang di <span className="text-gradient">MuseGuide</span>
            </h1>
            <p className="text-amber-700 text-xl font-body max-w-2xl mx-auto leading-relaxed">
              Temukan museum terbaik di Yogyakarta dengan rekomendasi yang tepat untuk Anda
            </p>
          </div>
        </section>
        
        {/* Museum Showcase */}
        <HeroSection />
      </main>
    </div>
  )
}

export default App
