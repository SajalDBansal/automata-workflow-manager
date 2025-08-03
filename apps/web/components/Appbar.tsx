"use client";
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Product', href: '#', hasDropdown: true },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Templates', href: '/templates' },
        { name: 'Resources', href: '/blog' },
    ];

    const productDropdown = [
        { name: 'Platform Overview', href: '/', description: 'See how Automata works' },
        { name: 'Integrations', href: '/integrations', description: '6,000+ app integrations' },
        { name: 'Templates', href: '/templates', description: 'Pre-built workflows' },
        { name: 'Documentation', href: '/docs', description: 'Developer resources' },
    ];

    const isAuthPage = pathname === '/login' || pathname === '/signup';
    const isDashboard = pathname.startsWith('/app') || pathname.startsWith('/builder');

    if (isDashboard) {
        return (
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/app" className="flex items-center space-x-2">
                            <Zap className="h-8 w-8 text-orange-500" />
                            <span className="text-xl font-bold text-gray-900">Automata</span>
                        </Link>
                        <div className="flex items-center space-x-6">
                            <Link href="/app" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                My Zaps
                            </Link>
                            <Link href="/builder" className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
                                Create Zap
                            </Link>
                            <Link href={"/app/"}>
                                <div className="relative">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 font-medium text-sm">U</span>
                                        </div>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Zap className="h-8 w-8 text-orange-500" />
                        <span className="text-xl font-bold text-gray-900">Automata</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative">
                                {item.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsProductOpen(true)}
                                        onMouseLeave={() => setIsProductOpen(false)}
                                    >
                                        <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                            <span>{item.name}</span>
                                            <ChevronDownIcon className="h-4 w-4" />
                                        </button>
                                        {isProductOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4"
                                            >
                                                {productDropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <div className="font-medium text-gray-900">{subItem.name}</div>
                                                        <div className="text-sm text-gray-500 mt-1">{subItem.description}</div>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    {!isAuthPage && (
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                            >
                                Sign up free
                            </Link>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-200 py-4"
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {!isAuthPage && (
                            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                                <Link
                                    href="/login"
                                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="block px-3 py-2 bg-orange-500 text-white rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign up free
                                </Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;