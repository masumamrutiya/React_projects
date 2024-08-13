
// import React, { useState } from "react";

// let nextId = 0;
// function Todolist2() {
//   const [MainInput, SetMainInput] = useState("");
//   const [Addbtn, SetAddbtn] = useState([]);

//   function Addbtnhandler(e) {
//     SetAddbtn([...Addbtn, { id: nextId++, task: MainInput }]);
//     SetMainInput("");
//   }


//   function DeletHandler(index) {
//     Addbtn.splice(index,1)
//     SetAddbtn([...Addbtn])
//     console.log(Addbtn,"delet");
    
//     // setItem(Addbtn.filter((e)=> e.id !==id))
//     //  console.log("Delete");
     
//   }

//   function EditHandler() {
    
//   }




//   const todo = Addbtn.map((item,index) => (
//     <div key={item.id} className="d-flex my-2">
//       <h1>{item.task}</h1>
//       <button
//         type="button"
//         className="btn btn-secondary mx-5"
//          onClick={EditHandler}

//       >
//         Edit
//       </button>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={()=>DeletHandler(index)}
//       >
//         Delet
//       </button>
//     </div>
//   ));

//   return (
//     <>
//       <h1 className="text-center">
//         <mark> TO-DOLIST</mark>
//       </h1>
//       <div className="container d-flex">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control w-100 m-auto"
//             value={MainInput}
//             onChange={(e) => SetMainInput(e.target.value)}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-dark m-auto"
//           onClick={Addbtnhandler}
//         >
//           ADD
//         </button>
//       </div>
//       <div className="create d-flex flex-column">{todo}</div>
//     </>
//   );
// }

// export default Todolist2;








































































// import React, { useState } from "react";

// let nextId = 0;
// function Todolist2() {
//   const [MainInput, SetMainInput] = useState("");
//   const [Addbtn, SetAddbtn] = useState([]);
//   const [editIndex, setEditIndex] = useState(null); // Track the index being edited

//   function Addbtnhandler() {
//     if (editIndex != null) {
//       // Update the task if in edit mode
//       const updatedTasks = Addbtn.map((item, index) =>
//         index === editIndex ? { ...item, task: MainInput } : item
//       );
//       SetAddbtn(updatedTasks);
//       setEditIndex(null); // Exit edit mode after updating
//     } else {
//       // Add a new task if not in edit mode
//       SetAddbtn([...Addbtn, { id: nextId++, task: MainInput }]);
//     }
//     SetMainInput("");
//   }

//   function DeletHandler(index) {
//     Addbtn.splice(index, 1);
//     SetAddbtn([...Addbtn]);
//     console.log(Addbtn, "delete");
//   }

//   function EditHandler(index) {
//     SetMainInput(Addbtn[index].task); // Set the input field to the current task
//     setEditIndex(index); // Set the current index to edit mode
//   }

//   const todo = Addbtn.map((item, index) => (
//     <div key={item.id} className="d-flex my-2">
//       <h1>{item.task}</h1>
//       <button
//         type="button"
//         className="btn btn-secondary mx-5"
//         onClick={() => EditHandler(index)} // Pass the index to edit handler
//       >
//         Edit
//       </button>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={() => DeletHandler(index)}
//       >
//         Delete
//       </button>
//     </div>
//   ));

//   return (
//     <>
//       <h1 className="text-center">
//         <mark>TO-DOLIST</mark>
//       </h1>
//       <div className="container d-flex">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control w-100 m-auto"
//             value={MainInput}
//             onChange={(e) => SetMainInput(e.target.value)}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-dark m-auto"
//           onClick={Addbtnhandler}
//         >
//           {editIndex !== null ? "UPDATE" : "ADD"} {/* Change button label */}
//         </button>
//       </div>
//       <div className="create d-flex flex-column">{todo}</div>
//     </>
//   );
// }

// export default Todolist2;
