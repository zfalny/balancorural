import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappLink = "https://wa.me/5511979710689?text=Ol%C3%A1%2C%20Seu%20Duardo!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setShowTooltip(true), 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-72 animate-fade-in">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Fale com Seu Duardo! 👋
              </p>
              <p className="text-xs text-gray-600">
                Tire suas dúvidas sobre gestão financeira para fazendas
              </p>
            </div>
          )}

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </a>
        </div>
      )}
    </>
  )
}

export default FloatingWhatsApp
