export interface Category extends BaseObject{
    checklists: Checklist[];
    createdAt: Date;
    color: string;
}

export interface Checklist extends BaseObject{
    checklistTasks: ChecklistTask[];
    createdAt: Date;
    color: string;
}

// THINK-ABOUT! type ChecklistTask = BaseObject
export interface ChecklistTask extends BaseObject{
}

export interface BaseObject{
    id: string;
    name: string;
    status: Status;
    priority: Priority;
    description: string;
    completeBy: Date;
}

export enum Status{
    COMPLETED, NOT_STARTED, IN_PROGRESS, CANCELED
}

export enum Priority{
    LOWEST, LOW, MEDIUM, HIGH, HIGHEST
}