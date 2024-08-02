// import React, { useState } from "react";

// function Formpractice() {
//   const [email, setemail] = useState("");
//   const [lastName, setlastname] = useState("");
//   const [FirstName,setfirstname] =useState("");

//   function Emailhandler(e) {
//     setemail(e.target.value);
//   }
//   function LastNamehandle(e) {
//     setlastname(e.target.value);
//   }
//   function FirstNamehandle(e) {
//     setfirstname(e.target.value);
//   }

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={(e) => e.preventDefault()}>
//         <div className="mb-3">
//             <label className="form-label">First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={FirstName}
//               onChange={FirstNamehandle}
//             />
//           </div>

//         <div className="mb-3">
//             <label className="form-label">Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={lastName}
//               onChange={LastNamehandle}
//             />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               class="form-control"
//               aria-describedby="emailHelp"
//               value={email}
//               onChange={Emailhandler}
//             />
//           </div>
         

//           <button type="submit" class="btn btn-primary">
//             Submit
//           </button>
//         </form>

//         <div className="text-bg-dark border border-4 border-primary-subtle my-5 py-4 fs-3">
//           User Name is : {FirstName} {lastName} {email} 
//         </div>
//       </div>
//     </>
//   );
// }

// export default Formpractice;
