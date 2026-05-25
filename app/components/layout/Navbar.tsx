"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@/app/constants/styles";
import { navLinks } from "@/app/constants";
import { config } from "@/app/constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // 1. Usamos fixed y z-index para asegurar que flote sobre todo
      className={`fixed w-full z-50 py-5 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* 2. max-w-7xl + mx-auto CENTRA todo el contenido de forma constante */}
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image src="/logo.png" alt="logo" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-[18px] font-bold text-white cursor-pointer">{config.html.title}</span>
        </Link>

        {/* Desktop Menu - Alineado a la derecha */}
        <ul className="hidden sm:flex flex-row gap-10 list-none">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setToggle(!toggle)} aria-label="Menu">
            <Image
              src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="menu"
              width={28}
              height={28}
              className="object-contain cursor-pointer"
            />
          </button>
        </div>
      </div>
      
      {/* Menu desplegable móvil fuera del contenedor para no afectar el flujo */}
      {toggle && (
        <div className="sm:hidden absolute top-20 right-6 p-6 black-gradient rounded-xl z-10">
          <ul className="flex flex-col gap-4 list-none items-start">
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-secondary text-[16px] cursor-pointer" onClick={() => setToggle(false)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;