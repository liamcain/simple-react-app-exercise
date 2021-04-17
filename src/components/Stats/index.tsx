import React from "react";

import { ITask } from "../../types";

interface IProps {
  tasks: ITask[];
}

export default function Stats(props: IProps) {
  const numPendingTasks = props.tasks.filter((task) => task.state === "DONE")
    .length;
  const numTotalTasks = props.tasks.length;

  return (
    <div className="stat-container">
      {numPendingTasks} / {numTotalTasks}
    </div>
  );
}
