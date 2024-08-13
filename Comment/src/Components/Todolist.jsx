// import React, { useState } from "react";

// function Todolist() {
//   const [inputName, setInputName] = useState("");
//   const [projects, setProjects] = useState([]);

//   function handleInputChange(e) {
//     setInputName(e.target.value);
//   }       

//   function handleAdd() {
//     if (inputName) {
//       setProjects([...projects, inputName]);
//       setInputName("");
//        }
//   }

//   function handleDelete(index) {
//     // const updatedProjects = [projects];
//     const updatedProjects = [...projects];
//     // updatedProjects.splice(0, 1);
//     updatedProjects.splice(index, 1);
//     setProjects(updatedProjects);
//   }

//   return (
//     <>
//       <div className="container">
//         <input
//           type="text"
//           className="form-control w-50 m-auto"
//           placeholder="Enter your project"
//           value={inputName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="button" className="btn btn-secondary m-auto" onClick={handleAdd}>
//         Add
//       </button>
//       <div className="d-flex flex-column">
//         {projects.map((project, index) => (
//           <div key={index} className="d-flex align-items-center mb-2">
//             <h1 className="flex-grow-1">{project}</h1>
//             <button
//               type="button"
//               className="btn btn-secondary  mx-1v"
//               onClick={() => handleDelete(index)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Todolist;
