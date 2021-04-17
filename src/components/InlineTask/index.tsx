import clsx from "clsx";
import React, { FormEvent } from "react";

import DeleteIcon from "components/DeleteButton";
import { ITask } from "types";

import "./InlineTask.css";

interface IProps {
  task?: ITask;
  createTask: (task: Partial<ITask>) => void;
  deleteTask: (task: Partial<ITask>) => void;
  updateTask: (task: Partial<ITask>) => void;
}

export default function InlineTask(props: IProps) {
  const { task, createTask, deleteTask, updateTask } = props;

  const [title, setTitle] = React.useState(task?.title || "");
  const [description, setDescription] = React.useState(task?.description || "");
  const [isChecked, setChecked] = React.useState(task?.state === "DONE");

  function formSubmit(e: FormEvent) {
    e.preventDefault();

    if (task) {
      updateTask({ title, description, state: isChecked ? "DONE" : "TODO" });
    } else {
      createTask({ title, description, state: isChecked ? "DONE" : "TODO" });
      // clear form after create
      setTitle("");
      setDescription("");
      setChecked(false);
    }
  }

  function handleCheckbox() {
    setChecked(!isChecked);
    if (task) {
      updateTask({ ...task, state: isChecked ? "TODO" : "DONE" });
    }
  }

  return (
    <form
      className={clsx("inline-task", {
        complete: task?.state === "DONE",
        "no-task": !task,
      })}
      onSubmit={formSubmit}
    >
      {task && (
        <input
          tabIndex={-1}
          className="inline-task-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
      )}
      <input
        className="inline-task-title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder={task ? "Untitled" : "Create new task..."}
      />
      <>
        <textarea
          className="inline-task-description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Notes"
        />
        <button className="btn-cta" type="submit">
          {task ? "Update" : "Create"}
        </button>
      </>
      {task && (
        <div className="btn-inline-delete" onClick={() => deleteTask(task)}>
          <DeleteIcon />
        </div>
      )}
    </form>
  );
}
