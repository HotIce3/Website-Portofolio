import React from "react";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Coffee Enthusiast",
    review:
      "Kopi terbaik yang pernah saya coba! Rasanya authentic dan ambiance cafénya sangat premium. Pasti akan datang lagi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Digital Nomad",
    review:
      "Tempat favorit saya untuk bekerja. Kopi-nya smooth, tidak terlalu asam, dan barista-nya sangat friendly dan knowledgeable.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Ahmad Pratama",
    role: "Food Blogger",
    review:
      "Espresso mereka worth every penny. Crema-nya perfect, dan setiap detail brewing attention to detail. Recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Rina Wijaya",
    role: "Student",
    review:
      "Latte art-nya beautiful dan kopi-nya tidak pahit. Suasana kafe yang cozy dan musik yang ambient. Love it!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding-y bg-coffee-dark text-coffee-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container-xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-gold mb-6">
            Apa Kata Pelanggan
          </h2>
          <p className="text-coffee-cream/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Pengalaman nyata dari pelanggan setia kami yang telah merasakan
            keajaiban setiap cangkir kopi Nusantara.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-16"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Menampilkan 3 kolom di layar besar agar tidak terlalu lebar
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-coffee-black/40 backdrop-blur-sm rounded-3xl p-8 border border-coffee-gold/10 h-full flex flex-col hover:border-coffee-gold/30 transition-all duration-300">
                <Quote className="text-coffee-gold/20 mb-6" size={40} />

                <p className="text-coffee-cream/90 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-coffee-gold"
                  />
                  <div>
                    <h3 className="font-bold text-coffee-gold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-coffee-cream/60 uppercase tracking-wider mb-1">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-0.5">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
