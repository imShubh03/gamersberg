import Link from 'next/link';
import { Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a13] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Left Section - Logo & Copyright */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">GAMERSBERG</h1>
                    <p className="text-gray-400 text-sm mt-1">© 2025 Gamersberg.com</p>
                    <p className="text-gray-400 text-sm">All rights reserved.</p>
                    <div className="flex gap-3 mt-3 justify-center md:justify-start">
                        <Youtube className="text-red-500 cursor-pointer hover:opacity-80" size={24} />
                        <MessageCircle className="text-gray-400 cursor-pointer hover:opacity-80" size={24} />
                    </div>
                </div>

                {/* Middle Section - Quick Links */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2 mt-2">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/giveaways" className="hover:text-white">Giveaways</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Right Section - Supported Games */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">Supported Games</h2>
                    <p className="text-gray-400 mt-2">Blox Fruits</p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> |
                <Link href="/terms-of-service" className="mx-3 hover:text-white">Terms of Service</Link> |
                <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </div>
        </footer>
    );
};

export default Footer;
