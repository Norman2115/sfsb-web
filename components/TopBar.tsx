import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-4 z-50 backdrop-filter backdrop-blur-md bg-[#1C1C1C]/60">
      <Link href="/">
        <Image
          src="/images/summit_logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex flex-row space-x-10">
        <Link href="/" className="text-[#B0B0B0]">Home</Link>
        <Link href="/about_us" className="text-[#B0B0B0]">About</Link>
        <Link href="/contact" className="text-[#B0B0B0]">Contact</Link>
      </div>


      {/* <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <Link href={"/"} passHref legacyBehavior>
            <a>
              <img
                src="/images/summit_logo.png"
                alt="Logo"
                className="h-8 w-auto pr-10"
              />
            </a>
          </Link>

          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link href={"/"} passHref legacyBehavior>
                <a className="hover:text-blue-700">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about_us"} passHref legacyBehavior>
                <a className="hover:text-blue-700">About</a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"} passHref legacyBehavior>
                <a className="hover:text-blue-700">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
}

export default TopBar;
