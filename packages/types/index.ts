export type SignupType = {
    email: string;
    password: string;
    name: string;
}

export type SigninType = {
    email: string;
    password: string;
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

export type ActionType = {
    id: string;
    zapId: string;
    actionId: string;
    metadata: any;
    sortingOrder: number;
    type: AvailableActionType;
}

export type TriggerType = {
    id: string;
    zapId: string;
    triggerId: string;
    metadata: any;
    type: AvailableTriggerType;
}

export type AvailableActionType = {
    id: string;
    name: string;
    image: string;
}

export type AvailableTriggerType = {
    id: string;
    name: string;
    image: string;
}

export type UserType = {
    id: string;
    name: string;
    email: string;
}

export enum ZapStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    ERROR = "ERROR",
    DELETED = "DELETED"
}
