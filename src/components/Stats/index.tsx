import React from "react";

import { ITask } from "types";

import "./Stats.css";

interface IProps {
  tasks: ITask[];
}

export default function Stats(props: IProps) {
  const numPendingTasks = props.tasks.filter((task) => task.state === "DONE")
    .length;
  const numTotalTasks = props.tasks.length;

  return (
    <div className="stat-container">
      <span className="stat-primary">{numPendingTasks}</span>{" "}
      <span className="stat-secondary">&nbsp;/&nbsp;{numTotalTasks}</span>
    </div>
  );
}
