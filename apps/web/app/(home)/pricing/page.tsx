"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'Free',
            price: 0,
            annualPrice: 0,
            description: 'For individuals getting started with automation',
            features: [
                '100 tasks per month',
                '5 Zaps (workflows)',
                '2-step Zaps only',
                'Built-in apps only',
                'Email support',
            ],
            limitations: [
                'No premium apps',
                'No multi-step Zaps',
                'No team features',
            ],
            popular: false,
            buttonText: 'Get Started Free',
            buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
        },
        {
            name: 'Starter',
            price: 19.99,
            annualPrice: 15.99,
            description: 'For individuals who want to automate more',
            features: [
                '750 tasks per month',
                '20 Zaps',
                'Multi-step Zaps',
                'Premium apps',
                '3 premium apps',
                'Email support',
            ],
            limitations: [
                'Limited premium apps',
                'No team features',
                'No custom logic',
            ],
            popular: true,
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-orange-500 text-white hover:bg-orange-600',
        },
        {
            name: 'Professional',
            price: 49.99,
            annualPrice: 39.99,
            description: 'For small teams that need more power',
            features: [
                '2,000 tasks per month',
                'Unlimited Zaps',
                'Premium apps',
                'Custom logic with paths',
                'Webhooks',
                'Email support',
                '3 users included',
            ],
            limitations: [
                'Limited users',
                'No advanced features',
            ],
            popular: false,
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
        },
        {
            name: 'Team',
            price: 99.99,
            annualPrice: 79.99,
            description: 'For growing teams with advanced needs',
            features: [
                '50,000 tasks per month',
                'Unlimited Zaps',
                'Premium apps',
                'Advanced admin features',
                'Shared team folder',
                'Priority support',
                'Unlimited users',
                'Custom data retention',
            ],
            limitations: [],
            popular: false,
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
        },
    ];

    const faqs = [
        {
            question: 'What is a task in Automata?',
            answer: 'A task is a single action performed by a Zap. For example, if your Zap creates a new row in a Google Sheet, that counts as one task.',
        },
        {
            question: 'Can I change plans anytime?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
        },
        {
            question: 'Do you offer refunds?',
            answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.',
        },
        {
            question: 'What happens if I exceed my task limit?',
            answer: 'Your Zaps will be paused until the next month or until you upgrade to a higher plan. We\'ll send you notifications before this happens.',
        },
    ];

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
                            Simple, transparent pricing
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Choose the plan that's right for you. Start free, upgrade anytime.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                                Monthly
                            </span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? 'bg-orange-500' : 'bg-gray-200'}`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                                Annual
                            </span>
                            {isAnnual && (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Save 20%
                                </span>
                            )}

                        </div>

                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${plan.popular ? 'border-orange-500 scale-105' : 'border-gray-200'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">
                                            ${isAnnual ? plan.annualPrice : plan.price}
                                        </span>
                                        <span className="text-gray-500 ml-2">
                                            {plan.price === 0 ? 'forever' : '/month'}
                                        </span>
                                    </div>

                                    <Link
                                        href="/signup"
                                        className={`w-full inline-block py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start space-x-3">
                                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}

                                    {plan.limitations.map((limitation) => (
                                        <div key={limitation} className="flex items-start space-x-3">
                                            <XMarkIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-500 text-sm">{limitation}</span>
                                        </div>
                                    ))}
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about our pricing
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-lg p-8 shadow-sm"
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
                            Start automating today
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Try Automata free for 14 days. No credit card required.
                        </p>
                        <Link
                            href="/signup"
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get started free
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default PricingPage;