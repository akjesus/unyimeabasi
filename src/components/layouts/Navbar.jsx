import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ onOpenConsult }) {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link active text-[#062E70] font-semibold"
      : "nav-link text-gray-700 transition";

  const navLinkStyle = `
  .nav-link {
    position: relative;
    display: inline-block;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #062E70;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .nav-link.active {
    color: #062E70;
    font-weight: 600;
  }
  
  .nav-link.active::after {
    width: 100%;
    background-color: #062E70;
  }
`;

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Research",
      link: "/research",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <style>{navLinkStyle}</style>

      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img src="/uyy.png" alt="Logo" className="h-7 w-auto" />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8 font-medium">
              {navLinks.map((link, index) => (
                <NavLink key={index} to={link.link} className={linkClass}>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA (Desktop only) */}
            <button
              onClick={onOpenConsult}
              className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 transition px-5 py-3 rounded-xl font-semibold cursor-pointer"
            >
              Book Consultation
            </button>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden pb-6">
              <nav className="flex flex-col gap-5 font-medium">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.link}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <button
                  onClick={onOpenConsult}
                  className="bg-yellow-500 py-3 rounded-xl font-semibold mt-2"
                >
                  Book Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
