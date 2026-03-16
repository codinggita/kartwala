import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '4,999',
      oldPrice: '7,999',
      category: 'Electronics',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
      isNew: true,
      discount: 35
    },
    {
      id: 2,
      name: 'Minimalist Cotton T-Shirt',
      price: '899',
      category: 'Fashion',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Smart Watch Series X',
      price: '12,499',
      oldPrice: '15,999',
      category: 'Electronics',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
      discount: 20
    },
    {
      id: 4,
      name: 'Ergonomic Office Chair',
      price: '8,499',
      category: 'Home',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop',
    }
  ]

  return (
    <section id="featured-products" className="py-20 bg-gray-50/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Check out our most popular items hand-picked for their quality and popularity among our customers.
            </p>
          </div>
          <Link 
            to="/products" 
            className="text-primary font-bold hover:underline decoration-2 underline-offset-4"
          >
            Explore All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
