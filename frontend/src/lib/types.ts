export interface Task_Type {
    task_id: number;
    task_title: string;
    task_description?: string;
    task_completed: boolean;
    created_at: Date;
    updated_at: Date;
}