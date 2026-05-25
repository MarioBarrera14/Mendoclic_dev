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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        
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
      
      {/* Menu desplegable movil */}
      {toggle && (
        <div className="absolute right-4 top-20 z-10 rounded-xl p-6 black-gradient sm:hidden">
          <ul className="flex list-none flex-col items-start gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer text-[16px] text-secondary transition-colors hover:text-white"
                onClick={() => setToggle(false)}
              >
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
