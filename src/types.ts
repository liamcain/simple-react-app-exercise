export type ITaskState = "TODO" | "DONE";
export interface ITask {
  ctime: number;
  title: string;
  description: string;
  state: ITaskState;
}
