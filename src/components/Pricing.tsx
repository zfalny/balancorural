import React from 'react'
import { Check, MessageCircle, Sparkles } from 'lucide-react'

const Pricing = () => {
  const whatsappLink = "https://wa.me/5511979710689?text=Ol%C3%A1%2C%20Seu%20Duardo!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."

  const benefits = [
    "Atendimento via WhatsApp com Seu Duardo (IA)",
    "Consultoria com especialistas por vídeo chamada",
    "Planilhas financeiras personalizadas",
    "IA exclusiva para sua fazenda",
    "Relatórios mensais detalhados",
    "Análise de custos e receitas",
    "Previsões financeiras inteligentes",
    "Suporte técnico prioritário",
    "Atualizações automáticas",
    "Dados seguros e criptografados"
  ]

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investimento que se Paga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a gestão financeira da sua fazenda com um investimento acessível
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <Sparkles className="w-4 h-4" />
                  Plano Completo
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">R$ 199,90</span>
                    <span className="text-xl text-gray-600">/mês</span>
                  </div>
                  <p className="text-gray-600 mt-2">Cancele quando quiser, sem multas</p>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-full hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Começar Agora
                </a>

                {/* Guarantee */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    🛡️ Garantia de 7 dias ou seu dinheiro de volta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
