'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-gray-800 bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                {/* Left Section: Logo + Links */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-white font-bold">Gamersberg</Link>
                    <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-gray-300 text-white">Home</Link>
                        <Link href="/games" className="transition-colors hover:text-gray-300 text-white">Games</Link>
                        <Link href="/giveaways" className="transition-colors hover:text-gray-300 text-white">Giveaways</Link>
                        <Link href="/contact" className="transition-colors hover:text-gray-300 text-white">Contact</Link>
                    </div>
                </div>

                {/* Right Section: Search + Login */}
                <div className="hidden md:flex items-center space-x-2">
                    <div className="w-full max-w-[300px] relative">
                        <input
                            type="search"
                            placeholder="Search user"
                            className="w-full bg-gray-900 rounded-full px-4 py-2 text-sm"
                        />
                        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                    </div>
                    <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Login</Button>
                </div>

                {/* Mobile Menu Button */}
                <Button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 text-white flex flex-col items-center py-4 space-y-4">
                    <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/games" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Games</Link>
                    <Link href="/giveaways" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Giveaways</Link>
                    <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Login</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
