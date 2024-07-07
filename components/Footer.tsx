// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">

          <p className="text-gray-600">Summit Features: Leading Malaysia Motion Technology.</p>
        </div>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            </li>
            <li>
              <Link href="/solutions" className="text-gray-700 hover:text-gray-900">Solutions</Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-700 hover:text-gray-900">Careers</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <p className="text-gray-500">© 2024 Summit Features,  Sdn. Bhd. (714050-M). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
