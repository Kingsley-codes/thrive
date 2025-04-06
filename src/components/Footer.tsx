import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-4 bg-blue-600 text-white">
      <div className="w-full flex items-center flex-col">
        <button className="text-blue-600 text-4xl font-semibold bg-white py-3 px-4 mt-4 shadow-xl rounded-3xl">
          Donate Now
        </button>
      </div>

      <div className="flex gap-4 mt-5 px-4">
        <div className="py-3 my-3 md:w-2/7">
          <h2 className="text-2xl">Newsletter sign up</h2>

          <form action="">
            <input
              className="bg-white border rounded-xl py-2 px-3 mt-3"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="bg-white border rounded-xl py-2 px-3 mt-3"
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              className="bg-white border rounded-xl py-2 px-3 mt-3"
              type="email"
              placeholder="Email"
              required
            />
          </form>
          <button
            className="text-blue-600 font-semibold bg-white py-2 px-4 mt-4 shadow-xl rounded-xl"
            type="submit"
          >
            Subscribe
          </button>
        </div>

        <div className="flex flex-col py-3 my-3 md:w-2/7 items-start">
          <h2 className="text-2xl">Explore</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>
          </ul>
        </div>

        <div className="h-44 py-3 my-3 md:w-3/7">
          <h2 className="text-2xl">Contact Us</h2>

          <p>501 Kings Highway East, Suite 400, Fairfield, CT 06825</p>
          <p>Main Office # 203.221.4000 | Mon-Fri 9:00am-5:00pm EST</p>
          <p>Donor Services # 1.800.728.3843 | Mon-Fri 8:00am-5:00pm EST</p>
          <p>Report fraud, abuse, wrongdoing, Safeguarding</p>
        </div>
      </div>

      <div className="mt-5 flex">
        <div className="w-1/2 gap-2 items-end justify-center flex">
          <p className="border-r-2 pr-2">Privacy Policy</p>
          <p className="border-r-2 pr-2">Legal Disclosure</p>
          <p className="border-r-2 pr-2">Careers</p>
          <p>Terms of Use</p>
        </div>

        <div className="w-1/2 text-center">
          <h2 className="text-2xl">Connect With Us</h2>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="https://www.facebook.com/HelpAChildAfrica"
              target="_blank"
            >
              <FaFacebookSquare className="text-3xl" />
            </Link>

            <Link
              href="https://www.instagram.com/helpachildafrica/"
              target="_blank"
            >
              <FaInstagramSquare className="text-3xl" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/helpachildafrica/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl" />
            </Link>

            <Link href="https://twitter.com/HelpAChildAfrica" target="_blank">
              <FaTwitter className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-sm mt-4 text-center">
        &copy; {new Date().getFullYear()} Help a Child Africa. All rights
        reserved.
      </div>
    </footer>
  );
}
