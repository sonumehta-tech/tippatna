import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 border-t-2 border-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image width={150} height={100} src="/images/logo.png" alt="logo" />
            </Link>
            <p className="text-sm mt-5">Technical Institute Patna is one of the leading training centers for practical repair and service
              courses, offering hands-on learning in AC, washing machine, RO, geyser, refrigerator, motor winding, and house wiring.</p>
            <div className="flex gap-4 px-4 mt-5 md:mt-5 text-3xl">
              <a href="https://www.facebook.com/share/169aBjqdGp/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 rounded-full hover:scale-110 transition" />
              </a>
              <a href="https://www.instagram.com/technicalinstituteofpatna01?igsh=dXJtanlvZHF2OHps" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 rounded-full hover:scale-110 transition" />
              </a>
              <a href="https://www.youtube.com/@technicalinstituteofpatna" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-700 rounded-full hover:scale-110 transition" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link href="/service" className="hover:text-slate-900 transition-colors">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <p className="text-sm"><span className="text-xl"><i
              className="fa-solid fa-location-dot text-yellow-700"></i></span>Danapur Lakhni Bigha Khagaul Patna, Bihar</p>
            <p className="mt-2"><i className="fa-solid fa-phone text-yellow-700"></i><Link href="tel:+918292236605"
              className="font-semibold hover:underline">+91 8292236605</Link></p>
            <p className="mt-2"><i className="fa-solid fa-phone text-yellow-700"></i> <Link href="tel:+919905194346"
              className="font-semibold hover:underline">+919905194346</Link></p>
            <p><i className="fa-solid fa-envelope text-yellow-700"></i><Link
              href="ww.technicalinstitute@gmail.com"
              className="font-semibold hover:underline">
              ww.technicalinstitute@gmail.com </Link></p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; <span id="currentYear"></span> tippatna. All rights reserved. <Link
            href="https://startupwebsupport.com/" className="text-zinc-400">Design by startup web
            support</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
