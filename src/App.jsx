import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FeaturedProducts from './components/FeaturedProducts'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <Newsletter />
      </main>
    </div>
  )
}

export default App
