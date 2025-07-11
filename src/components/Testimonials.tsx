import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Fazenda São José - GO",
      content: "O Balanço Rural revolucionou nossa gestão financeira. As planilhas automatizadas economizam horas de trabalho e os insights da IA são incríveis.",
      rating: 5,
      image: "https://st4.depositphotos.com/5189659/39082/i/450/depositphotos_390828240-stock-photo-happy-farmer-proudly-standing-in.jpg"
    },
    {
      name: "Maria Oliveira",
      role: "Fazenda Esperança - GO",
      content: "Seu Duardo é fantástico! Sempre disponível no WhatsApp e as consultorias por vídeo com os especialistas agregam muito valor.",
      rating: 5,
      image: "https://i.ibb.co/LDhLC58L/chocada-com.jpg"
    },
    {
      name: "Carlos Mendes",
      role: "Fazenda Boa Vista - GO",
      content: "Investimento que se paga no primeiro mês. A organização financeira que conseguimos é impressionante. Recomendo para todos os produtores.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produtores Satisfeitos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre a transformação em suas fazendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-green-200 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
