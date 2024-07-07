import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
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
      </div>
    </nav>
  );
}

export default TopBar;
