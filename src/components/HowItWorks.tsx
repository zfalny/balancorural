import React from 'react'
import { MessageCircle, UserCheck, FileText, Bot } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Converse com Seu Duardo",
      description: "Inicie uma conversa no WhatsApp com nosso assistente IA que explicará tudo sobre nossos serviços",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: UserCheck,
      title: "Atendimento Especializado",
      description: "Um especialista entrará em contato para finalizar o pagamento e entender suas necessidades específicas",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: FileText,
      title: "Planilhas Personalizadas",
      description: "Criamos planilhas customizadas baseadas nas demandas específicas da sua fazenda",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: Bot,
      title: "IA Personalizada",
      description: "Nossa segunda IA assume e preenche automaticamente suas planilhas com dados atualizados",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente para revolucionar a gestão financeira da sua fazenda
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl transform rotate-3"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
