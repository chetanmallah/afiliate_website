import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden">
        <div className="absolute top-8 left-8 w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center opacity-50">
          <Quote className="text-teal-600" size={40} />
        </div>

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={24} />
            ))}
          </div>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
            "{testimonials[currentIndex].quote}"
          </p>

          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-teal-100"
            />
            <h4 className="text-xl font-bold text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-teal-600 font-semibold">
              {testimonials[currentIndex].role}
            </p>
            <p className="text-gray-600">{testimonials[currentIndex].company}</p>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-teal-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
