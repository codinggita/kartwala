import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-50 via-white to-purple-50/50 pt-[70px]">
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '48px', paddingRight: '48px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '80px' }}>

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full" style={{ marginBottom: '32px' }}>
              ✨ New arrivals are here!
            </div>

            {/* Heading */}
            <h1
              className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)', marginBottom: '28px' }}
            >
              Shop Smart with{' '}
              <span className="text-primary">Kart Wala</span>
            </h1>

            {/* Description */}
            <p
              className="text-gray-500 leading-relaxed"
              style={{ fontSize: '18px', marginBottom: '44px', maxWidth: '500px' }}
            >
              <span className="lg:hidden" />
              Your One-Stop Online Shopping Destination. Discover amazing products,
              great deals, and seamless shopping experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ marginBottom: '50px' }}>
              <Link
                to="/products"
                id="shop-now-btn"
                className="group inline-flex items-center justify-center gap-2 font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                style={{ padding: '16px 36px', fontSize: '16px' }}
              >
                Shop Now
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                id="explore-btn"
                className="inline-flex items-center justify-center gap-2 font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary rounded-lg transition-all duration-300"
                style={{ padding: '16px 36px', fontSize: '16px' }}
              >
                Explore Products
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start" style={{ gap: '40px' }}>
              <div className="text-center lg:text-left">
                <p className="font-extrabold text-gray-900" style={{ fontSize: '32px' }}>50K+</p>
                <p className="text-gray-400 font-medium" style={{ fontSize: '14px', marginTop: '6px' }}>Products</p>
              </div>
              <div style={{ width: '1px', height: '48px', backgroundColor: '#e5e7eb' }} />
              <div className="text-center lg:text-left">
                <p className="font-extrabold text-gray-900" style={{ fontSize: '32px' }}>100K+</p>
                <p className="text-gray-400 font-medium" style={{ fontSize: '14px', marginTop: '6px' }}>Happy Customers</p>
              </div>
              <div style={{ width: '1px', height: '48px', backgroundColor: '#e5e7eb' }} />
              <div className="text-center lg:text-left">
                <p className="font-extrabold text-gray-900" style={{ fontSize: '32px' }}>4.8★</p>
                <p className="text-gray-400 font-medium" style={{ fontSize: '14px', marginTop: '6px' }}>Rating</p>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative flex items-center justify-center">
            {/* Hero Image Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Shopping with Kart Wala"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating badge - top left */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5 z-10">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center text-lg">🚚</div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Free Delivery</p>
                  <p className="text-[10px] text-gray-400">On orders above ₹499</p>
                </div>
              </div>

              {/* Floating badge - bottom right */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5 z-10">
                <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center text-lg">💸</div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Best Prices</p>
                  <p className="text-[10px] text-gray-400">Guaranteed lowest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
