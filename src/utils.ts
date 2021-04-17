import type { ITask } from "./types";

const TASKS_STORAGE_KEY = "tasks";

export function deserializeTasks(): Record<number, ITask> {
  const serializedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!serializedTasks) {
    return [];
  }
  return JSON.parse(serializedTasks) as ITask[];
}

export function serializeTasks(taskMap: Record<number, ITask>): void {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap));
}

export function applyFilter(tasks: ITask[], searchQuery: string): ITask[] {
  return tasks.filter(
    (task) =>
      task.description.includes(searchQuery) || task.title.includes(searchQuery)
  );
}
