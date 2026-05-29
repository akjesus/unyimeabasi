import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[450px] lg:w-[700px] h-[250px] sm:h-[450px] lg:h-[700px] bg-yellow-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            min-h-screen
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
            pt-28
            pb-16
            lg:py-24
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              order-2 lg:order-1
              text-center lg:text-left
            "
          >
            <p
              className="
                uppercase
                tracking-[3px]
                sm:tracking-[5px]
                text-yellow-500
                text-[11px]
                sm:text-sm
                font-medium
                mb-5
              "
            >
              Researcher • Lawyer • Policy Advocate
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                font-bold
                text-white
                leading-tight
                mb-6
              "
            >
              Providing Legal, Regulatory and Policy Solutions
            </h1>

            <p
              className="
                text-gray-300
                text-base
                sm:text-lg
                leading-relaxed
                max-w-2xl
                mx-auto lg:mx-0
                mb-10
              "
            >
              Expertise and insight for navigating complex, shifting, law,
              finance, and technology landscape
            </p>

            <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md mx-auto lg:mx-0 mb-10">
              <AnimatedCounter to={40} suffix="+" label="Publications" />
              <AnimatedCounter to={20} suffix="+" label="Conferences" />
              <AnimatedCounter to={15} suffix="+" label="Years Experience" />
            </div>
            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                lg:justify-start
              "
            >
              <button
                className="
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                "
              >
                View Publications
              </button>

              <button
                className="
                  border
                  border-white/20
                  hover:border-white
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  transition-all
                "
              >
                Book Consultation
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="order-1 lg:order-2 w-full min-w-0">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
