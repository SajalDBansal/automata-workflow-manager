"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    PhoneIcon,
    MapPinIcon,
    ChatBubbleLeftRightIcon,
    QuestionMarkCircleIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: 'general',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactOptions = [
        {
            icon: CodeBracketIcon,
            title: 'GitHub',
            description: 'Join our community on GitHub. Ask questions, share ideas, and contribute to the project.',
            action: 'Show repo',
            color: 'blue',
            link: "https://github.com/SajalDBansal/automata-workflow-manager",
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: 'Twitter',
            description: 'Follow us on Twitter for the latest news and updates. Share your thoughts and ideas with us.',
            action: 'Show tweets',
            color: 'green',
            link: "https://x.com/SAJALDUTTBANSAL",
        },
        {
            icon: QuestionMarkCircleIcon,
            title: 'LinkedIn',
            description: 'Connect with us on LinkedIn. Join our community and stay updated on the latest trends.',
            action: 'Show posts',
            color: 'purple',
            link: "https://www.linkedin.com/in/sajalduttbansal/",
        },
    ];

    const offices = [
        {
            city: 'San Francisco',
            address: '548 Market St, Suite 62411\nSan Francisco, CA 94104',
            phone: '+1 (855) 937-3554',
        },
        {
            city: 'Austin',
            address: '1105 N Market St\nDallas, TX 75207',
            phone: '+1 (512) 555-0123',
        },
        {
            city: 'London',
            address: '1 Fore Street\nLondon EC2Y 9DT\nUnited Kingdom',
            phone: '+44 20 7946 0958',
        },
    ];

    useEffect(() => {
        toast("This is the sample contact page.");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Thank you for your message! We\'ll get back to you soon.');
            setFormData({
                name: '',
                email: '',
                company: '',
                subject: 'general',
                message: '',
            });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onContact = (link: string) => {
        window.open(link, '_blank');
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
                            Get in touch
                        </h1>
                        <p className="text-xl text-gray-600">
                            We're here to help with any questions about Zapier or automation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            How can we help you?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Choose the best way to get the support you need
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactOptions.map((option, index) => (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-orange-300 transition-all duration-300 text-center group cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${option.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                                    option.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                                        'bg-purple-100 group-hover:bg-purple-200'
                                    } transition-colors`}>
                                    <option.icon className={`h-8 w-8 ${option.color === 'blue' ? 'text-blue-600' :
                                        option.color === 'green' ? 'text-green-600' :
                                            'text-purple-600'
                                        }`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {option.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {option.description}
                                </p>
                                <button
                                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors 
                                        ${option.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                                            option.color === 'green' ? 'bg-green-500 hover:bg-green-600 text-white' :
                                                'bg-purple-500 hover:bg-purple-600 text-white'
                                        }`}
                                    onClick={() => onContact(option.link)}
                                >
                                    {option.action}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Send us a message
                        </h2>
                        <p className="text-xl text-gray-600">
                            Have a specific question? Fill out the form below and we'll get back to you
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="press">Press Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our offices
                        </h2>
                        <p className="text-xl text-gray-600">
                            Visit us at one of our locations around the world
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <motion.div
                                key={office.city}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center"
                            >
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MapPinIcon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {office.city}
                                </h3>
                                <p className="text-gray-600 mb-4 whitespace-pre-line">
                                    {office.address}
                                </p>
                                <div className="flex items-center justify-center space-x-1 text-gray-600">
                                    <PhoneIcon className="h-4 w-4" />
                                    <span className="text-sm">{office.phone}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions about getting in touch
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            {
                                question: "What's the best way to get support?",
                                answer: "For technical issues, use our chat support for the fastest response. For general questions, our help center has comprehensive guides and tutorials."
                            },
                            {
                                question: "How quickly will I get a response?",
                                answer: "Chat support typically responds within a few minutes during business hours. Email inquiries are usually answered within 24 hours."
                            },
                            {
                                question: "Do you offer phone support?",
                                answer: "We primarily offer chat and email support for faster resolution. Our support team is available 24/7 through chat."
                            },
                            {
                                question: "Can I schedule a demo or consultation?",
                                answer: "Yes! Enterprise customers can schedule personalized demos and consultations. Contact our sales team to arrange a meeting."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;