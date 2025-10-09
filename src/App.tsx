import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Selamat Datang di MuseGuide
          </h1>
          <p className="text-amber-700 text-lg">
            Temukan museum terbaik di Yogyakarta dengan rekomendasi yang tepat untuk Anda
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
