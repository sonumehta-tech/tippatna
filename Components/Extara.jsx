'use client';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import "@/public/style.css"
import React, { useEffect } from 'react';

const Extara = () => {
    useEffect(() => {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                scrollToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0');
                scrollToTopBtn.classList.add('opacity-0', 'translate-y-4');
            }
        };

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);
        scrollToTopBtn.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollToTopBtn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div>
            {/* Scroll to Top Button */}
            <button
                id="scrollToTopBtn"
                title="Go to top"
                className="fixed bottom-4 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 opacity-0 z-10 transform translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 animate-pulse2-scrollTopBtn"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
            </button>

            {/* WhatsApp Floating Button */}
            <a
                href="https://api.whatsapp.com/send?phone=918292236605&text=Hi, I contacted you Through your website."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 z-50 animate-pulse transition-all duration-300 transform hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className=" rounded-full hover:scale-110 transition text-4xl" />
            </a>

            {/* Call Now Floating Button */}
            <a
                href="tel:+918292236605"
                className="fixed bottom-20 left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 z-50 animate-pulse transition-all duration-300 transform hover:scale-110"
                aria-label="Call Now"
            >
                <FaPhone className=" rounded-full hover:scale-110 transition text-xl" />

            </a>
        </div>
    );
};

export default Extara;
