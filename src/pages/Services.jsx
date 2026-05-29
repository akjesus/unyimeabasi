import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Legal Advisory",
    items: [
      "Corporate law, litigation, contracts, compliance",
      "Expert counsel for businesses and individuals",
    ],
  },
  {
    number: "02",
    title: "Research & Analysis",
    items: [
      "Regulatory impact assessment",
      "Technology impact assessment",
      "Privacy impact assessment",
      "Support for research institutions, NGOs and policymakers",
    ],
  },
  {
    number: "03",
    title: "Training & Capacity Building",
    items: [
      "Workshops, seminars on legal updates and research skills",
      "Empowering professionals and organizations",
    ],
  },
  {
    number: "04",
    title: "Advocacy for Legal and Policy Reforms",
    items: [
      "Drafting policies and regulations",
      "Assessment of regulatory and policy impact and effectiveness",
      "Collaborating with stakeholders for change",
    ],
  },
  {
    number: "05",
    title: "Due Diligence & Investigations",
    items: [
      "Legal audits, compliance checks, risk assessments",
      "Supporting businesses and institutions",
    ],
  },
  {
    number: "06",
    title: "Dispute Resolution & Mediation",
    items: [
      "Alternative dispute resolution services",
      "Efficient, amicable solutions for conflicts",
    ],
  },
];

export default function Services() {
  useDocumentTitle("Services | UnyimeAbasi");
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
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Legal, Research & Policy Services
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Legal, Policy & Academic Research
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Comprehensive professional services spanning legal advisory,
            research analysis, policy development, and dispute resolution.
          </p>
        </div>
      </section>
      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                  group
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-6 sm:p-8
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                  relative
                "
              >
                {/* NUMBER BADGE */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-yellow-100 transition">
                  {service.number}
                </div>

                {/* TITLE */}
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h2>

                {/* LIST */}
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm sm:text-base">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
