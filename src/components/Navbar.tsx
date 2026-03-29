import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Over Mij", path: "/over-mij" },
    { name: "Tassen", path: "/tassen" },
    { name: "Maatwerk", path: "/maatwerk" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-sage-green py-4 md:py-5 px-6 md:px-10 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-5">
        <div className="w-full flex justify-between items-center md:justify-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://picsum.photos/seed/bytaar-brand/300/120"
              alt="bytaar"
              className="max-w-[120px] md:max-w-[180px] h-auto rounded-sm shadow-sm"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 m-0 p-0 list-none flex-wrap justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-white no-underline text-lg font-semibold px-4 py-2 rounded-md transition-colors duration-300 hover:bg-white/20",
                  location.pathname === item.path && "bg-white/20"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <ul className="flex flex-col gap-2 m-0 p-0 list-none">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-white no-underline text-base font-semibold px-4 py-3 rounded-md transition-colors duration-300 block hover:bg-white/20",
                    location.pathname === item.path && "bg-white/20"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
