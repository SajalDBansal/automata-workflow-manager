"use client";
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { toast } from 'sonner';

const AboutPage = () => {
    const team = [
        {
            name: 'Wade Wilson',
            role: 'CEO & Co-founder',
            image: '👨‍💼',
            bio: 'Passionate about helping people work more efficiently through automation.',
        },
        {
            name: 'Bryan Helmig',
            role: 'CTO & Co-founder',
            image: '👨‍💻',
            bio: 'Loves building scalable systems that connect the world\'s apps.',
        },
        {
            name: 'Sarah Johnson',
            role: 'VP of Product',
            image: '👩‍💼',
            bio: 'Focused on creating intuitive experiences for millions of users.',
        },
        {
            name: 'Mike Chen',
            role: 'VP of Engineering',
            image: '👨‍🔬',
            bio: 'Leading our technical teams to build reliable automation infrastructure.',
        },
    ];

    const stats = [
        { label: 'Active Users', value: '2M+' },
        { label: 'App Integrations', value: '6,000+' },
        { label: 'Tasks Automated Daily', value: '50M+' },
        { label: 'Countries Served', value: '190+' },
    ];

    const values = [
        {
            title: 'User-First',
            description: 'We put our users at the center of everything we do, making automation accessible to everyone.',
            icon: '🎯',
        },
        {
            title: 'Innovation',
            description: 'We constantly push the boundaries of what\'s possible with workflow automation.',
            icon: '💡',
        },
        {
            title: 'Reliability',
            description: 'Our platform handles millions of automations daily with 99.9% uptime.',
            icon: '⚡',
        },
        {
            title: 'Transparency',
            description: 'We believe in open communication and honest relationships with our community.',
            icon: '🔍',
        },
    ];

    useEffect(() => {
        toast("This is the sample about page.");

    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white"
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            We're on a mission to make work work better
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Since 2025, we've been helping people connect their apps and automate their workflows.
                            Today, millions of users rely on Automata to get more done with less effort.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our story
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg mx-auto text-gray-600"
                    >
                        <p>
                            Automata was founded in 2025 by Wade Foster, Bryan Helmig, and Mike Knoop during a startup weekend in
                            Columbia, Missouri. The idea was simple: make it easy for anyone to connect their apps and automate
                            repetitive tasks, without needing to know how to code.
                        </p>

                        <p>
                            What started as a weekend project has grown into a platform that powers millions of automations every day.
                            We've remained committed to our founding vision of democratizing automation and helping people focus on
                            the work that matters most.
                        </p>

                        <p>
                            Today, Automata connects over 6,000 apps and serves millions of users worldwide. We're proud to be a
                            distributed team that believes in the power of remote work and automation to create a better future for everyone.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These principles guide everything we do, from how we build our product to how we treat our community
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Meet our leadership team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The people behind Automata who are passionate about making automation accessible to everyone
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                                    {member.image}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-orange-600 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.bio}
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
                            Join our mission
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Help us build the future of work by connecting apps and automating workflows
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                View careers
                            </button>
                            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                                Contact us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;