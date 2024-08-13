// import React, { useState } from "react";

// export default function TodoList3() {
//   const [name, setName] = useState("");
//   const [record, setRecord] = useState([]);

//   const handleBtn = () => {
//     setRecord([...record,name]);
//     setName('')
//   };
//   const handleDelete = (index)=>{
//     let newRecord=record.filter((e,i)=>{
//         return i!= index
//     })
//     setRecord(newRecord)
// }
// const handleEdit=(i)=>{
//     let singleRecord = record[i];
//     singleRecord=123
//     console.log(singleRecord);

// }
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="name"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <button onClick={handleBtn}>submit</button>

//       {record?
//       record.map((e,i)=>{
//       return <div key={i}>
//         <p>{e}</p>
//         <button onClick={()=>handleDelete(i)} >delete</button>
//         <button onClick={()=>handleEdit(i)}>edit</button>
//       </div>
//       }):<p>loading</p>}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList3() {
//   const [name, setName] = useState("");
//   const [record, setRecord] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleBtn = () => {
//     if (isEditing) {
//       const updatedRecords = record.map((item, index) =>
//         index === editIndex ? name : item
//       );
//       setRecord(updatedRecords);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setRecord([...record, name]);
//     }
//     setName("");
//   };

//   const handleDelete = (index) => {
//     let newRecord = record.filter((e, i) => i !== index);
//     setRecord(newRecord);
//   };

//   const handleEdit = (index) => {
//     setName(record[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={handleBtn}>{isEditing ? "Update" : "Submit"}</button>

//       {record.length > 0 ? (
//         record.map((e, i) => (
//           <div key={i}>
//             <p>{e}</p>
//             <button onClick={() => handleDelete(i)}>delete</button>
//             <button onClick={() => handleEdit(i)}>edit</button>
//           </div>
//         ))
//       ) : (
//         <p>No records found</p>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList3() {
//   const [name, setName] = useState("");
//   const [record, setRecord] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleBtn = () => {
//     if (editIndex !== null) {
//       const updatedRecords = record.map((item, index) =>
//         index === editIndex ? name : item
//       );
//       setRecord(updatedRecords);
//       setEditIndex(null);
//     } else {
//       setRecord([...record, name]);
//     }
//     setName("");
//   };

//   const handleDelete = (index) => {
//     const newRecord = record.filter((_, i) => i !== index);
//     setRecord(newRecord);
//   };

//   const handleEdit = (index) => {
//     setName(record[index]);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={handleBtn}>{editIndex !== null ? "Update" : "Submit"}</button>

//       {record.length > 0 ? (
//         record.map((e, i) => (
//           <div key={i}>
//             <p>{e}</p>
//             <button onClick={() => handleDelete(i)}>delete</button>
//             <button onClick={() => handleEdit(i)}>edit</button>
//           </div>
//         ))
//       ) : (
//         <p>No records found</p>
//       )}
//     </div>
//   );
// }

