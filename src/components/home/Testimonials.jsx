import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Emily Carter",
    role: "Professor of Law, University of Toronto",
    text: "An exceptional legal scholar whose research contributions significantly influence contemporary human rights discourse in Canada and beyond.",
  },
  {
    name: "Michael Johnson",
    role: "Policy Advisor, Government of Canada",
    text: "His policy analysis is both rigorous and practical. His insights have directly shaped several legislative frameworks.",
  },
  {
    name: "Sarah Williams",
    role: "International Legal Consultant",
    text: "One of the most detail-oriented and intellectually grounded professionals I have worked with in international law.",
  },
  {
    name: "Amina Hassan",
    role: "Human Rights Advocate",
    text: "A strong voice in human rights advocacy with a deep commitment to justice and ethical legal reform.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Trusted by Academics & Policy Experts
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-base sm:text-lg">
            A record of impactful contributions across law, research, and public
            policy development.
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div
                  className="
                    h-full
                    p-6 sm:p-8
                    bg-white
                    border border-gray-200
                    rounded-2xl
                    shadow-sm
                    hover:shadow-md
                    transition-all duration-300
                  "
                >
                  {/* Quote */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* Name */}
                  <h4 className="text-slate-900 font-semibold text-lg">
                    {item.name}
                  </h4>

                  {/* Role */}
                  <p className="text-yellow-600 text-sm mt-1">{item.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
