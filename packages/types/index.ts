export type SignupType = {
    email: string;
    password: string;
    name: string;
}

export type SigninType = {
    email: string;
    password: string;
}

export type UserType = {
    id: string;
    name: string;
    email: string;
    password?: string;
}

export type ZapType = {
    id: string;
    name: string;
    description: string;
    lastRun?: string;
    created: string;
    tasks?: number;
    status: ZapStatus;
    triggerId: string;
    userId: string;
    actions: ActionType[];
    trigger: TriggerType;
    user?: UserType;
}

export type TriggerType = {
    id: string;
    zapId: string;
    triggerId: string;
    metadata: any;
    configured: boolean;
    type: AvailableTriggerType;
    zap?: ZapType;
}

export type ActionType = {
    id: string;
    zapId: string;
    actionId: string;
    metadata: any;
    sortingOrder: number;
    configured: boolean;
    type: AvailableActionType;
    zap?: ZapType;
}

export type AppCategoryType = {
    id: string;
    name: string;
    image: string;
    AvailableAction: AvailableActionType[];
    AvailableTrigger: AvailableTriggerType[];
}

export type AvailableActionType = {
    id: string;
    name: string;
    image: string;
    description?: string;
    appCategoryId?: string;
    appCategory?: AppCategoryType;
    actions?: ActionType[];
}

export type AvailableTriggerType = {
    id: string;
    name: string;
    image: string;
    description?: string;
    appCategoryId?: string;
    appCategory?: AppCategoryType;
    triggers?: TriggerType[];
}

export enum ZapStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    ERROR = "ERROR",
    DELETED = "DELETED"
}


