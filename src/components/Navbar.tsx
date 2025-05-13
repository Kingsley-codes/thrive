"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { GiCancel } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 text-blue-600 relative z-50">
      {/* Left side - mobile menu button and logo */}
      <div className="flex items-center">
        {/* Mobile menu button - now on the LEFT */}
        <div className="sm:hidden mr-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Menu"
          >
            {menuOpen ? (
              <GiCancel className="h-8 w-8 text-blue-500" />
            ) : (
              <FaBars className="h-8 w-8 text-blue-500" />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
          <Link href="/">
            <CldImage
              src="https://res.cloudinary.com/dbeyl29fl/image/upload/v1743116190/djowidgbpvbowkf1nciv.png"
              alt="Help logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>

      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden sm:flex justify-between w-1/2 items-center">
        <ul className="flex space-x-4 font-bold text-lg cursor-pointer">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/our-work">Our Work</Link>
          </li>
          <li>
            <Link href="/register">Get Involved</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button className="ml-4 bg-blue-600 font-semibold text-xl text-white py-2 px-4 shadow-xl rounded-xl hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">
          <Link href="/donate">Donate</Link>
        </button>
      </div>

      {/* Mobile menu overlay - slides in from RIGHT */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden">
          <div className="mobile-menu-container absolute top-0 left-0 h-full w-3/4 bg-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6 space-y-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-md focus:outline-none"
                >
                  <GiCancel className="h-8 w-8 text-blue-500" />
                </button>
              </div>

              <div className="flex-grow flex flex-col space-y-4 font-bold text-lg">
                <Link
                  href="/about"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/our-work"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Involved
                </Link>
                <Link
                  href="/events"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-3 active:bg-gray-300 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className="mt-4 bg-blue-600 font-semibold text-xl text-white py-2 px-4 shadow-xl rounded-xl hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">
                  <Link href="/donate">Donate</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
