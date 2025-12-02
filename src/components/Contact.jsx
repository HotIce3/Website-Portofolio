import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappMessage =
    "Halo! Saya ingin memesan kopi dari Kopi Nusantara Brew";
  const whatsappURL = `https://wa.me/62123456789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="section-padding-y bg-coffee-cream dark:bg-coffee-black">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div>
            <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-dark dark:text-coffee-gold mb-10">
              Kunjungi Kami
            </h2>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-coffee-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-gold group-hover:text-white transition-colors duration-300">
                  <MapPin
                    size={28}
                    className="text-coffee-gold group-hover:text-coffee-black"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark dark:text-coffee-gold mb-2">
                    Lokasi
                  </h3>
                  <p className="text-coffee-dark/70 dark:text-coffee-cream/70 leading-relaxed">
                    Jl. Sudirman No. 123,
                    <br /> Jakarta Pusat 12910, Indonesia
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-coffee-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-gold group-hover:text-white transition-colors duration-300">
                  <Clock
                    size={28}
                    className="text-coffee-gold group-hover:text-coffee-black"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark dark:text-coffee-gold mb-2">
                    Jam Operasional
                  </h3>
                  <p className="text-coffee-dark/70 dark:text-coffee-cream/70 leading-relaxed">
                    Senin - Jumat: 07:00 - 22:00 WIB
                    <br />
                    Sabtu - Minggu: 08:00 - 23:00 WIB
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-coffee-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-gold group-hover:text-white transition-colors duration-300">
                  <Phone
                    size={28}
                    className="text-coffee-gold group-hover:text-coffee-black"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark dark:text-coffee-gold mb-2">
                    Hubungi Kami
                  </h3>
                  <a
                    href="tel:+62123456789"
                    className="text-coffee-dark/70 dark:text-coffee-cream/70 hover:text-coffee-gold transition-colors text-lg"
                  >
                    +62 123 456 789
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-primary inline-flex w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Chat di WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-coffee-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2409783472!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
