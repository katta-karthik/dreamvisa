import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Kumar',
    location: 'Delhi',
    text: 'Some communication delays, but eventually got my visa slot.',
    rating: 3,
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150'
  },
  {
    name: 'Neha Verma',
    location: 'Mumbai',
    text: 'Outstanding service! Got my UK student visa slot quickly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&w=150'
  },
  {
    name: 'Aishwarya Patel',
    location: 'Mumbai',
    text: 'Got my US student visa in just 4 days! The documentation support was exceptional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=150'
  },
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=150',
    text: 'Got my US student visa slot in just 3 days. Incredible service!',
    rating: 5
  },
  {
    name: 'Rahul Patel',
    image: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=150',
    text: 'Helpful team, but took a bit longer than expected. Still satisfied with the outcome.',
    rating: 4
  },
  {
    name: 'Anjali Desai',
    image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?auto=format&fit=crop&w=150',
    text: 'Made my Canada study visa process smooth and hassle-free.',
    rating: 5
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate maximum index based on viewport
  const getMaxIndex = () => {
    if (window.innerWidth >= 768) { // md breakpoint
      return Math.ceil(testimonials.length / 3) - 1;
    }
    return testimonials.length - 1;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = getMaxIndex();
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Group testimonials for desktop view
  const getVisibleTestimonials = () => {
    if (window.innerWidth >= 768) {
      const itemsPerPage = 3;
      const pages = [];
      for (let i = 0; i < testimonials.length; i += itemsPerPage) {
        pages.push(testimonials.slice(i, i + itemsPerPage));
      }
      return pages;
    }
    return testimonials.map(t => [t]); // Single item per page for mobile
  };

  return (
    <section className="py-8 md:py-16 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Hear From Our Happy Travelers
            <div className="h-0.5 md:h-1 w-24 sm:w-32 md:w-40 bg-yellow-400 mx-auto mt-2"></div>
          </h2>
          <p className="text-sm md:text-lg text-gray-400">
            Real experiences from our satisfied clients across India
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {getVisibleTestimonials().map((group, pageIndex) => (
                <div key={pageIndex} className="min-w-full flex">
                  {group.map((testimonial, index) => (
                    <div key={index} className="px-2 sm:px-3 w-full md:w-1/3">
                      <div className="bg-[#0B1121] rounded-lg p-3 sm:p-4 md:p-6 h-full border border-gray-800 
                        hover:border-yellow-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <img
                            src={testimonial.image}
                            alt=""
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                              {testimonial.name}
                            </h3>
                            <div className="flex gap-0.5 md:gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={10}
                                  className={`${
                                    i < testimonial.rating
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm md:text-base text-gray-400">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Update navigation dots to reflect grouped pages */}
          <div className="flex justify-center mt-4 md:mt-8 space-x-1.5 md:space-x-2">
            {[...Array(Math.ceil(testimonials.length / (window.innerWidth >= 768 ? 3 : 1)))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-4 md:w-6 bg-yellow-400'
                    : 'w-2 md:w-3 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}