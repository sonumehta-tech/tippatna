'use client';

import { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 z-50 w-full">
      {/* Top info bar */}
      <div className="bg-orange-800 text-white p-2 flex flex-col md:flex-row items-center md:justify-between text-sm">
        <div className="flex  md:flex-row md:items-center gap-2 md:gap-4 px-4">
          <Link href="tel:+918292236605" className="px-2 md:border-r-2">+918292236605</Link>
          <Link href="tel:+919905194346" className="px-2 md:border-r-2">+919905194346</Link>
          <Link href="mailto:ww.technicalinstitute@gmail.com" className="px-2 md:block hidden">ww.technicalinstitute@gmail.com</Link>
        </div>
        <div className="flex gap-4 px-4 mt-2 md:mt-0 text-xl">
          <a href="https://www.facebook.com/share/169aBjqdGp/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 bg-white rounded-full hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/technicalinstituteofpatna01?igsh=dXJtanlvZHF2OHps" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 bg-white rounded-full hover:scale-110 transition" />
          </a>
          <a href="https://www.youtube.com/@technicalinstituteofpatna" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 bg-white rounded-full hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex justify-between items-center px-4 md:px-10 py-3 bg-white relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-orange-600 italic">
          <Image width={60} height={60} src="/images/logo.jpg" alt="logo" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-lg">
          <li className="hover:text-orange-600"><Link href="/">Home</Link></li>
          <li className="hover:text-orange-600"><Link href="/service">Courses</Link></li>
          <li className="hover:text-orange-600"><Link href="/about">About Us</Link></li>
          <li className="hover:text-orange-600"><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-600">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-md p-6 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6 text-lg mt-16">
          <li className='text-orange-600'><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className='text-orange-600'><Link href="/service" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li className='text-orange-600'><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li className='text-orange-600'><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-40"></div>
      )}
    </header>
  );
};

export default Header;
