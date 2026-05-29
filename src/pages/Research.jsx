import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";
import { FileText, Globe, Scale, BookOpen } from "lucide-react";

const categories = [
  {
    icon: Scale,
    title: "Legal Research",
    desc: "Constitutional law, human rights, and judicial systems analysis.",
  },
  {
    icon: Globe,
    title: "International Law",
    desc: "Cross-border governance, treaties, and global legal frameworks.",
  },
  {
    icon: BookOpen,
    title: "Policy Studies",
    desc: "Evidence-based policy development and institutional reform.",
  },
  {
    icon: FileText,
    title: "Academic Publications",
    desc: "Peer-reviewed journals and scholarly legal contributions.",
  },
];

const papers = [
  {
    title: "Human Rights and Modern Governance Structures",
    journal: "International Law Review",
    year: "2025",
  },
  {
    title: "Climate Justice and Global Legal Responsibility",
    journal: "Canadian Policy Journal",
    year: "2024",
  },
  {
    title: "Legal Frameworks for Sustainable Development",
    journal: "Global Governance Studies",
    year: "2024",
  },
];

export default function Research() {
  useDocumentTitle("Research | UnyimeAbasi");
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold"
          >
            Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Tech  & Consultancy Researcher 
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Legal, Policy & Academic Research
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            A multidisciplinary research portfolio focused on law, governance,
            international policy, and institutional reform.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                  p-6
                  border border-gray-200
                  rounded-2xl
                  hover:shadow-md
                  transition
                  bg-white
                "
              >
                <item.icon className="text-yellow-600 mb-4" />

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PAPERS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured Research Papers
            </h2>
            <p className="text-gray-600 mt-4">
              Selected peer-reviewed contributions in law and policy research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {papers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {paper.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {paper.journal} • {paper.year}
                </p>

                <button className="mt-4 text-yellow-600 text-sm font-medium hover:underline">
                  View Paper →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}