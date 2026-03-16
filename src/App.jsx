import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
      </main>
    </div>
  )
}

export default App
