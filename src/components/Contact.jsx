import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  const whatsappMessage =
    "Halo! Saya ingin memesan kopi dari Kopi Nusantara Brew";
  const whatsappURL = `https://wa.me/62123456789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="py-20 bg-coffee-cream dark:bg-coffee-black">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-coffee-dark dark:text-coffee-gold mb-8">
              Kunjungi Kami
            </h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4">
                <MapPin
                  className="text-coffee-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Lokasi
                  </h3>
                  <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Jl. Sudirman No. 123, Jakarta Pusat 12910
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock
                  className="text-coffee-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Jam Operasional
                  </h3>
                  <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Senin - Minggu: 07:00 - 22:00 WIB
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone
                  className="text-coffee-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Hubungi Kami
                  </h3>
                  <a
                    href="tel:+62123456789"
                    className="text-coffee-dark dark:text-coffee-cream text-opacity-70 hover:text-coffee-gold transition-colors"
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
                className="mt-8 inline-block btn-primary"
              >
                💬 Chat di WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5019457!2d106.8212!3d-6.1753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e6e6e6e6e7%3A0x1!2zS29waSBOdXNhbnRhcmEgQnJldw!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="coffee-shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
