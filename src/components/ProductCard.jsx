import { HiOutlineShoppingCart, HiStar } from 'react-icons/hi'

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div 
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20"
      id={`product-${product.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
          {product.discount && (
            <span className="bg-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
            <HiOutlineShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-amber-400">
            <HiStar className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-900 mb-2 truncate group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-3">
          <span className="text-lg font-extrabold text-gray-900">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm font-medium text-gray-400 line-through">₹{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
