import { HiOutlineStar, HiStar, HiOutlineShoppingCart, HiOutlineHeart } from 'react-icons/hi'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    price: 2999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80',
    badge: 'Best Seller',
    badgeColor: 'bg-primary',
  },
  {
    id: 2,
    name: 'Smart Watch Ultra',
    price: 4999,
    originalPrice: 8999,
    rating: 4.6,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80',
    badge: '-44% Off',
    badgeColor: 'bg-red-500',
  },
  {
    id: 3,
    name: 'Premium Sneakers',
    price: 3499,
    originalPrice: 6999,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80',
    badge: 'Trending',
    badgeColor: 'bg-accent',
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 1999,
    originalPrice: 3999,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80',
    badge: 'New',
    badgeColor: 'bg-secondary',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 1499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80',
    badge: '-50% Off',
    badgeColor: 'bg-red-500',
  },
  {
    id: 6,
    name: 'Sunglasses Classic',
    price: 999,
    originalPrice: 1999,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&q=80',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 7,
    name: 'Fitness Band Elite',
    price: 1299,
    originalPrice: 2499,
    rating: 4.3,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&q=80',
    badge: '-48% Off',
    badgeColor: 'bg-red-500',
  },
  {
    id: 8,
    name: 'Laptop Stand Pro',
    price: 799,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&q=80',
    badge: 'Must Have',
    badgeColor: 'bg-primary',
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) =>
      star <= Math.floor(rating) ? (
        <HiStar key={star} className="w-3.5 h-3.5 text-amber-400" />
      ) : (
        <HiOutlineStar key={star} className="w-3.5 h-3.5 text-amber-400" />
      )
    )}
  </div>
)

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Top Picks</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Handpicked products just for you. Premium quality at unbeatable prices.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <span className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md`}>
                  {product.badge}
                </span>
                <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 shadow-sm">
                  <HiOutlineHeart className="w-4 h-4" />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-xs font-semibold text-accent ml-auto">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-200">
                  <HiOutlineShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
