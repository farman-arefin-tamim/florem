import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 text-gray-600">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-white/85" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Florem logo"
              width={80}
              height={80}
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Florem Paving — your destination for premium tiles and outdoor
              paving solutions. Quality you can see, service you can trust.
            </p>
            <div className="flex gap-4 text-[#2b1e16]">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2b1e16] mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#2b1e16] transition">Home</Link>
              </li>
              <li>
                <Link href="/all-tiles" className="hover:text-[#2b1e16] transition">All Tiles</Link>
              </li>
              <li>
                <Link href="/my-profile" className="hover:text-[#2b1e16] transition">My Profile</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2b1e16] mb-4">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-[#2b1e16] transition cursor-pointer">Ceramic Tiles</span></li>
              <li><span className="hover:text-[#2b1e16] transition cursor-pointer">Porcelain Tiles</span></li>
              <li><span className="hover:text-[#2b1e16] transition cursor-pointer">Stone Tiles</span></li>
              <li><span className="hover:text-[#2b1e16] transition cursor-pointer">Clay Tiles</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#2b1e16]">Contact Us</h3>
            <div className="text-sm space-y-2">
              <p>📍 123 Paving Street, New York, USA</p>
              <p>📞 +880 1700 000000</p>
              <p>✉️ hello@florem.com</p>
            </div>
            <Link
              href="/all-tiles"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-[#2b1e16] text-white text-sm font-medium transition-all duration-200 
              hover:opacity-80"
            >
              Browse Gallery
            </Link>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gray-300" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Florem Paving. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#2b1e16] transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#2b1e16] transition cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
