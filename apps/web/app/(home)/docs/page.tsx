"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    BookOpenIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
    CogIcon,
    QuestionMarkCircleIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const DocsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const quickStartGuides = [
        {
            title: 'Getting Started with Zapier',
            description: 'Learn the basics of creating your first Zap',
            icon: RocketLaunchIcon,
            time: '5 min',
            color: 'blue',
        },
        {
            title: 'Understanding Triggers and Actions',
            description: 'Master the core concepts of workflow automation',
            icon: CogIcon,
            time: '8 min',
            color: 'green',
        },
        {
            title: 'Managing Your Zaps',
            description: 'How to edit, pause, and optimize your workflows',
            icon: BookOpenIcon,
            time: '6 min',
            color: 'purple',
        },
    ];

    const documentationSections = [
        {
            title: 'API Documentation',
            description: 'Complete reference for the Zapier API',
            icon: CodeBracketIcon,
            articles: [
                'Authentication',
                'REST API Reference',
                'Webhooks',
                'Rate Limits',
                'Error Handling',
            ],
        },
        {
            title: 'Platform Guide',
            description: 'Build integrations on the Zapier platform',
            icon: RocketLaunchIcon,
            articles: [
                'Creating an Integration',
                'Authentication Methods',
                'Triggers & Actions',
                'Testing & Debugging',
                'Publishing Your App',
            ],
        },
        {
            title: 'User Guide',
            description: 'Help for using Zapier effectively',
            icon: BookOpenIcon,
            articles: [
                'Creating Zaps',
                'Advanced Features',
                'Troubleshooting',
                'Best Practices',
                'Account Management',
            ],
        },
        {
            title: 'FAQ & Support',
            description: 'Common questions and support resources',
            icon: QuestionMarkCircleIcon,
            articles: [
                'Billing Questions',
                'Technical Issues',
                'Integration Support',
                'Feature Requests',
                'Contact Support',
            ],
        },
    ];

    const popularArticles = [
        {
            title: 'How to create your first Zap',
            category: 'Getting Started',
            views: '125K',
            updated: '2 days ago',
        },
        {
            title: 'Setting up webhooks',
            category: 'API',
            views: '89K',
            updated: '1 week ago',
        },
        {
            title: 'Troubleshooting failed Zaps',
            category: 'Support',
            views: '76K',
            updated: '3 days ago',
        },
        {
            title: 'Using filters and formatters',
            category: 'Advanced',
            views: '64K',
            updated: '5 days ago',
        },
        {
            title: 'API rate limits explained',
            category: 'API',
            views: '52K',
            updated: '1 week ago',
        },
    ];

    const onTagClicks = () => {
        toast("We don't have an article viewer yet. Coming soon!");
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white"
        >
            {/* Header */}
            <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Documentation
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Everything you need to know about building with Zapier
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Start Guides */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Quick Start Guides
                        </h2>
                        <p className="text-xl text-gray-600">
                            Get up and running quickly with these essential guides
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quickStartGuides.map((guide, index) => (
                            <motion.div
                                key={guide.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                                onClick={onTagClicks}
                            >
                                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${guide.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                                    guide.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                                        'bg-purple-100 group-hover:bg-purple-200'
                                    } transition-colors`}>
                                    <guide.icon className={`h-8 w-8 ${guide.color === 'blue' ? 'text-blue-600' :
                                        guide.color === 'green' ? 'text-green-600' :
                                            'text-purple-600'
                                        }`} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-orange-600 transition-colors">
                                    {guide.title}
                                </h3>

                                <p className="text-gray-600 text-center mb-4">
                                    {guide.description}
                                </p>

                                <div className="text-center">
                                    <span className="text-sm text-gray-500">{guide.time} read</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Documentation Sections
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive guides and references for all aspects of Zapier
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {documentationSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <section.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {section.articles.map((article) => (
                                        <a
                                            key={article}
                                            href="#"
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                            onClick={onTagClicks}
                                        >
                                            <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                                                {article}
                                            </span>
                                            <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Popular Articles
                        </h2>
                        <p className="text-xl text-gray-600">
                            The most viewed and helpful articles from our community
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {popularArticles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                                onClick={onTagClicks}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                {article.category}
                                            </span>
                                            <span>{article.views} views</span>
                                            <span>Updated {article.updated}</span>
                                        </div>
                                    </div>
                                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Need more help?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Can't find what you're looking for? Our support team is here to help
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Contact Support
                            </button>
                            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                                Community Forum
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default DocsPage;