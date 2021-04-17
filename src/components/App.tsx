import React from "react";

import useTasks from "hooks/useTasks";
import { applyFilter } from "utils";

import "./App.css";
import InlineTask from "./InlineTask";
import Search from "./Search";
import Stats from "./Stats";

function App() {
  const { taskMap, ...taskActions } = useTasks();
  const [filterQuery, setFilterQuery] = React.useState("");

  const tasks = Object.values(taskMap);
  const displayedTasks = applyFilter(tasks, filterQuery).sort(
    (a, b) => b.ctime - a.ctime
  );

  return (
    <div className="page-wrapper">
      <Stats tasks={displayedTasks} />
      <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
      <div className="task-list">
        <InlineTask {...taskActions} />
        {displayedTasks.length ? (
          displayedTasks.map((task) => (
            <InlineTask task={task} {...taskActions} key={task.ctime} />
          ))
        ) : (
          <div className="task-list-empty-state">No notes</div>
        )}
      </div>
      <div className="footer">
        <div className="footer-copy">Made by Liam Cain</div>
      </div>
    </div>
  );
}

export default App;
