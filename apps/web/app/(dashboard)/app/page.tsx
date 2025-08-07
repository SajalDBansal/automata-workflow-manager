"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    PlusIcon,
    PlayIcon,
    PauseIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import useZaps from '@/hooks/useZaps';
import { useRouter } from 'next/navigation';
import { ZapStatus, ZapType } from '@zapier/types';
import { ClockIcon } from 'lucide-react';

const HOOKS_URL = process.env.NEXT_PUBLIC_HOOKS_URL;

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const router = useRouter();
    const { isLoading, zaps } = useZaps();

    const zapStats = [
        { id: 'all', name: 'All Zaps' },
        { id: 'active', name: 'Active' },
        { id: 'paused', name: 'Paused' },
        { id: 'error', name: 'Errors' },
    ]

    const getStatusIcon = (status: string) => {
        switch (status) {
            case ZapStatus.PENDING:
                return <ClockIcon className="h-5 w-5 text-orange-500" />;
            case ZapStatus.ACTIVE:
                return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
            case ZapStatus.PAUSED:
                return <PauseIcon className="h-5 w-5 text-yellow-500" />;
            case ZapStatus.ERROR:
                return <XCircleIcon className="h-5 w-5 text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case ZapStatus.PENDING:
                return 'Pending';
            case ZapStatus.ACTIVE:
                return 'Active';
            case ZapStatus.PAUSED:
                return 'Paused';
            case ZapStatus.ERROR:
                return 'Error';
            default:
                return status;
        }
    };

    const pushToBuilder = (id: string) => {
        router.push(`/builder/${id}`);
    }

    if (isLoading) return <div className='flex items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500' />
        <span className='text-orange-500 ml-4'>Loading...</span>
    </div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Zaps</h1>
                            <p className="text-gray-600 mt-2">Manage your automated workflows</p>
                        </div>
                        <div className="mt-4 sm:mt-0 flex space-x-3">
                            <Link
                                href="/zap/create"
                                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center space-x-2"
                            >
                                <PlusIcon className="h-5 w-5" />
                                <span>Create Zap</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {zapStats.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Zaps List */}
                    <div className="divide-y divide-gray-200">
                        {zaps.map((zap, index) => (
                            <motion.div
                                key={zap.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-4 mb-3">
                                            {/* Trigger App */}
                                            <div className="flex items-center space-x-2">
                                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <img src={zap.trigger.type.image} alt={zap.trigger.type.name} className="w-6 h-6" />
                                                </div>
                                                <span className="text-sm text-gray-600">{zap.trigger.type.name}</span>
                                            </div>

                                            {/* Arrow */}
                                            <div className="text-gray-400">→</div>

                                            {/* Actions */}
                                            {zap.actions.map((action) => (
                                                <div key={action.id} className="flex items-center space-x-2">
                                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                        <img src={action.type.image} alt={action.type.name} className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-sm text-gray-600">{action.type.name}</span>
                                                    <div className="text-gray-400">→</div>
                                                </div>
                                            ))}

                                            {/* Status - if available */}
                                            {zap.status && (
                                                <div className="flex items-center space-x-2">
                                                    {getStatusIcon(zap.status)}
                                                    <span className={`text-sm font-medium ${zap.status === ZapStatus.ACTIVE ? 'text-green-600' :
                                                        zap.status === ZapStatus.PAUSED ? 'text-yellow-600' :
                                                            'text-red-600'
                                                        }`}>
                                                        {getStatusText(zap.status)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {zap.name}
                                        </h3>
                                        <p className="text-gray-600 mb-3">{zap.description}</p>
                                        <p className="text-gray-600 mb-3 text-sm">
                                            {zap.trigger.type.appCategory?.name === "Webhook" &&
                                                `${HOOKS_URL}/hooks/catch/${zap.userId}/${zap.id}`}
                                        </p>

                                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                                            <span>{zap.tasks} tasks run</span>
                                            <span>Last run: {zap.lastRun}</span>
                                            <span>Created: {new Date(zap.created).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2 ml-6">
                                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                                            onClick={() => pushToBuilder(zap.id)}
                                        >
                                            <EyeIcon className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                                            onClick={() => pushToBuilder(zap.id)}
                                        >
                                            <PencilIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            className={`p-2 rounded-md transition-colors ${zap.status === ZapStatus.ACTIVE
                                                ? 'text-purple-600 hover:text-purple-700 hover:bg-purple-100'
                                                : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                                                }`}
                                        >
                                            {zap.status === ZapStatus.ACTIVE ? (
                                                <PauseIcon className="h-5 w-5" />
                                            ) : (
                                                <PlayIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                        <button className="p-2 text-red-400 hover:text-red-600 rounded-md hover:bg-red-100 transition-colors">
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Empty State */}
                {zaps.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-12"
                    >
                        <div className="text-6xl mb-4">🔗</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No {activeTab === 'all' ? 'Zaps' : activeTab} found
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {activeTab === 'all'
                                ? 'Get started by creating your first automation'
                                : `No ${activeTab} Zaps to display`
                            }
                        </p>
                        {activeTab === 'all' && (
                            <Link
                                href="/builder"
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
                            >
                                <PlusIcon className="h-5 w-5" />
                                <span>Create your first Zap</span>
                            </Link>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default DashboardPage;