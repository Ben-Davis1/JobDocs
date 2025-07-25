import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import InvoicePreview from './components/InvoicePreview'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import EmailModal from './components/EmailModal'

function App() {
  // State to control email modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header navigation */}
      <Header onGetStarted={() => setIsModalOpen(true)} />
      
      {/* Hero section with main value proposition */}
      <Hero onGetStarted={() => setIsModalOpen(true)} />
      
      {/* Core features section */}
      <Features />
      
      {/* Visual preview of the product */}
      <InvoicePreview onGetStarted={() => setIsModalOpen(true)} />
      
      {/* Social proof through testimonials */}
      <Testimonials />
      
      {/* Footer with contact and links */}
      <Footer />
      
      {/* Email capture modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  )
}

export default App