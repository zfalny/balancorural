import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Como funciona o atendimento do Seu Duardo?",
      answer: "Seu Duardo é nossa IA de atendimento via WhatsApp. Ele está disponível 24/7 para explicar nossos serviços, tirar dúvidas e iniciar seu processo de cadastro. Após a conversa inicial, um especialista humano entra em contato para personalizar o serviço."
    },
    {
      question: "Preciso ter conhecimento técnico para usar o sistema?",
      answer: "Não! Nossa plataforma foi desenvolvida pensando na simplicidade. Seu Duardo e nossa equipe cuidam de toda parte técnica. Você só precisa fornecer as informações da sua fazenda."
    },
    {
      question: "Como funciona a consultoria por vídeo chamada?",
      answer: "Nossos especialistas estão disponíveis para chamadas de vídeo agendadas. Você pode tirar dúvidas, revisar relatórios e receber orientações personalizadas sobre a gestão financeira da sua fazenda."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas. Acreditamos que você vai querer continuar pelos resultados, não por obrigação."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! Utilizamos criptografia de ponta e seguimos todas as normas de segurança e privacidade. Seus dados financeiros são tratados com máximo sigilo e proteção."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos nossos clientes reporta melhorias na organização financeira já na primeira semana. Resultados mais significativos, como redução de custos e aumento de eficiência, geralmente aparecem no primeiro mês."
    }
  ]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o Balanço Rural
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
