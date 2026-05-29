import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const images = [
  "/sliders/1.png",
  "/images/lawyer2.jpg",
  "/images/lawyer3.jpg",
  "/images/lawyer4.jpg",
];

export default function HeroSlider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        w-full
        min-w-0
        max-w-full
        overflow-hidden
      "
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="
          w-full
          h-[360px]
          sm:h-[480px]
          lg:h-[650px]
          rounded-2xl
          overflow-hidden
        "
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`slide-${i}`}
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </motion.div>
  );
}
