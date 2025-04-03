import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVision Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "Chrispus delivered exceptional results for our platform migration. His expertise in Django and React significantly improved our system's performance.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content: "Working with Chrispus was fantastic. His attention to security details and clean code practices made our application robust and scalable.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content: "Chrispus's full-stack expertise helped us launch our MVP in record time. His problem-solving skills are truly impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 space-y-6 hover:neon-glow transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-300 italic">{testimonial.content}</p>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;