"use client";
import { motion } from 'framer-motion';
import {
    PlayIcon,
    ArrowRightIcon,
    BoltIcon,
    ClockIcon,
    ShieldCheckIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { imageUrl } from '@/lib/imageUrl';

export default function HomePage() {

    const features = [
        {
            icon: BoltIcon,
            title: 'Easy automation',
            description: 'Build workflows with our visual editor. No coding required.',
        },
        {
            icon: ClockIcon,
            title: 'Save time',
            description: 'Automate repetitive tasks and focus on what matters most.',
        },
        {
            icon: ShieldCheckIcon,
            title: 'Enterprise security',
            description: 'Bank-level security with SOC 2 Type II certification.',
        },
        {
            icon: ChartBarIcon,
            title: 'Powerful insights',
            description: 'Track your automations with detailed analytics and reporting.',
        },
    ];

    const integrations = [
        { name: 'Gmail', logo: imageUrl["googleGmail"], color: 'bg-red-100' },
        { name: 'Slack', logo: imageUrl["slack"], color: 'bg-purple-100' },
        { name: 'Trello', logo: imageUrl["trello"], color: 'bg-blue-100' },
        { name: 'Salesforce', logo: imageUrl["salesforce"], color: 'bg-cyan-100' },
        { name: 'HubSpot', logo: imageUrl["hubspot"], color: 'bg-orange-100' },
        { name: 'Shopify', logo: imageUrl["shopify"], color: 'bg-green-100' },
    ];

    const testimonials = [
        {
            quote: "Automata has saved us countless hours every week. It's like having a virtual assistant.",
            author: "Sarah Johnson",
            title: "Marketing Director at TechCorp",
            avatar: "👩‍💼"
        },
        {
            quote: "The integration possibilities are endless. We've automated our entire sales process.",
            author: "Mike Chen",
            title: "Sales Manager at StartupXYZ",
            avatar: "👨‍💻"
        },
        {
            quote: "Easy to use, powerful features. Automata is essential for our productivity.",
            author: "Emily Davis",
            title: "Operations Lead at InnovateCo",
            avatar: "👩‍🔬"
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
        >
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Automate your work with
                                <span className="text-orange-500 block">Automata</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Connect your apps and automate workflows to be more productive.
                                No developers required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Start free with email
                                </Link>
                                <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                                    <PlayIcon className="h-5 w-5" />
                                    <span>Watch demo</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                Free forever for core features • No credit card required
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <img src={imageUrl["googleGmail"]} alt={"Gmail"} className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Gmail</h3>
                                            <p className="text-sm text-gray-500">New email received</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowRightIcon className="h-6 w-6 text-orange-500" />
                                    </div>

                                    <div className='flex justify-between'>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                                                <img src={imageUrl["slack"]} alt={"Slack"} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Slack</h3>
                                                <p className="text-sm text-gray-500">Send notification</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center text-2xl">
                                                <Zap className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Workflow</h3>
                                                <p className="text-sm text-gray-500">Automation Ready</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowRightIcon className="h-6 w-6 text-orange-500" />
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                                            <img src={imageUrl["trello"]} alt={"Trello"} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Trello</h3>
                                            <p className="text-sm text-gray-500">Create new card</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why choose Automata?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join millions of users who trust Automata to automate their workflows
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                                    <feature.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Connect with 6,000+ apps
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Integrate with all your favorite tools and services
                        </p>
                        <Link
                            href="/integrations"
                            className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                        >
                            <span>Browse all integrations</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={integration.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                            >
                                <div className={`w-16 h-16 ${integration.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                                    <img src={integration.logo} alt={integration.name} className="w-10 h-10" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm">
                                    {integration.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Loved by teams everywhere
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See what our customers have to say about Automata
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.author}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
                            >
                                <div className="mb-6">
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">{testimonial.avatar}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 m-2 rounded-2xl">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to get started?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                            Join over 2 million users and start automating your workflows today
                        </p>
                        <Link
                            href="/signup"
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Sign up free
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}