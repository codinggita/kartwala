import { Link } from 'react-router-dom'

const CategorySection = () => {
  const categories = [
    {
      name: 'Electronics',
      itemCount: '2.5k+ Items',
      icon: '📱',
      color: 'bg-blue-50 text-blue-600',
      path: '/categories/electronics'
    },
    {
      name: 'Fashion',
      itemCount: '5k+ Items',
      icon: '👕',
      color: 'bg-purple-50 text-purple-600',
      path: '/categories/fashion'
    },
    {
      name: 'Home & Living',
      itemCount: '1.8k+ Items',
      icon: '🏠',
      color: 'bg-amber-50 text-amber-600',
      path: '/categories/home'
    },
    {
      name: 'Beauty',
      itemCount: '1.2k+ Items',
      icon: '💄',
      color: 'bg-pink-50 text-pink-600',
      path: '/categories/beauty'
    },
    {
      name: 'Sports',
      itemCount: '900+ Items',
      icon: '🏀',
      color: 'bg-green-50 text-green-600',
      path: '/categories/sports'
    },
    {
      name: 'Books',
      itemCount: '3.1k+ Items',
      icon: '📚',
      color: 'bg-indigo-50 text-indigo-600',
      path: '/categories/books'
    }
  ]

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Shop by {' '}
              <span className="text-primary">Categories</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Explore our wide range of categories and find exactly what you're looking for with our curated collections.
            </p>
          </div>
          <Link 
            to="/categories" 
            className="text-primary font-bold hover:underline decoration-2 underline-offset-4"
          >
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-400 font-medium">{category.itemCount}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
