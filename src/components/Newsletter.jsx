import { useState } from 'react'
import { HiOutlineMail, HiOutlinePaperAirplane } from 'react-icons/hi'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section
      id="newsletter"
      className="bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content - everything centered */}
      <div
        style={{
          position: 'relative',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <HiOutlineMail style={{ width: '32px', height: '32px', color: 'white' }} />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '20px',
            lineHeight: 1.2,
          }}
        >
          Stay Updated
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}
        >
          Subscribe to our newsletter for exclusive deals, new arrivals, and special offers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            width: '100%',
            maxWidth: '480px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            style={{
              flex: '1 1 250px',
              padding: '14px 20px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: 'none',
              color: '#1f2937',
              fontSize: '14px',
              fontWeight: 500,
              outline: 'none',
              minWidth: '0',
            }}
          />
          <button
            id="subscribe-btn"
            type="submit"
            style={{
              padding: '14px 32px',
              backgroundColor: '#F59E0B',
              color: '#1f2937',
              fontWeight: 700,
              fontSize: '14px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {isSubmitted ? '✅ Subscribed!' : 'Subscribe'}
            {!isSubmitted && (
              <HiOutlinePaperAirplane style={{ width: '16px', height: '16px', transform: 'rotate(90deg)' }} />
            )}
          </button>
        </form>

        {/* Trust text */}
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '24px' }}>
          🔒 No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
