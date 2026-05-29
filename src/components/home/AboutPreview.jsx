import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, BookOpen, Scale } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/sliders/1.png"
              alt="About Researcher"
              className="
                w-full
                h-[380px]
                sm:h-[500px]
                lg:h-[600px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-yellow-500">
                15+
              </p>
              <p className="text-xs sm:text-sm text-gray-300">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="text-yellow-600 font-semibold tracking-[3px] uppercase text-sm mb-4">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Lawyer, Scholar, and Policy Expert
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Providing rigorous and relevant research, regulatory and policy
              recommendations about real issues at the intersection of finance,
              law and technology
            </p>

            {/* FEATURE CARDS */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              <div className="p-5 rounded-2xl border hover:shadow-md transition">
                <Scale className="text-yellow-600 mb-3" />
                <h4 className="font-semibold mb-1">Legal Practice</h4>
                <p className="text-sm text-gray-500">
                  Human rights & international law
                </p>
              </div>

              <div className="p-5 rounded-2xl border hover:shadow-md transition">
                <BookOpen className="text-yellow-600 mb-3" />
                <h4 className="font-semibold mb-1">Research</h4>
                <p className="text-sm text-gray-500">
                  Academic journals & policy papers
                </p>
              </div>

              <div className="p-5 rounded-2xl border hover:shadow-md transition">
                <Award className="text-yellow-600 mb-3" />
                <h4 className="font-semibold mb-1">Recognition</h4>
                <p className="text-sm text-gray-500">
                  Awards & global speaking events
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition inline-block"
            >
              Read Full Biography
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
