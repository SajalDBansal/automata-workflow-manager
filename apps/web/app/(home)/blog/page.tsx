"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Posts' },
        { id: 'automation', name: 'Automation' },
        { id: 'productivity', name: 'Productivity' },
        { id: 'integrations', name: 'Integrations' },
        { id: 'tutorials', name: 'Tutorials' },
        { id: 'company', name: 'Company News' },
    ];

    const featuredPost = {
        id: 1,
        title: 'The Ultimate Guide to Workflow Automation in 2024',
        excerpt: 'Discover the latest trends, best practices, and tools that will revolutionize how you work this year.',
        category: 'automation',
        author: 'Sarah Johnson',
        date: '2024-01-15',
        readTime: '8 min read',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
    };

    const posts = [
        {
            id: 2,
            title: '10 Gmail Automations That Will Save You Hours Every Week',
            excerpt: 'Learn how to automate your email workflow with these powerful Gmail integrations and rules.',
            category: 'tutorials',
            author: 'Mike Chen',
            date: '2024-01-12',
            readTime: '6 min read',
            image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 3,
            title: 'How to Build a Complete Lead Management System',
            excerpt: 'Step-by-step guide to creating an automated lead management workflow using popular CRM tools.',
            category: 'tutorials',
            author: 'Emily Davis',
            date: '2024-01-10',
            readTime: '12 min read',
            image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 4,
            title: 'Announcing 500+ New App Integrations',
            excerpt: 'We\'ve added support for hundreds of new apps to help you connect everything in your workflow.',
            category: 'company',
            author: 'David Wilson',
            date: '2024-01-08',
            readTime: '3 min read',
            image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 5,
            title: 'Productivity Hacks: 5 Automations Every Remote Team Needs',
            excerpt: 'Essential automations that will help your remote team stay connected and efficient.',
            category: 'productivity',
            author: 'Lisa Thompson',
            date: '2024-01-05',
            readTime: '7 min read',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 6,
            title: 'Integrating Slack with Your Entire Tech Stack',
            excerpt: 'Make Slack the command center for your team by connecting it to all your essential tools.',
            category: 'integrations',
            author: 'Alex Rodriguez',
            date: '2024-01-03',
            readTime: '9 min read',
            image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 7,
            title: 'Why Every E-commerce Store Needs These 7 Automations',
            excerpt: 'Boost your online store\'s efficiency with these must-have e-commerce automation workflows.',
            category: 'automation',
            author: 'Rachel Green',
            date: '2024-01-01',
            readTime: '10 min read',
            image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
    ];

    const allPosts = [featuredPost, ...posts];

    const filteredPosts = allPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const onReadArticle = () => {
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
                            The Zapier Blog
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Automation tips, productivity hacks, and the latest from our team
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            {!searchTerm && selectedCategory === 'all' && (
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 lg:p-12">
                                    <div className="mb-4">
                                        <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-orange-600 transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                                        <span>{featuredPost.author}</span>
                                        <div className="flex items-center space-x-1">
                                            <CalendarIcon className="h-4 w-4" />
                                            <span>{formatDate(featuredPost.date)}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <ClockIcon className="h-4 w-4" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>
                                    <button className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                                        onClick={onReadArticle}
                                    >
                                        <span>Read full article</span>
                                        <ArrowRightIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

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
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results Header */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {searchTerm ? `Search results for "${searchTerm}"` :
                                selectedCategory === 'all' ? 'Latest articles' :
                                    categories.find(c => c.id === selectedCategory)?.name + ' articles'}
                        </h2>
                        <p className="text-gray-600">
                            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                        </p>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.slice(1).map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                                onClick={onReadArticle}
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="text-orange-600 text-sm font-medium capitalize">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{post.author}</span>
                                        <div className="flex items-center space-x-3">
                                            <div className="flex items-center space-x-1">
                                                <CalendarIcon className="h-3 w-3" />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <ClockIcon className="h-3 w-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No articles found
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
                                View all articles
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 m-2 rounded-2xl">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Stay up to date
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Get the latest automation tips and product updates delivered to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white"
                            />
                            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default BlogPage;