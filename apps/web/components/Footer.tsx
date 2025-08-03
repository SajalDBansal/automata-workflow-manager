"use client";
import { Twitter, TwitterIcon, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const footerSections = [
        {
            title: 'Product',
            links: [
                { name: 'Platform', href: '/' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Integrations', href: '/integrations' },
                { name: 'Templates', href: '/templates' },
                { name: 'Security', href: '/security' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Careers', href: '/careers' },
                { name: 'Press', href: '/press' },
                { name: 'Brand', href: '/brand' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '/blog' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Help Center', href: '/help' },
                { name: 'Community', href: '/community' },
                { name: 'API', href: '/api' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'DPA', href: '/dpa' },
                { name: 'GDPR', href: '/gdpr' },
            ],
        },
    ];

    const isAuthPage = pathname === '/login' || pathname === '/signup';
    const isBuilder = pathname.startsWith('/builder');

    if (isAuthPage || isBuilder) {
        return null;
    }

    return (
        <footer className="bg-gray-900 text-white m-2 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Zap className="h-8 w-8 text-orange-500" />
                            <span className="text-xl font-bold">Automata</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            The easiest way to automate your work and connect your apps.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm">
                            © 2024 Automata Inc. All rights reserved.
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;