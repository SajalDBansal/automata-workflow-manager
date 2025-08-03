"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { toast } from 'sonner';
import { image } from 'framer-motion/client';
import { imageUrl } from '@/lib/imageUrl';

const IntegrationsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Apps', count: 6000 },
        { id: 'communication', name: 'Communication', count: 234 },
        { id: 'productivity', name: 'Productivity', count: 456 },
        { id: 'marketing', name: 'Marketing', count: 378 },
        { id: 'ecommerce', name: 'eCommerce', count: 189 },
        { id: 'crm', name: 'CRM', count: 123 },
        { id: 'social-media', name: 'Social Media', count: 89 },
        { id: 'finance', name: 'Finance', count: 167 },
        { id: 'storage', name: 'File Storage', count: 78 },
    ];

    const featuredApps = [
        {
            name: 'Gmail',
            icon: imageUrl["googleGmail"],
            category: 'communication',
            description: 'Send and manage emails automatically',
            rating: 4.8,
            reviews: 12543,
            popular: true,
        },
        {
            name: 'Slack',
            icon: imageUrl["slack"],
            category: 'communication',
            description: 'Team communication and collaboration',
            rating: 4.9,
            reviews: 8765,
            popular: true,
        },
        {
            name: 'Google Sheets',
            icon: imageUrl["googleSpreadsheet"],
            category: 'productivity',
            description: 'Create and update spreadsheets',
            rating: 4.7,
            reviews: 9876,
            popular: true,
        },
        {
            name: 'Trello',
            icon: imageUrl["trello"],
            category: 'productivity',
            description: 'Organize projects with boards and cards',
            rating: 4.6,
            reviews: 7432,
            popular: false,
        },
        {
            name: 'Salesforce',
            icon: imageUrl["salesforce"],
            category: 'crm',
            description: 'Manage customer relationships and sales',
            rating: 4.5,
            reviews: 5431,
            popular: false,
        },
        {
            name: 'HubSpot',
            icon: imageUrl["hubspot"],
            category: 'marketing',
            description: 'Inbound marketing and sales platform',
            rating: 4.7,
            reviews: 6789,
            popular: true,
        },
        {
            name: 'Shopify',
            icon: imageUrl["shopify"],
            category: 'ecommerce',
            description: 'Build and manage online stores',
            rating: 4.8,
            reviews: 4321,
            popular: false,
        },
        {
            name: 'Twitter',
            icon: imageUrl["twitter"],
            category: 'social-media',
            description: 'Post tweets and monitor mentions',
            rating: 4.4,
            reviews: 3456,
            popular: false,
        },
        {
            name: 'Stripe',
            icon: imageUrl["stripe"],
            category: 'finance',
            description: 'Process payments and subscriptions',
            rating: 4.9,
            reviews: 8901,
            popular: true,
        },
        {
            name: 'Dropbox',
            icon: imageUrl["dropbox"],
            category: 'storage',
            description: 'Store and sync files in the cloud',
            rating: 4.6,
            reviews: 5678,
            popular: false,
        },
        {
            name: 'Facebook',
            icon: imageUrl["facebook"],
            category: 'social-media',
            description: 'Manage pages and post content',
            rating: 4.3,
            reviews: 2345,
            popular: false,
        },
        {
            name: 'Google Drive',
            icon: imageUrl["googleDrive"],
            category: 'storage',
            description: 'Store files and collaborate on documents',
            rating: 4.8,
            reviews: 7890,
            popular: true,
        },
    ];

    const filteredApps = featuredApps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= Math.floor(rating) ? (
                    <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
                ) : (
                    <StarIcon key={i} className="h-4 w-4 text-gray-300" />
                )
            );
        }
        return stars;
    };

    const onConnect = () => {
        toast("Sign in to connect with this integration");
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
                            6,000+ app integrations
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Connect all the tools you love and work the way you want
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                placeholder="Search apps..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm text-black"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {category.name} ({category.count.toLocaleString()})
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Apps Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {searchTerm ? `Search results for "${searchTerm}"` :
                                selectedCategory === 'all' ? 'All integrations' :
                                    categories.find(c => c.id === selectedCategory)?.name}
                        </h2>
                        <p className="text-gray-600">
                            {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''} found
                        </p>
                    </div>

                    {/* Apps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredApps.map((app, index) => (
                            <motion.div
                                key={app.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        <img src={app.icon} alt={app.name} className="w-10 h-10 object-contain" />
                                    </div>
                                    {app.popular && (
                                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {app.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                                    {app.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-1">
                                        <div className="flex">{renderStars(app.rating)}</div>
                                        <span className="text-sm text-gray-600 ml-1">
                                            {app.rating}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {app.reviews.toLocaleString()} reviews
                                    </span>
                                </div>

                                <button
                                    className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors group-hover:bg-orange-500 group-hover:text-white"
                                    onClick={onConnect}
                                >
                                    Connect
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredApps.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No apps found
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Try adjusting your search or browse different categories
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }}
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                            >
                                View all apps
                            </button>
                        </motion.div>
                    )}
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
                            Don't see the app you need?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Request a new integration or build your own with our API
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Request integration
                            </button>
                            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                                Developer API
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default IntegrationsPage;