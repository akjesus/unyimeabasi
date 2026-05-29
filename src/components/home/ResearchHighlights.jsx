import { FileText, Scale, BookOpen } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Policy Research",
    text: "Evidence-based policy analysis and legal research.",
  },
  {
    icon: Scale,
    title: "Human Rights Law",
    text: "Advocating for equitable and inclusive legal systems.",
  },
  {
    icon: BookOpen,
    title: "Academic Publications",
    text: "Published works in international journals and conferences.",
  },
];

export default function ResearchHighlights() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-semibold mb-3">RESEARCH</p>

          <h2 className="text-4xl font-bold">Research Highlights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <item.icon className="w-12 h-12 text-yellow-600 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
