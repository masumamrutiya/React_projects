import React, { useEffect, useState } from "react";
import Counter from "./Counter"; //  Counter

function List() {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [taskIdToEdit, setTaskIdToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
    setTaskList(storedTasks);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
      setTaskList(storedTasks);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function deleteTask(id) {
    const updatedTasks = taskList.filter((taskItem) => taskItem.id !== id);
    setTaskList(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  function editTask(id) {
    const taskToEdit = taskList.find((taskItem) => taskItem.id === id);
    setCurrentTask(taskToEdit.task);
    setTaskIdToEdit(id);
  }

  function updateTask() {
    const updatedTasks = taskList.map((taskItem) => {
      if (taskItem.id === taskIdToEdit) {
        return { ...taskItem, task: currentTask };
      }
      return taskItem;
    });
    setTaskList(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
    setCurrentTask("");
    setTaskIdToEdit(null);
  }

  return (
    <div className="container text-white  my-4 p-4">
      <h1 className="text-center mb-4 text-black">
        <i>
          <mark>
            <u>Task List</u>
          </mark>
        </i>
      </h1>

      {taskIdToEdit !== null && (
        <div className="row text-center mb-4">
          <div className="col">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex justify-content-center"
            >
              <input
                type="text"
                className="form-control w-50"
                placeholder="Edit your task here"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
              />
              <button className="btn btn-success mx-5" onClick={updateTask}>
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/*  Counter */}
      <Counter taskLength={taskList.length} />

      <div className="row p-4 bg-dark rounded-3">
        {taskList.length > 0 ? (
          taskList.map((taskItem) => (
            <div
              key={taskItem.id}
              className="w-50 center row justify-content-between m-auto my-3 p-3 align-items-center bg-light border rounded shadow-sm"
            >
              <h3 className="col-8 col-md-9 text-danger">{taskItem.task}</h3>
              <div className="col-4 col-md-3 text-end">
                <button
                  className="btn btn-sm btn-outline-secondary mx-1"
                  onClick={() => editTask(taskItem.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger mx-1"
                  onClick={() => deleteTask(taskItem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No tasks available.</p>
        )}
      </div>
    </div>
  );
}

export default List;

