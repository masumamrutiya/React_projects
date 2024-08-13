import React, { useState } from "react";

let taskIdCounter = 0;

function FinalTodolist() {
  const [currentTask, setCurrentTask] = useState("");

  const [taskList, setTaskList] = useState([]);
  const [taskid, setTaskid] = useState(null);


  
  //   USED TO ADD
  function addTask() {
    setTaskList([...taskList, { id: taskIdCounter++, task: currentTask }]);
    // setTasklist("");
    setCurrentTask("");
  }

  //   USED TO DELET

  function deleteTask(id) {
    setTaskList(taskList.filter((taskItem) => taskItem.id !== id));
  }

  //   USED TO EDIT

  function editTask(id) {
    const taskToEdit = taskList.find((taskItem) => taskItem.id === id);
    setCurrentTask(taskToEdit.task);
    setTaskid(id);
  }
  //    BUTTON UPDATE MATE

  function updateTask() {
    setTaskList(
      taskList.map((taskItem) => {
        if (taskItem.id === taskid) {
          return { ...taskItem, task: currentTask };
        }
        return taskItem;
      })
    );
    setCurrentTask("");
    setTaskid(null);
  }

  const taskItems = taskList.map((taskItem) => (
    <div
      key={taskItem.id}
      className=" w-50 center row justify-content-between m-auto
      my-3 p-3 align-items-center  bg-light border rounded shadow-sm"
    >
      <h3 className="col-8 col-md-9  text-danger">{taskItem.task}</h3>
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
  ));

  return (
    <div className="container  text-white my-4   p-4">
      <h1 className="text-center mb-4 text-black">
   
        <i>
         
          <mark> <u> Todo - List </u></mark>
        </i>
      </h1>
      <div className="row text-center mb-4">
        <div className="col">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex justify-content-center"
          >
            <input
              type="text"
              className="form-control w-50"
              placeholder="Enter a task here"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button
              className="btn btn-danger mx-5"
              onClick={taskid !== null ? updateTask : addTask}
            >
              {taskid !== null ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
      <div className="row p-4 bg-light  rounded-3">{taskItems}</div>
    </div>
  );
}

export default FinalTodolist;
