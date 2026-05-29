import { motion } from "framer-motion";
import { Scale, Gavel, Globe, FileText, Users, Landmark } from "lucide-react";

const expertise = [
  {
    icon: Scale,
    title: "Human Rights Law",
    desc: "Advocating for justice, equality, and protection of fundamental rights across jurisdictions.",
  },
  {
    icon: Globe,
    title: "International Law",
    desc: "Cross-border legal frameworks, treaties, and global governance research.",
  },
  {
    icon: Gavel,
    title: "Litigation & Advocacy",
    desc: "Strategic legal representation and policy-driven advocacy in complex cases.",
  },
  {
    icon: FileText,
    title: "Policy Research",
    desc: "Evidence-based analysis for governments, institutions, and NGOs.",
  },
  {
    icon: Users,
    title: "Legal Consultation",
    desc: "Expert advisory services for individuals, organizations, and institutions.",
  },
  {
    icon: Landmark,
    title: "Public Law",
    desc: "Constitutional interpretation, governance structures, and regulatory systems.",
  },
];

export default function LegalExpertise() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-slate-950">
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
            Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Legal & Research Specializations
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            A multidisciplinary approach combining legal practice, academic
            research, and global policy development.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                relative
                group
              "
            >
              {/* GLASS CARD */}
              <div
                className="
                  relative
                  p-6 sm:p-8
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-500/10 to-blue-500/10" />

                {/* ICON */}
                <div className="relative mb-5">
                  <item.icon className="text-yellow-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                </div>

                {/* TITLE */}
                <h3 className="relative text-xl sm:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
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
