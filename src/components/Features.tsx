import React from 'react'
import { Brain, FileSpreadsheet, Video, Clock, Shield, BarChart3 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Inteligência artificial treinada especificamente para as necessidades da sua fazenda",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: FileSpreadsheet,
      title: "Planilhas Automatizadas",
      description: "Geração automática de planilhas financeiras customizadas para seu negócio rural",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Video,
      title: "Consultoria por Vídeo",
      description: "Atendimento humano especializado através de chamadas de vídeo quando precisar",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Seu Duardo está sempre disponível no WhatsApp para tirar suas dúvidas",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Suas informações financeiras protegidas com a mais alta segurança",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Análises completas e insights valiosos sobre a saúde financeira da fazenda",
      color: "bg-indigo-100 text-indigo-600"
    }
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tudo que Sua Fazenda Precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas poderosas e suporte especializado para transformar a gestão financeira do seu negócio rural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
