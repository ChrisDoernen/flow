import { Task } from "./task.entity";

export interface Workflow {
    name: string;
    id: string;
    tasks: Task[];
}