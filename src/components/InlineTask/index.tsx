import React, { FormEvent } from "react";

import { ITask } from "types";

import "./InlineTask.css";

interface IProps extends Partial<ITask> {
  ctaText: string;
  onSubmit: (task: Partial<ITask>) => void;
}

export default function InlineTask(props: IProps) {
  const [isExpanded, setExpanded] = React.useState(false);

  const [title, setTitle] = React.useState(props.title || "");
  const [description, setDescription] = React.useState(props.description || "");
  const [isChecked, setChecked] = React.useState(props.state === "DONE");

  function formSubmit(e: FormEvent) {
    e.preventDefault();
    props.onSubmit({ title, description, state: isChecked ? "DONE" : "TODO" });

    // clear form state
    setTitle("");
    setDescription("");
    setChecked(false);
  }

  return (
    <form className="inline-task" onSubmit={formSubmit}>
      <input
        tabIndex={-1}
        className="inline-task-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
      <input
        className="inline-task-title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="New task"
      />
      <>
        <textarea
          className="inline-task-description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Notes"
        />
        <button className="btn-cta" type="submit">
          {props.ctaText}
        </button>
      </>
    </form>
  );
}
