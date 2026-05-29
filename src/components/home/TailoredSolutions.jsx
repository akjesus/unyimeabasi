import { motion } from "framer-motion";
import { Scale, BookOpen, Landmark } from "lucide-react";

const solutions = [
  {
    icon: Scale,
    title: "Legal Solutions",
    desc: "Strategic legal advisory, litigation support, and human rights advocacy tailored to complex legal challenges.",
  },
  {
    icon: BookOpen,
    title: "Research Solutions",
    desc: "High-level academic and policy research designed to support institutions, publications, and evidence-based decisions.",
  },
  {
    icon: Landmark,
    title: "Policy Solutions",
    desc: "Data-driven policy development and institutional frameworks for governments, NGOs, and global organizations.",
  },
];

export default function TailoredSolutions() {
  return (
    <section className="relative py-24 sm:py-28 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold">
            What We Offer
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Tailored Solutions for Legal, Research, and Policy Challenges
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-base sm:text-lg">
            Delivering precision-driven expertise across law, academia, and
            policy-making to solve real-world institutional challenges.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div
                className="
                  relative
                  p-7 sm:p-9
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-500/10 to-blue-500/10" />

                {/* ICON */}
                <div className="relative mb-5">
                  <item.icon className="text-yellow-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                </div>

                {/* TITLE */}
                <h3 className="relative text-xl sm:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* subtle border glow */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-yellow-500/30 transition" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
