import { HiOutlineMail } from 'react-icons/hi'

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="section-container">
        <div className="relative overflow-hidden bg-primary  px-8 py-16 md:px-16 md:py-20 shadow-2xl shadow-primary/20">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary-dark/30 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
                Stay in the loop with <span className="text-secondary-light">Kart Wala</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium">
                Subscribe to our newsletter and get exclusive deals, new arrivals, and shopping tips delivered straight to your inbox.
              </p>
            </div>

            <div className="w-full max-w-md">
              <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
              >
                <div className="flex-grow flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-inner">
                  <HiOutlineMail className="w-5 h-5 text-gray-400 shrink-0" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 font-medium"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-extrabold rounded-xl transition-all duration-300 shadow-lg shadow-black/10 active:scale-95"
                >
                  Join Now
                </button>
              </form>
              <p className="mt-4 text-center lg:text-left text-sm text-white/60 font-medium">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
