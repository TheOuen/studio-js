'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectDetails: '',
    services: [],
    budget: ''
  })

  const services = [
    'UX Design',
    'Drone Photography',
    'Web Development', 
    'App Development',
    'Architectural Renders'
  ]

  const budgetRanges = [
    'Under R10,000',
    'Under R20,000',
    'Under R50,000',
    'More than R50,000'
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Animate modal in
      gsap.fromTo('.modal-content', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
      )
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="modal-content relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-black text-blue-600 mb-4">
              Let&apos;s create something amazing!
            </h2>
            <p className="text-xl text-blue-700 font-medium">
              Based in Cape Town, working globally
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Full Name */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-2">
                Full name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full bg-transparent text-blue-800 text-lg font-medium placeholder-blue-400 border-none outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-transparent text-blue-800 text-lg font-medium placeholder-blue-400 border-none outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Company */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-2">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full bg-transparent text-blue-800 text-lg font-medium placeholder-blue-400 border-none outline-none"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Details */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-2">
                Project details
              </label>
              <textarea
                value={formData.projectDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                rows={6}
                className="w-full bg-transparent text-blue-800 text-lg font-medium placeholder-blue-400 border-none outline-none resize-none"
                placeholder="Tell me about your vision and goals"
              />
            </div>

            {/* What can I do for you? */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-4">
                What can I help you with?
              </label>
              <div className="space-y-3">
                {services.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`inline-block px-4 py-2 rounded-full border-2 transition-colors mr-2 mb-2 text-sm font-medium ${
                      formData.services.includes(service)
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-transparent text-blue-700 border-blue-400 hover:border-blue-500'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div className="bg-blue-200/50 rounded-2xl p-6">
              <label className="block text-blue-700 font-bold text-lg mb-4">
                Project budget range (ZAR)
              </label>
              <div className="space-y-3">
                {budgetRanges.map(range => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                    className={`inline-block px-4 py-2 rounded-full border-2 transition-colors mr-2 mb-2 text-sm font-medium ${
                      formData.budget === range
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-transparent text-blue-700 border-blue-400 hover:border-blue-500'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-black text-xl px-12 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              Let&apos;s collaborate!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 