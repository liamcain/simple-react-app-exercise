import { useReducer } from "react";

import { ITask } from "../types";
import { deserializeTasks, serializeTasks } from "../utils";

interface ITaskAction {
  type: "create" | "update" | "delete";
  payload: any;
}

function tasksReducer(
  state: Record<number, ITask>,
  action: ITaskAction
): Record<number, ITask> {
  switch (action.type) {
    case "create": {
      const ctime = new Date().getTime();
      const newState = {
        ...state,
        [ctime]: {
          ...action.payload,
          ctime,
        },
      };
      serializeTasks(newState);
      return newState;
    }
    case "update": {
      const newState = { ...state, [action.payload.ctime]: action.payload };
      serializeTasks(newState);
      return newState;
    }
    case "delete": {
      const newState = { ...state };
      delete newState[action.payload.ctime];
      serializeTasks(newState);
      return newState;
    }
    default:
      return state;
  }
}

export default function useTasks() {
  const [state, dispatch] = useReducer(
    tasksReducer,
    deserializeTasks() as Record<number, ITask>
  );

  return {
    taskMap: state,
    createTask: (task: Partial<ITask>) =>
      dispatch({ type: "create", payload: task }),
    deleteTask: (task: Partial<ITask>) =>
      dispatch({ type: "delete", payload: task }),
    updateTask: (task: Partial<ITask>) =>
      dispatch({ type: "update", payload: task }),
  };
}
