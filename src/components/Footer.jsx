const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#ecc19d"/>
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
              <span className="font-semibold text-xl text-white">JobDocs</span>
            </div>
            <p className="text-primary-200 mb-4 max-w-md">
              The fastest way for UK sole traders and small businesses to create professional 
              quotes and invoices. Get paid faster with less hassle.
            </p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-300 text-sm">
          <p>&copy; 2025 JobDocs. All rights reserved. Made with ❤️ in the UK.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer