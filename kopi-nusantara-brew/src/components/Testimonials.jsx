import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    review:
      "Kopi terbaik yang pernah saya coba! Rasanya authentic dan ambiance cafénya sangat premium. Pasti akan datang lagi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    review:
      "Tempat favorit saya untuk bekerja. Kopi-nya smooth, tidak terlalu asam, dan barista-nya sangat friendly dan knowledgeable.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Ahmad Pratama",
    review:
      "Espresso mereka worth every penny. Crema-nya perfect, dan setiap detail brewing attention to detail. Recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Rina Wijaya",
    review:
      "Latte art-nya beautiful dan kopi-nya tidak pahit. Suasana kafe yang cozy dan musik yang ambient. Love it!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-coffee-dark text-coffee-cream">
      <div className="container-xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-coffee-cream text-opacity-70 max-w-2xl mx-auto">
            Pengalaman nyata dari pelanggan setia kami yang telah merasakan
            keajaiban setiap cangkir kopi Nusantara.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
          className="pb-12"
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-coffee-black bg-opacity-50 rounded-xl p-8 mx-2 border border-coffee-gold border-opacity-20 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-coffee-gold">
                      {testimonial.name}
                    </h3>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-coffee-gold text-coffee-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-coffee-cream text-opacity-80 italic">
                  "{testimonial.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
