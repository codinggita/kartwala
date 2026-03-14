import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  Support: [
    { name: 'Help Center', path: '/help' },
    { name: 'Track Order', path: '/track' },
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'FAQs', path: '/faqs' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'Cookie Policy', path: '/cookies' },
  ],
}

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="section-container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-white">
                Kart <span className="text-primary-light">Wala</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Your one-stop online shopping destination. Discover amazing products, great deals, and a seamless shopping experience.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Kart Wala. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with 💜 in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
