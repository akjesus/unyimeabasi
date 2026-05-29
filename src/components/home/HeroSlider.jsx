import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/sliders/1.png",
    title: "Legal Expertise Rooted in Research & Policy",
    subtitle:
      "Providing strategic legal advisory, policy analysis, and research-driven solutions for institutions and individuals.",
  },
  {
    image: "/sliders/1.png",
    title: "Advancing Justice Through Research & Advocacy",
    subtitle:
      "Focused on human rights, governance reform, and evidence-based legal solutions across local and global systems.",
  },
  {
    image: "/sliders/1.png",
    title: "Trusted Counsel for Legal & Institutional Challenges",
    subtitle:
      "Supporting organizations, policymakers, and businesses with high-level legal analysis and regulatory insight.",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen min-h-[700px]">
              {/* IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                  >
                    {/* SMALL LABEL */}
                    <p className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold mb-5">
                      Legal • Research • Policy
                    </p>

                    {/* TITLE */}
                    <h1
                      className="
                        text-white
                        font-bold
                        leading-tight
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                      "
                    >
                      {slide.title}
                    </h1>

                    {/* SUBTITLE */}
                    <p
                      className="
                        mt-6
                        text-gray-200
                        text-base
                        sm:text-lg
                        leading-relaxed
                        max-w-2xl
                      "
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-8">
                      <Link to={"/contact"}>
                        <button
                          className="
                          border border-white/30
                          hover:bg-white
                          hover:text-black
                          text-white
                          px-7
                          py-4
                          rounded-xl
                          font-semibold
                          transition
                        "
                        >
                          COntact Me
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
