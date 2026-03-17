import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FeaturedProducts from './components/FeaturedProducts'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
