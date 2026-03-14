import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content - flex column with gap for section spacing */}
      <main className="flex flex-col gap-20 lg:gap-24">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <Features />
        <Newsletter />
      </main>

      {/* Footer - flush with content above */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
