const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Generate professional documents in under 30 seconds. No more hours spent on formatting.'
    },
    {
      icon: '🎨',
      title: 'Branded Templates',
      description: 'Automatically apply your brand colours, logo, and style to every document.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered',
      description: 'Smart suggestions for payment terms, item descriptions, and pricing based on your industry.'
    },
    {
      icon: '💷',
      title: 'UK Tax Compliant',
      description: 'Built specifically for UK businesses with proper VAT handling and HMRC compliance.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Create and send documents from anywhere, on any device. Perfect for on-site quotes.'
    },
    {
      icon: '📊',
      title: 'Track Everything',
      description: 'Know when clients view your documents and get notified when payments are due.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Get Paid Faster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wasting time on paperwork. Focus on growing your business while we handle the documents.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-warm-50 p-8 rounded-2xl border border-warm-100 hover:border-primary-200 transition-all hover:shadow-lg group"
            >
              {/* Feature icon */}
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              {/* Feature title */}
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {feature.title}
              </h3>
              
              {/* Feature description */}
              <p className="text-primary-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features