import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { GiClothes, GiCookingPot, GiLipstick, GiWatch } from 'react-icons/gi'

const categories = [
  {
    name: 'Electronics',
    icon: HiOutlineDesktopComputer,
    color: 'bg-blue-500',
    bgLight: 'bg-blue-50',
    count: '2.5K+ Products',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=250&fit=crop&q=80',
  },
  {
    name: 'Fashion',
    icon: GiClothes,
    color: 'bg-pink-500',
    bgLight: 'bg-pink-50',
    count: '5K+ Products',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop&q=80',
  },
  {
    name: 'Home & Kitchen',
    icon: GiCookingPot,
    color: 'bg-amber-500',
    bgLight: 'bg-amber-50',
    count: '3K+ Products',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&q=80',
  },
  {
    name: 'Beauty',
    icon: GiLipstick,
    color: 'bg-purple-500',
    bgLight: 'bg-purple-50',
    count: '1.8K+ Products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop&q=80',
  },
  {
    name: 'Accessories',
    icon: GiWatch,
    color: 'bg-emerald-500',
    bgLight: 'bg-emerald-50',
    count: '4K+ Products',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=250&fit=crop&q=80',
  },
]

const FeaturedCategories = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Browse Categories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Featured Categories
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 ${category.color} rounded-lg flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{category.name}</h3>
                    <p className="text-xs text-gray-400">{category.count}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
