import React from "react";

import useTasks from "hooks/useTasks";
import { applyFilter } from "utils";

import "./App.css";
import InlineTask from "./InlineTask";
import Search from "./Search";
import Stats from "./Stats";

function App() {
  const { taskMap, createTask, updateTask } = useTasks();
  const [filterQuery, setFilterQuery] = React.useState("");

  const tasks = Object.values(taskMap);
  const displayedTasks = applyFilter(tasks, filterQuery).sort(
    (a, b) => b.ctime - a.ctime
  );

  return (
    <div className="page-wrapper">
      <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
      <Stats tasks={displayedTasks} />
      <div className="task-list">
        <InlineTask onSubmit={createTask} ctaText="Create" />
        {displayedTasks.map((task) => (
          <InlineTask
            {...task}
            onSubmit={updateTask}
            key={task.ctime}
            ctaText="Update"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
