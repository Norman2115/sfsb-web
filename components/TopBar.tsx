import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-center px-6 py-3">
        <ul className="flex space-x-6 text-gray-700">
          <Link href={"/"}>
            <li>
              <a className="hover:text-gray-900">Home</a>
            </li>
          </Link>
          <Link href={"/about_us"}>
            <li>
              <a className="hover:text-gray-900">About</a>
            </li>
          </Link>
          <Link href={"/contact"}>
            <li>
              <a className="hover:text-gray-900">Contact Us</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default TopBar;
