import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const featured = {
  title: "The Future of Human Rights in Digital Governance",
  excerpt:
    "An in-depth analysis of how emerging technologies are reshaping privacy, surveillance, and constitutional protections globally.",
  author: "Legal Research Desk",
  date: "May 2026",
  image:
    "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1400&auto=format&fit=crop",
};

const posts = [
  {
    title: "Understanding International Law in a Globalized World",
    author: "Research Team",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Policy Reform and Its Impact on Developing Nations",
    author: "Legal Analyst",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Role of Data Privacy in Modern Legal Systems",
    author: "Research Desk",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Access to Justice: Challenges and Solutions",
    author: "Policy Unit",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Blog() {
  useDocumentTitle("Blog | UnyimeAbasi");
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold"
          >
            Insights
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Research & Legal Insights Blog
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Articles, research summaries, and policy insights on law,
            governance, and international legal systems.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              grid
              lg:grid-cols-2
              overflow-hidden
              rounded-3xl
              border border-gray-200
              bg-white
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="
                  w-full
                  h-full
                  object-cover
                  min-h-[320px]
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-yellow-600 text-sm font-semibold uppercase">
                Featured Article
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
                {featured.title}
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-6">
                <span className="flex items-center gap-2">
                  <User size={16} /> {featured.author}
                </span>

                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {featured.date}
                </span>
              </div>

              <button className="mt-8 flex items-center gap-2 text-yellow-600 font-medium hover:underline">
                Read Full Article <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                  group
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      w-full
                      h-56
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <button className="mt-5 flex items-center gap-2 text-yellow-600 text-sm font-medium hover:underline">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}