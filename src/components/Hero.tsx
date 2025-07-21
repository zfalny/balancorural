import React from 'react'
import { TrendingUp, MessageCircle, Calculator, ChevronRight } from 'lucide-react'

const Hero = () => {
  const whatsappLink = "https://wa.me/5511979710689?text=Ol%C3%A1%2C%20Seu%20Duardo!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme a Gestão Financeira
            <span className="block text-green-300">da Sua Fazenda</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Assistência financeira personalizada com IA para produtores rurais. 
            Planilhas automatizadas, análises precisas e suporte especializado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-700 bg-white rounded-full hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Seu Duardo
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
            <a
              href={whatsappLink} // Alterado para o mesmo link do WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Agendar Demonstração
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-300">500+</span>
              <span className="text-sm">Fazendas Atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-300">98%</span>
              <span className="text-sm">Satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-300">24/7</span>
              <span className="text-sm">Suporte via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-green-800/50 to-transparent rounded-3xl"></div>
          <img
            src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg"
            alt="Trator em campo agrícola ao pôr do sol"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          
          {/* Floating Cards */}
          <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Análise em Tempo Real</p>
                <p className="text-sm text-gray-600">Dados atualizados da sua fazenda</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Atendimento via WhatsApp</p>
                <p className="text-sm text-gray-600">Seu Duardo sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
