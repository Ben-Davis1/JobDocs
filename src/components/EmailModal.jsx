import { useState } from 'react'

const EmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [thoughts, setThoughts] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/mblynwyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          thoughts: thoughts,
          source: 'JobDocs Landing Page'
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setEmail('')
          setThoughts('')
          onClose()
        }, 3000)
      } else {
        console.error('Form submission failed')
        alert('Sorry, there was an error. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Sorry, there was an error. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-warm-50 rounded-2xl shadow-xl max-w-md w-full p-8 border-2 border-warm-100">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-400 hover:text-primary-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {!isSubmitted ? (
            <>
              {/* Modal header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  Get Early Access
                </h3>
                <p className="text-primary-700">
                  Be among the first to revolutionise your invoicing. We'll notify you as soon as JobDocs launches.
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all"
                    required
                  />
                </div>
                
                {/* Thoughts textarea */}
                <div className="mb-4">
                  <label htmlFor="thoughts" className="block text-sm font-medium text-primary-700 mb-2">
                    Share your thoughts (optional)
                  </label>
                  <textarea
                    id="thoughts"
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                    placeholder="What features would you love to see? How could JobDocs help your business?"
                    className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all resize-none"
                    rows="3"
                  />
                </div>
                
                {/* Benefits */}
                <ul className="text-sm text-primary-700 mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50% off for early adopters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority onboarding support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Influence product features</span>
                  </li>
                </ul>
                
                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition-all font-medium hover:shadow-lg"
                >
                  Join the Waitlist
                </button>
                
                <p className="text-xs text-primary-600 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                You're on the list!
              </h3>
              <p className="text-primary-700">
                We'll email you at <span className="font-medium">{email}</span> when JobDocs is ready.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailModal