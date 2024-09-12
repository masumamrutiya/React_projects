import React, { useState, useEffect } from "react";
import Counter from "./Counter"; 

let taskIdCounter = 0;

function Todo() {
  const [currentTask, setCurrentTask] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("Tasks")) || []
  );
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleTask = () => {
    if (taskId !== null) {
      setTaskList(
        taskList.map((taskItem) =>
          taskItem.id === taskId ? { ...taskItem, task: currentTask } : taskItem
        )
      );
      setTaskId(null);
    } else {
      setTaskList([...taskList, { id: taskIdCounter++, task: currentTask }]);
    }
    setCurrentTask("");
  };

  function editTask(id) {
    const taskToEdit = taskList.find((taskItem) => taskItem.id === id);
    setCurrentTask(taskToEdit.task);
    setTaskId(id);
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((taskItem) => taskItem.id !== id));
  }

  return (
    <div className="container my-5 p-5 bg-light rounded shadow">
      <h1 className="text-center mb-4 display-4">
        <i>
          <mark className="bg-warning text-dark p-2 rounded">
            <u>Todo App</u>
          </mark>
        </i>
      </h1>

      <div className="row text-center mb-4">
        <div className="col">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex justify-content-center align-items-center gap-3"
          >
            <input
              type="text"
              className="form-control w-50 shadow-sm"
              placeholder="Enter a task here"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button
              className={`btn ${taskId !== null ? "btn-success" : "btn-primary"} shadow-sm px-4`}
              onClick={handleTask}
            >
              {taskId !== null ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>

      {/* Count */}
      <Counter taskLength={taskList.length} />

      <div className="row p-4 bg-dark rounded-3 mt-5">
        {taskList.length > 0 ? (
          taskList.map((taskItem, index) => (
            <div
              key={taskItem.id}
              className="w-75 mx-auto d-flex justify-content-between align-items-center bg-light p-3 my-3 border rounded shadow-sm"
            >
              <h4 className="col-8 col-md-9 mb-0 text-dark">
                {index + 1}. {taskItem.task}
              </h4>
              <div className="col-4 col-md-3 text-end">
                <button
                  className="btn btn-sm btn-outline-secondary mx-2 shadow-sm"
                  onClick={() => editTask(taskItem.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger shadow-sm"
                  onClick={() => deleteTask(taskItem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default Todo;
