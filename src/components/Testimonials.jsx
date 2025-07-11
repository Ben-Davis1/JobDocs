const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Freelance Designer',
      location: 'London',
      quote: 'I spend hours every week creating invoices and quotes. JobDocs would save me so much time - I could actually focus on my design work instead of admin. The AI suggestions for payment terms would be incredibly helpful.',
      avatar: 'ST'
    },
    {
      name: 'James Mitchell',
      role: 'Plumbing Services',
      location: 'Manchester',
      quote: 'When I finish a job, I need to send a quote right away while the client is still keen. JobDocs would let me do this professionally from my van. No more scribbling on paper or losing potential work.',
      avatar: 'JM'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What UK Small Business Owners Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from sole traders and small businesses who can't wait to use JobDocs
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-warm-50 p-8 rounded-2xl border-2 border-warm-100 hover:border-primary-200 transition-all">
              {/* Quote */}
              <p className="text-primary-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                
                {/* Name and details */}
                <div>
                  <p className="font-semibold text-primary-800">{testimonial.name}</p>
                  <p className="text-sm text-primary-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials