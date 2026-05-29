import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const featured = {
  title: "The Future of Human Rights in Digital Governance",
  excerpt:
    "An in-depth analysis of how emerging technologies are reshaping privacy, surveillance, and constitutional protections globally.",
  author: "Legal Research Desk",
  date: "May 2026",
};

const posts = [
  {
    title: "Understanding International Law in a Globalized World",
    author: "Research Team",
    date: "April 2026",
  },
  {
    title: "Policy Reform and Its Impact on Developing Nations",
    author: "Legal Analyst",
    date: "March 2026",
  },
  {
    title: "The Role of Data Privacy in Modern Legal Systems",
    author: "Research Desk",
    date: "February 2026",
  },
  {
    title: "Access to Justice: Challenges and Solutions",
    author: "Policy Unit",
    date: "January 2026",
  },
];

export default function Blog() {
   useDocumentTitle("Blog | UnyimeAbasi");
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
            Blogs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            My Articles and Blog Posts
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Articles, research summaries, and policy insights on law,
            governance, and international legal systems.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              bg-slate-50
              border border-gray-200
              rounded-2xl
              p-8 sm:p-12
              mb-14
              hover:shadow-md
              transition
            "
          >
            <span className="text-yellow-600 text-sm font-semibold uppercase">
              Featured Article
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              {featured.title}
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl">{featured.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-6">
              <span className="flex items-center gap-2">
                <User size={16} /> {featured.author}
              </span>

              <span className="flex items-center gap-2">
                <Calendar size={16} /> {featured.date}
              </span>
            </div>

            <button className="mt-6 flex items-center gap-2 text-yellow-600 font-medium hover:underline">
              Read Full Article <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                <h3 className="text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <button className="mt-4 text-yellow-600 text-sm font-medium hover:underline">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}