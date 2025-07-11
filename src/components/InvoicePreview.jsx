const InvoicePreview = ({ onGetStarted }) => {
  return (
    <section id="how-it-works" className="py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Professional Documents That Impress
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your brand, your style, perfectly formatted every time. JobDocs learns your 
              preferences and creates consistent, professional documents that make you look good.
            </p>
            
            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Automatic calculations and tax handling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Send directly via email or download as PDF</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Payment links and reminders included</span>
              </li>
            </ul>
            
            <button 
              onClick={onGetStarted}
              className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all font-medium hover:shadow-lg"
            >
              Start Creating Documents
            </button>
          </div>
          
          {/* Right column - Invoice preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-warm-200 to-primary-200 transform rotate-3 rounded-2xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-warm-100">
              {/* Invoice header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="w-12 h-12 mb-4">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="8" fill="#6b8e4e"/>
                      <g transform="translate(6, 4)">
                        <rect x="0" y="0" width="20" height="24" rx="2" fill="white"/>
                        <rect x="0" y="0" width="20" height="5" rx="2" fill="#445930"/>
                        <rect x="2" y="7" width="10" height="1.5" rx="0.5" fill="#afc89f"/>
                        <rect x="2" y="10" width="16" height="1.5" rx="0.5" fill="#d1e0c7"/>
                        <rect x="2" y="13" width="7" height="1.5" rx="0.5" fill="#afc89f"/>
                        <rect x="11" y="13" width="5" height="1.5" rx="0.5" fill="#afc89f"/>
                        <rect x="2" y="21" width="6" height="1.5" rx="0.5" fill="#557038"/>
                        <rect x="10" y="21" width="6" height="1.5" rx="0.5" fill="#557038"/>
                      </g>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">Your Business Name</h3>
                  <p className="text-sm text-gray-500">your@email.com</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">INVOICE</p>
                  <p className="text-sm text-gray-500">#INV-0001</p>
                </div>
              </div>
              
              {/* Invoice details */}
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Bill To:</p>
                    <p className="font-medium">Client Name Ltd</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Date: 11/01/2025</p>
                    <p className="text-gray-500">Due: 25/01/2025</p>
                  </div>
                </div>
              </div>
              
              {/* Invoice items */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Professional Services</span>
                  <span className="font-medium">£850.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Consultation (2 hours)</span>
                  <span className="font-medium">£200.00</span>
                </div>
              </div>
              
              {/* Invoice total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span>£1,050.00</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">VAT (20%)</span>
                  <span>£210.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary-600">£1,260.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvoicePreview