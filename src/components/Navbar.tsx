import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-800 bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-white">
                            Gamersberg
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-gray-300 text-white">
                            Home
                        </Link>
                        <Link href="/games" className="transition-colors hover:text-gray-300 text-white">
                            Games
                        </Link>
                        <Link href="/giveaways" className="transition-colors hover:text-gray-300 text-white">
                            Giveaways
                        </Link>
                        <Link href="/contact" className="transition-colors hover:text-gray-300 text-white">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="w-full max-w-[300px] relative">
                        <input
                            type="search"
                            placeholder="search user"
                            className="w-full bg-gray-900 rounded-full px-4 py-2 text-sm"
                        />
                        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                    </div>
                    <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;