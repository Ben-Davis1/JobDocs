const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-warm-50/95 backdrop-blur-sm z-50 border-b border-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and brand name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
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
            <span className="font-semibold text-xl text-gray-900">JobDocs</span>
          </div>
          
          {/* Navigation items */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-primary-700 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-primary-700 hover:text-primary-600 transition-colors font-medium">
              How it Works
            </a>
            <a href="#testimonials" className="text-primary-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </a>
          </nav>
          
          {/* CTA button */}
          <button className="bg-primary-600 text-white px-5 py-2.5 rounded-full hover:bg-primary-700 transition-all hover:shadow-lg font-medium">
            Get Early Access
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header