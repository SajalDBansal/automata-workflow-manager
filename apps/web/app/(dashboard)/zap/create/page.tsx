"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    PlusIcon,
    CheckIcon,
    MagnifyingGlassIcon,
    BoltIcon,
    PencilIcon,
    Bars3Icon,
    TrashIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import { MoveRightIcon, X } from 'lucide-react';
import useApps from '@/hooks/useApps';
import { AppCategoryType, AvailableActionType, AvailableTriggerType } from '@zapier/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type AppsType = {
    id: string;
    name: string;
    image: string;
}

type SelectedTriggerType = {
    id: string,
    name: string,
    description: string,
    image: string,
    app_name: string
    metaData: any,
    configured: boolean
}

type SelectedActionType = {
    id: string,
    name: string,
    description: string,
    image: string,
    app_name: string
    metaData: any,
    order: number,
    configured: boolean
}

type ExtractedDataType = {
    id: string;
    name: string;
    description: string | undefined;
    image: string;
    app_name: string,
    type: "trigger" | "action"
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const WorkflowBuilderPage = () => {
    const router = useRouter();
    const [zapName, setZapName] = useState('Untitled Zap');
    const [zapDescription, setZapDescription] = useState('');

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const [showSidebar, setShowSidebar] = useState(true);

    const [isTriggerSet, setIsTriggerSet] = useState(false);
    const [showTriggersButton, setShowTriggersButton] = useState(false);
    const [SelectedTrigger, setSelectedTrigger] = useState<SelectedTriggerType>({
        id: '',
        name: '',
        description: '',
        image: '',
        app_name: '',
        metaData: {},
        configured: false
    });

    const [selectedActions, setSelectedActions] = useState<SelectedActionType[]>([
        {
            id: '',
            name: '',
            description: '',
            image: '',
            app_name: '',
            metaData: {},
            order: 0,
            configured: false
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const [draggedItem, setDraggedItem] = useState<{ app: AppsType; event: ExtractedDataType } | null>(null);
    const [dragOverCard, setDragOverCard] = useState<string | null>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);

    const { isLoading, app } = useApps();

    function extractApps(appsData: AppCategoryType[]) {
        return appsData.map(app => ({
            id: app.id,
            name: app.name,
            image: app.image,
        }));
    }

    function extractTriggers(appsData: AppCategoryType[]): ExtractedDataType[] {
        return appsData.flatMap(app =>
            (app.AvailableTrigger).map(trigger => ({
                id: trigger.id,
                name: trigger.name,
                description: trigger.description,
                image: trigger.image,
                app_name: app.name,
                type: "trigger"
            }))
        );
    }

    function extractActions(appsData: AppCategoryType[]): ExtractedDataType[] {
        return appsData.flatMap(app =>
            (app.AvailableAction).map(trigger => ({
                id: trigger.id,
                name: trigger.name,
                description: trigger.description,
                image: trigger.image,
                app_name: app.name,
                type: "action"
            }))
        );
    }

    const apps = extractApps(app);
    const triggers = extractTriggers(app);
    const actions = extractActions(app);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'communication', name: 'Communication' },
        { id: 'productivity', name: 'Productivity' },
        { id: 'crm', name: 'CRM' },
        { id: 'social-media', name: 'Social Media' },
        { id: 'ecommerce', name: 'eCommerce' },
        { id: 'finance', name: 'Finance' },
        { id: 'storage', name: 'File Storage' },
    ];

    const filteredApps = app.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isTrigger = app.AvailableTrigger && app.AvailableTrigger.length > 0;
        const isAction = app.AvailableAction && app.AvailableAction.length > 0;

        if (!isTriggerSet) {
            return matchesSearch && isTrigger;
        }
        return matchesSearch && isAction;
    });

    const handleDragStart = (app: AppsType, event: ExtractedDataType) => {
        setDraggedItem({ app, event });
    };

    const handleDragOver = (e: React.DragEvent, cardId?: string) => {
        e.preventDefault();
        if (cardId !== undefined) {
            setDragOverCard(cardId);
        }
    };

    const handleDragLeave = () => {
        setDragOverCard(null);
    };

    const handleDrop = (e: React.DragEvent, actionType: 'trigger' | 'action', cardId: string) => {
        e.preventDefault();
        setDragOverCard(null);
        if (!draggedItem) return;
        if (cardId !== undefined) {
            if (actionType === 'trigger' && draggedItem.event.type === "trigger") {
                const updatedTrigger: SelectedTriggerType = {
                    id: draggedItem.event.id,
                    name: draggedItem.event.name,
                    description: draggedItem.event.description || "",
                    image: draggedItem.event.image,
                    app_name: draggedItem.app.name,
                    metaData: {},
                    configured: true
                };
                setSelectedTrigger(updatedTrigger);
                setIsTriggerSet(true);
            } else {
                const updatedActions = selectedActions.map(action => {
                    if (action.id === cardId) {
                        // If the action is blank, set it. If already set, update it.
                        return {
                            ...action,
                            id: draggedItem.event.id,
                            name: draggedItem.event.name,
                            description: draggedItem.event.description || "",
                            image: draggedItem.event.image,
                            app_name: draggedItem.app.name,
                            metaData: {},
                            order: action.order, // keep the same order
                            configured: true
                        };
                    } else {
                        return action;
                    }
                });
                setSelectedActions(updatedActions);
            }
        }
        setDraggedItem(null);
    };

    const removeAction = (orderId: number) => {
        if (selectedActions.length <= 1) return;
        const isLast = orderId === selectedActions.length - 1;
        console.log(orderId);

        if (isLast) {
            // Remove last action
            setSelectedActions(selectedActions.filter(action => action.order !== orderId));
        } else {
            // Remove middle action and shift subsequent orders
            const updated = selectedActions
                .filter(action => action.order !== orderId)
                .map(action =>
                    action.order > orderId
                        ? { ...action, order: action.order - 1 }
                        : action
                );

            setSelectedActions(updated);
        }
    };

    const addEmptyAction = () => {
        if (selectedActions[selectedActions.length - 1].id === '') return;

        const newAction: SelectedActionType = {
            id: '',
            name: '',
            description: '',
            image: '',
            app_name: '',
            metaData: {},
            order: selectedActions.length,
            configured: false
        };
        setSelectedActions([...selectedActions, newAction]);
    }

    const handleSaveDraft = () => {
        console.log("hello");
    }

    const handlePublish = async () => {
        const queryData = {
            "name": zapName,
            "description": zapDescription,
            "availabeTriggerId": SelectedTrigger.id,
            "triggerMetadata": SelectedTrigger.metaData,
            "actions": selectedActions.map(action => {
                return {
                    "avalaibleActionId": action.id,
                    "actionMetadata": action.metaData
                }
            })
        }

        await axios.post(`${BACKEND_URL}/api/v1/zap`, queryData, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        router.push("/app");

    }

    if (isLoading) return <div className='flex items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500' />
        <span className='text-orange-500 ml-4'>Loading...</span>
    </div>;

    return (
        <div className="h-[calc(100vh-65px)] bg-gray-50 overflow-hidden">

            {/* name & description */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">

                    <div className="flex-1 max-w-2xl">
                        {isEditingName ? (
                            <input
                                type="text"
                                value={zapName}
                                onChange={(e) => setZapName(e.target.value)}
                                onBlur={() => setIsEditingName(false)}
                                onKeyPress={(e) => e.key === 'Enter' && setIsEditingName(false)}
                                className="text-2xl font-bold text-gray-900 bg-transparent border-none outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 w-full"
                                autoFocus
                            />
                        ) : (
                            <div className="flex items-center space-x-2">
                                <h1 className="text-2xl font-bold text-gray-900">{zapName}</h1>
                                <button
                                    onClick={() => setIsEditingName(true)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded"
                                >
                                    <PencilIcon className="h-4 w-4" />
                                </button>
                            </div>
                        )}

                        {isEditingDescription ? (
                            <input
                                type="text"
                                value={zapDescription}
                                onChange={(e) => setZapDescription(e.target.value)}
                                onBlur={() => setIsEditingDescription(false)}
                                onKeyPress={(e) => e.key === 'Enter' && setIsEditingDescription(false)}
                                placeholder="Add a description for your Zap..."
                                className="text-gray-600 bg-transparent border-none outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 w-full mt-1"
                                autoFocus
                            />
                        ) : (
                            <div className="flex items-center space-x-2 mt-1">
                                <p className="text-gray-600">
                                    {zapDescription || 'Add a description for your Zap...'}
                                </p>
                                <button
                                    onClick={() => setIsEditingDescription(true)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded"
                                >
                                    <PencilIcon className="h-3 w-3" />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center space-x-3">
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                            onClick={() => handleSaveDraft()}
                        >
                            Save Draft
                        </button>
                        <button
                            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            disabled={!selectedActions.every(action => action.configured) && !SelectedTrigger?.configured}
                            onClick={() => handlePublish()}
                        >
                            <BoltIcon className="h-4 w-4" />
                            <span>Turn on Zap</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex h-full">
                {/* canvas */}
                <div className="flex-1 p-6 overflow-auto mb-20">
                    <div
                        ref={dropZoneRef}
                        className="max-w-2xl mx-auto space-y-6"
                        onDragOver={(e) => handleDragOver(e)}
                    >

                        <CanvasTrigger
                            trigger={SelectedTrigger}
                            handleDragOver={handleDragOver}
                            handleDragLeave={handleDragLeave}
                            handleDrop={handleDrop}
                            dragOverCard={dragOverCard}
                        />

                        <CanvasActions
                            actions={selectedActions}
                            handleDragOver={handleDragOver}
                            handleDragLeave={handleDragLeave}
                            handleDrop={handleDrop}
                            removeAction={removeAction}
                            dragOverCard={dragOverCard}
                        />

                        {/* Add Action Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: selectedActions.length * 0.1 }}
                            onClick={() => { addEmptyAction(); setShowSidebar(true) }}
                            className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-300 hover:bg-orange-50 transition-colors group"
                        >
                            <PlusIcon className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mx-auto mb-2" />
                            <p className="text-gray-600 group-hover:text-orange-600 font-medium">
                                Add another action
                            </p>
                        </motion.button>
                    </div>

                </div>

                {/* configurations */}


                {/* side bar */}
                <div className={`${showSidebar ? 'block' : 'hidden'} w-80 bg-white border-l border-gray-200 flex flex-col mb-20`}>
                    {/* Sidebar Header */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative mb-4">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                            <input
                                type="text"
                                placeholder="Search apps..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                            />
                            <X className="h-5 w-5 text-gray-400 absolute right-12 top-2.5 hover:text-orange-500" onClick={() => setSearchTerm('')} />
                            <div className='absolute right-1 top-1 border border-gray-300 rounded-lg p-1 hover:text-black text-gray-400 transition-colors hover:border-black'>
                                <MoveRightIcon className="h-5 w-5 " onClick={() => setShowSidebar(!showSidebar)} />
                            </div>
                        </div>

                        <button
                            onClick={() => setIsTriggerSet(!isTriggerSet)}
                            className={`mb-2 w-full py-2 rounded-full text-xs font-medium transition-colors ${isTriggerSet
                                ? 'bg-orange-500 text-white hover:bg-orange-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Show {isTriggerSet ? 'Triggers' : 'Actions'}
                        </button>

                        <div className="flex flex-wrap gap-2">
                            {categories.slice(0, 4).map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedCategory === category.id
                                        ? 'bg-orange-500 text-white '
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Apps List */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredApps.map((app) => (
                            <div key={app.name} className="border-b border-gray-100 last:border-b-0">
                                <div className="p-4">

                                    {/* App Name and Description */}
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                                            <img src={app.image} alt={app.name} className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">{app.name}</h4>
                                            <p className="text-xs text-gray-500">{app.name}</p>
                                        </div>
                                    </div>

                                    {/* Triggers */}
                                    {!isTriggerSet &&
                                        triggers.length > 0 && (
                                            <div className="mb-3">
                                                <h5 className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                                                    Triggers
                                                </h5>
                                                <div className="space-y-1">
                                                    {triggers.map((trigger) => {
                                                        if (app.name === trigger.app_name) {
                                                            return (
                                                                <div
                                                                    key={trigger.name}
                                                                    draggable
                                                                    onDragStart={() => handleDragStart(app, trigger)}
                                                                    className="p-2 bg-blue-50 rounded border border-blue-200 cursor-move hover:bg-blue-100 transition-colors"
                                                                >
                                                                    <p className="text-xs font-medium text-blue-900">{trigger.name}</p>
                                                                    <p className="text-xs text-blue-700">{trigger.description}</p>
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Actions */}
                                    {isTriggerSet &&
                                        actions.length > 0 && (
                                            <div>
                                                <h5 className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                                                    Actions
                                                </h5>
                                                <div className="space-y-1">
                                                    {actions.map((action) => {
                                                        if (app.name === action.app_name) {
                                                            return (
                                                                <div
                                                                    key={action.name}
                                                                    draggable
                                                                    onDragStart={() => handleDragStart(app, action)}
                                                                    className="p-2 bg-green-50 rounded border border-green-200 cursor-move hover:bg-green-100 transition-colors"
                                                                >
                                                                    <p className="text-xs font-medium text-green-900">{action.name}</p>
                                                                    <p className="text-xs text-green-700">{action.description}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkflowBuilderPage;

const CanvasTrigger = ({ trigger, handleDragOver, handleDragLeave, handleDrop, dragOverCard }: {
    trigger: SelectedTriggerType;
    handleDragOver: (e: React.DragEvent, cardId?: string) => void;
    handleDragLeave: () => void;
    handleDrop: (e: React.DragEvent, cardType: 'trigger' | 'action', cardId: string) => void;
    dragOverCard: string | null;
}) => {
    return (
        <>
            <motion.div
                key={trigger.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 ${dragOverCard === trigger.id
                    ? 'border-orange-300 bg-orange-50'
                    : 'border-gray-200'
                    }`}
                onDragOver={(e) => handleDragOver(e, trigger.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'trigger', trigger.id)}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold bg-blue-500`}>
                                -
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                                    Trigger
                                </h3>
                                <p className="text-sm text-gray-500">
                                    When this happens...
                                </p>
                            </div>
                        </div>
                    </div>

                    {trigger.name === '' ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <Bars3Icon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600 font-medium mb-1">
                                Drag an app from the sidebar
                            </p>
                            <p className="text-sm text-gray-500">
                                Or choose from the triggers panel
                            </p>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                                <img src={trigger.image} alt={trigger.app_name} className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{trigger.app_name}</h4>
                                <p className="text-sm text-gray-600">{trigger.name}</p>
                                <p className="text-xs text-gray-500">{trigger.description}</p>
                            </div>
                            <CheckIcon className="h-5 w-5 text-green-500" />
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    )
}

const CanvasActions = ({ actions, handleDragOver, handleDragLeave, handleDrop, removeAction, dragOverCard }: {
    actions: SelectedActionType[];
    handleDragOver: (e: React.DragEvent, cardId?: string) => void;
    handleDragLeave: () => void;
    handleDrop: (e: React.DragEvent, cardType: 'trigger' | 'action', cardId: string) => void;
    removeAction: (orderId: number) => void;
    dragOverCard: string | null;
}) => {
    return (
        <>
            {
                actions.map((action: SelectedActionType, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 ${dragOverCard === action.id
                            ? 'border-orange-300 bg-orange-50'
                            : 'border-gray-200'
                            }`}
                        onDragOver={(e) => handleDragOver(e, action.id)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, 'action', action.id)}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold bg-green-500
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 capitalize">
                                            Action
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Then do this...
                                        </p>
                                    </div>
                                </div>

                                {actions.length > 1 && (
                                    <button
                                        onClick={() => removeAction(index)}
                                        className="p-2 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors"
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                )}
                            </div>

                            {action.name == "" ? (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <Bars3Icon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-600 font-medium mb-1">
                                        Drag an app from the sidebar
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Or choose from the actions panel
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                                        <img src={action.image} alt={action.app_name} className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{action.app_name}</h4>
                                        <p className="text-sm text-gray-600">{action.name}</p>
                                        <p className="text-xs text-gray-500">{action.description}</p>
                                    </div>
                                    <CheckIcon className="h-5 w-5 text-green-500" />
                                </div>
                            )}
                        </div>

                        {/* Connection Line */}
                        {index < actions.length - 1 && (
                            <div className="flex justify-center py-2">
                                <ArrowRightIcon className="h-5 w-5 text-gray-400 transform rotate-90" />
                            </div>
                        )}
                    </motion.div>
                ))
            }
        </>
    )

}