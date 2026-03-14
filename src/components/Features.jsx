import { HiOutlineTruck, HiOutlineShieldCheck, HiOutlineCurrencyRupee, HiOutlineRefresh } from 'react-icons/hi'

const features = [
  {
    icon: HiOutlineTruck,
    title: 'Fast Delivery',
    description: 'Get your orders delivered within 2-3 business days with express shipping.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Secure Payments',
    description: 'Your transactions are fully encrypted with bank-level security.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: HiOutlineCurrencyRupee,
    title: 'Best Prices',
    description: "We guarantee the lowest prices. Found it cheaper? We'll match it.",
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: HiOutlineRefresh,
    title: 'Easy Returns',
    description: 'Not satisfied? Return within 30 days, completely hassle-free.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Kart Wala?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            We're committed to providing the best online shopping experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 text-center group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
