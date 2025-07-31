"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const TemplatesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Templates' },
        { id: 'productivity', name: 'Productivity' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'sales', name: 'Sales' },
        { id: 'ecommerce', name: 'eCommerce' },
        { id: 'social-media', name: 'Social Media' },
        { id: 'finance', name: 'Finance' },
        { id: 'hr', name: 'HR & Recruiting' },
    ];

    const templates = [
        {
            id: 1,
            name: 'Send Slack notifications for new Gmail emails',
            description: 'Get notified in Slack whenever you receive important emails in Gmail',
            category: 'productivity',
            apps: [
                { name: 'Gmail', icon: '📧' },
                { name: 'Slack', icon: '💬' }
            ],
            uses: 15420,
            featured: true,
        },
        {
            id: 2,
            name: 'Add new leads from forms to Salesforce',
            description: 'Automatically create leads in Salesforce from form submissions',
            category: 'sales',
            apps: [
                { name: 'Typeform', icon: '📝' },
                { name: 'Salesforce', icon: '☁️' }
            ],
            uses: 8765,
            featured: true,
        },
        {
            id: 3,
            name: 'Save email attachments to Google Drive',
            description: 'Automatically save email attachments to organized folders in Google Drive',
            category: 'productivity',
            apps: [
                { name: 'Gmail', icon: '📧' },
                { name: 'Google Drive', icon: '💾' }
            ],
            uses: 12340,
            featured: false,
        },
        {
            id: 4,
            name: 'Create Trello cards from new Slack messages',
            description: 'Turn important Slack messages into actionable Trello cards',
            category: 'productivity',
            apps: [
                { name: 'Slack', icon: '💬' },
                { name: 'Trello', icon: '📋' }
            ],
            uses: 6789,
            featured: false,
        },
        {
            id: 5,
            name: 'Post new blog articles to social media',
            description: 'Automatically share your latest blog posts across social platforms',
            category: 'marketing',
            apps: [
                { name: 'WordPress', icon: '📰' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Facebook', icon: '📘' }
            ],
            uses: 9876,
            featured: true,
        },
        {
            id: 6,
            name: 'Add new Shopify customers to Mailchimp',
            description: 'Build your email list by adding new customers to marketing campaigns',
            category: 'ecommerce',
            apps: [
                { name: 'Shopify', icon: '🛍️' },
                { name: 'Mailchimp', icon: '📨' }
            ],
            uses: 7654,
            featured: false,
        },
        {
            id: 7,
            name: 'Track expenses from receipts to spreadsheet',
            description: 'Automatically log receipt data to expense tracking spreadsheets',
            category: 'finance',
            apps: [
                { name: 'Receipt Bank', icon: '🧾' },
                { name: 'Google Sheets', icon: '📊' }
            ],
            uses: 4321,
            featured: false,
        },
        {
            id: 8,
            name: 'Schedule social media posts from content calendar',
            description: 'Automatically publish scheduled posts from your content planning tool',
            category: 'social-media',
            apps: [
                { name: 'Airtable', icon: '🗂️' },
                { name: 'Buffer', icon: '📅' }
            ],
            uses: 5432,
            featured: false,
        },
    ];

    const filteredTemplates = templates.filter(template => {
        const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            template.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredTemplates = templates.filter(t => t.featured);

    const inUserTemplate = () => {
        toast("Sign in to create and manage your templates");
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
                            Zap Templates
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Get started quickly with pre-built workflows for popular use cases
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                placeholder="Search templates..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Templates */}
            {!searchTerm && selectedCategory === 'all' && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Most popular templates
                            </h2>
                            <p className="text-xl text-gray-600">
                                Start with these proven automation workflows
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredTemplates.map((template, index) => (
                                <motion.div
                                    key={template.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="mb-4">
                                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                                            Featured
                                        </span>
                                    </div>

                                    {/* App Icons */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        {template.apps.map((app, appIndex) => (
                                            <React.Fragment key={app.name}>
                                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                                                    {app.icon}
                                                </div>
                                                {appIndex < template.apps.length - 1 && (
                                                    <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                        {template.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {template.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {template.uses.toLocaleString()} users
                                        </span>
                                        <button className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                                            onClick={inUserTemplate}
                                        >
                                            <PlayIcon className="h-4 w-4" />
                                            <span>Use template</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Categories */}
            <section className="py-12 bg-white border-b border-gray-200">
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
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Templates Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {searchTerm ? `Search results for "${searchTerm}"` :
                                selectedCategory === 'all' ? 'All templates' :
                                    categories.find(c => c.id === selectedCategory)?.name + ' templates'}
                        </h2>
                        <p className="text-gray-600">
                            {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
                        </p>
                    </div>

                    {/* Templates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map((template, index) => (
                            <motion.div
                                key={template.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                            >
                                {/* App Icons */}
                                <div className="flex items-center space-x-2 mb-4">
                                    {template.apps.map((app, appIndex) => (
                                        <React.Fragment key={app.name}>
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                                                {app.icon}
                                            </div>
                                            {appIndex < template.apps.length - 1 && (
                                                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {template.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {template.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        {template.uses.toLocaleString()} users
                                    </span>
                                    <button className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors group-hover:bg-orange-500 group-hover:text-white"
                                        onClick={inUserTemplate}
                                    >
                                        <PlayIcon className="h-4 w-4" />
                                        <span>Use template</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredTemplates.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="text-6xl mb-4">📋</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No templates found
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
                                View all templates
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
                            Ready to automate your workflow?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Start with a template or build your own custom automation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Start free trial
                            </button>
                            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                                Create custom Zap
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default TemplatesPage;