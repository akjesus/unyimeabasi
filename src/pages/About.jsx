import { motion } from "framer-motion";
import {
  Scale,
  BookOpen,
  Globe,
  Award,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const timeline = [
  {
    year: "2025",
    title: "Senior Legal Researcher",
    org: "Canadian Policy Institute",
    desc: "Leading research on international law, human rights frameworks, and policy reform initiatives.",
  },
  {
    year: "2023 - 2024",
    title: "Legal Consultant",
    org: "Global Justice Network",
    desc: "Provided advisory services on cross-border legal frameworks and governance policy development.",
  },
  {
    year: "2021 - 2023",
    title: "Research Fellow",
    org: "University Research Center",
    desc: "Conducted peer-reviewed research in constitutional law and comparative legal systems.",
  },
  {
    year: "2018 - 2021",
    title: "Legal Associate",
    org: "Law Chambers",
    desc: "Practiced litigation, client advisory, and legal drafting in civil and human rights cases.",
  },
];
const impacts = [
  {
    icon: Scale,
    title: "Legal Expertise",
    desc: "Extensive experience in litigation, advisory, and human rights law.",
  },
  {
    icon: BookOpen,
    title: "Academic Research",
    desc: "Published contributions in international law and policy journals.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Work spanning international governance and cross-border legal systems.",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Acknowledged for contributions in policy reform and legal research.",
  },
];
const certifications = [
  {
    icon: Award,
    title: "Certified Information Privacy Professional/ Canada (CIPP/C)",
    issuer: "International Association of Privacy Professionals (IAPP)",
  },
  {
    icon: BadgeCheck,
    title: " Certified Information Privacy Manager (CIPM), 2024",
    issuer: "International Association of Privacy Professionals (IAPP)",
  },
  {
    icon: GraduationCap,
    title: "International Diploma in Governance, Risk and Compliance, 2024",
    issuer: "International Credential Assessment Service of Canada (ICAS)",
  },
  {
    icon: Award,
    title: "Certified AML Fintech Compliance Associate (CAFCA), 2024",
    issuer: "Association Of Certified Anti-Money Laundering Specialists",
  },
];

export default function About() {
  useDocumentTitle("About | UnyimeAbasi");
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-24 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold"
          >
            About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            My Story in Law & Research
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            I’m UnyimeAbasi Odong, a lawyer, scholar, and policy expert
            currently studying for my PhD at the University of Ottawa. My
            research focuses on the intersections of finance, platforms,
            technology and the law.
          </p>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="/sliders/1.png"
              alt="About"
              className="rounded-3xl shadow-lg w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Biography
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                I am UnyimeAbasi, a lawyer, scholar and policy expert working
                and researching at the intersection of law, technology, and
                society. My research is driven by a curiosity about the
                creation, legitimization, allocation, and transfer of value, and
                how to make finance work better. This is gaining even greater
                relevance at this time as artificial intelligence, digitization
                of finance, geopolitical shifts, and an increasingly fragmented
                global economy create a complex and rapidly shifting financial
                ecosystem As an innovative and curious scholar, my engagement
                with technology prompts a close examination of how law,
                technology, and social values interact – and the outcomes of
                those dynamics. My commitment to the idea that technology should
                make our lives better, drives and underpins my research
                endeavors.
              </p>

              <p>
                My research, anchored in strong theoretical foundations and with
                practical value in real world situations, question assumptions
                and contributes to building responsible finance and technology,
                and to helping policy makers, business leaders, investors, and
                the public. I have published and presented my scholarship and
                policy contributions both nationally and internationally on
                various issues including the regulatory requirements of
                sandboxes for (financial) technologies, the implications of FATF
                rules on digital assets for the global majority, and regulatory
                networks for cross-border, cross-sectoral regulation of digital
                assets. As a lawyer, my career has spanned litigation, advisory,
                and consulting practice. I have prepared briefs and appeared
                before superior courts of record, handling complex
                constitutional and international law matters, and frequently
                providing counsel on regulatory and policy-related proposals.
              </p>

              <p>
                Outside of academia and the law, I have worked with several
                organizations on regulatory issues. I am currently the Vice
                Chairperson of the Board of Directors of Heartwood House, where
                I contribute to governance and policies.
              </p>

              <p>
                I am a fellow at the Africa Fintech Network where I am working
                on regional initiatives to bring foster collaboration and
                promote financial inclusion within Africa’s Fintech Ecosystem. I
                am also a Student Member of the Human Rights Research and
                Education Centre ( HRREC) and the Centre for Law Technology and
                Society of the University of Ottawa. I was called to the Bar in
                Nigeria in 2007, and to the Ontario Bar in 2022.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-14">
            <p className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold">
              Credentials
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Certifications & Professional Development
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
              Continuous professional development through advanced legal,
              policy, and research-focused training programs.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-6 sm:p-8
                shadow-sm
                hover:shadow-md
                transition
              "
              >
                <item.icon className="text-yellow-600 mb-5" size={30} />

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-slate-50 py-24 sm:py-28 relative overflow-hidden">
        {/* glowing center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-yellow-200 hidden md:block" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Career Timeline
            </h2>
            <p className="text-gray-600 mt-4">
              Academic and professional journey across law, research, and policy
              development.
            </p>
          </div>

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* DOT */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full shadow-lg border-4 border-white" />
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                    w-full md:w-[45%]
                    bg-white
                    border border-gray-200
                    rounded-2xl
                    p-6 sm:p-8
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    relative
                  `}
                  >
                    {/* YEAR BADGE */}
                    <span className="inline-block mb-3 text-xs font-semibold bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">{item.org}</p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Core Strengths & Impact
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A summary of professional strengths and contributions across law,
              research, and policy development.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((item, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
