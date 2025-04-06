"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 text-blue-600">
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

      <div className="flex justify-between w-1/2 items-center">
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
    </nav>
  );
}
