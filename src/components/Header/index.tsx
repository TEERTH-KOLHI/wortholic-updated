"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-40 w-full ${
        sticky
          ? "fixed bg-white/80 shadow-md backdrop-blur-sm dark:bg-black/80"
          : "absolute bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 py-3">
          <Link href="/" className="block">
            <Image
              src="/images/logo/Wortholic.png"
              alt="Wortholic"
              width={60}
              height={40}
              className="w-auto dark:hidden"
            />
            <Image
              src="/images/logo/Wortholic.png"
              alt="Wortholic"
              width={60}
              height={40}
              className="hidden w-auto dark:block"
            />
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={toggleNavbar}
          className="text-dark inline-flex items-center justify-center p-2 focus:outline-none lg:hidden dark:text-white"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {navbarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navbar */}
        <nav
          className={`absolute top-full left-0 z-30 w-full bg-white shadow-md transition-all duration-300 lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 px-6 py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-0 lg:py-0">
            {menuData.map((menuItem, index) => (
              <li key={index} className="group relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`block py-2 text-base ${
                      pathname === menuItem.path
                        ? "text-primary dark:text-white"
                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="text-dark hover:text-primary flex w-full items-center justify-between py-2 text-base lg:inline-flex lg:w-auto dark:text-white/70 dark:hover:text-white"
                    >
                      {menuItem.title}
                      <svg
                        className={`ml-2 h-4 w-4 transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        />
                      </svg>
                    </button>
                    <div
                      className={`${
                        openIndex === index
                          ? "block lg:visible lg:top-full lg:opacity-100"
                          : "hidden lg:invisible lg:top-[120%] lg:opacity-0"
                      } dark:bg-dark absolute left-0 z-20 mt-2 w-56 rounded-md bg-white p-3 shadow-md transition-all duration-300 lg:group-hover:visible lg:group-hover:opacity-100`}
                    >
                      {menuItem.submenu.map((submenuItem, subIndex) => (
                        <Link
                          href={submenuItem.path}
                          key={subIndex}
                          className="text-dark hover:text-primary block rounded px-3 py-2 text-sm dark:text-white/70 dark:hover:text-white"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="hidden items-center lg:flex">
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
