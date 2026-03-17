import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tighter italic">
              Kart <span className="text-secondary">Wala</span>
            </h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Your one-stop destination for premium quality products. We bring you the latest trends with unmatched quality and service.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Shop All', 'New Arrivals', 'Featured Products', 'Categories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <HiOutlineMapPin className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-slate-400 font-medium">
                  123 Fashion Street, <br />
                  Ahmedabad, Gujarat, India
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <HiOutlinePhone className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-slate-400 font-medium">+91 98765 43210</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <HiOutlineMail className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-slate-400 font-medium">support@kartwala.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">
            © {currentYear} Kart Wala. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Privacy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Terms</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
