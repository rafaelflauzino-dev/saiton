"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "/#Inicio" },
  { label: "Serviços", href: "/#Serviços" },
  { label: "Sobre", href: "/#Sobre" },
 
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", closeOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className=" mx-auto flex w-full max-w-6xl items-center justify-between rounded-lg border-b border-orange-700  px-6 py-3">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="relative z-50 flex items-center gap-2"
        >
          <Image
            src="/assets/whats.svg"
            alt="Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white transition hover:text-orange-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="rounded-full bg-orange-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Contato
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-black md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-semibold text-black"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-block self-start rounded-full bg-black px-8 py-4 text-lg font-medium text-white"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
