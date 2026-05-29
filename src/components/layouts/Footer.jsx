export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-14 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            UnyimeAbasi Odong
          </h3>
          <p className="leading-relaxed font-bold">LL.B(Uyo), LL. M(Ottawa)</p>
          <p className="leading-relaxed">Lawyer, Scholar, and Policy Expert</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <div className="space-y-2">
            <p>About</p>
            <p>Research</p>
            <p>Practice</p>
            <p>Blog</p>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p>Ottawa, Canada</p>
          <p>info@unyimeabasi.com</p>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm">
        © 2026 UnyimeAbasi.com All Rights Reserved.
      </div>
    </footer>
  );
}
