import { HiOutlineTruck, HiOutlineSupport, HiOutlineLockClosed, HiOutlineArrowUturnLeft } from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineTruck className="w-8 h-8" />,
    title: 'Free Shipping',
    description: 'On all orders over $100. We ship worldwide with care.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: <HiOutlineSupport className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Our dedicated team is here to help you anytime, anywhere.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: <HiOutlineLockClosed className="w-8 h-8" />,
    title: 'Secure Payment',
    description: 'Multiple secure payment options for your peace of mind.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: <HiOutlineArrowUturnLeft className="w-8 h-8" />,
    title: 'Money Back',
    description: '30-day guarantee for a risk-free shopping experience.',
    color: 'bg-primary-dark/10 text-primary-dark',
  },
]

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={`mb-6 p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
