import { motion } from "framer-motion";
import { FileText, Download, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Human Rights and Policy Reform in Modern Governance",
    journal: "International Journal of Law & Policy",
    year: "2025",
    type: "Research Paper",
  },
  {
    title: "The Role of International Law in Climate Justice",
    journal: "Canadian Legal Review",
    year: "2024",
    type: "Law Review Article",
  },
  {
    title: "Policy Frameworks for Sustainable Governance",
    journal: "Global Policy Studies Journal",
    year: "2024",
    type: "Policy Paper",
  },
  {
    title: "Access to Justice in Developing Legal Systems",
    journal: "Journal of Comparative Law",
    year: "2023",
    type: "Research Article",
  },
];

export default function Publications() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold">
            Publications
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Research & Academic Contributions
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-base sm:text-lg">
            A collection of peer-reviewed research papers, policy analyses, and
            legal publications across international journals.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {publications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                group
                bg-white
                border border-gray-200
                rounded-2xl
                p-6 sm:p-8
                shadow-sm
                hover:shadow-md
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
                  <FileText size={20} />
                </div>

                <span className="text-xs font-medium text-yellow-600 uppercase tracking-wide">
                  {item.type}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* JOURNAL */}
              <p className="text-gray-600 text-sm mb-4">
                {item.journal} • {item.year}
              </p>

              {/* ACTIONS */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-slate-900 hover:text-yellow-600 transition">
                  <BookOpen size={16} />
                  Read
                </button>

                <button className="flex items-center gap-2 text-sm text-slate-900 hover:text-yellow-600 transition">
                  <Download size={16} />
                  PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
