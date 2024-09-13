import React, { useEffect, useState } from "react";

function SearchApi() {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {

               // API FETCH
    async function fetchData() {
      const Apidata = await fetch(`https://fakestoreapi.com/products`);
      console.log(Apidata);
      const data = await Apidata.json();
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);
               //SEARCH WITH FILTER FUNCTIONALITY
  const searchingUser = users
    .filter(({ category }) => {
      return category.indexOf(term) >= 0;
    })
    .map((e) => (

        // CARD

      <div key={e.id}>
        <div
          className="card"
          style={{
            width: "18rem",
            height: "435px   ",
            
          }}
        >
          <img
            src={e.image}
            style={{ width: "100%", height: "210px", objectFit: "contain" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Title : </b> {e.title}
            </h5>
            <h5 className="card-title">Category : {e.category}</h5>
            <h3>Price : {e.price}</h3>
          </div>
        </div>
      </div>
    ));

  return (
    <>
                  {/* SEARCHBAR */}
      <div className="container text-center p-5">
        <h2 className="text-center text-bg-success w-50 m-auto p-2 rounded mb-5 text-dark">
          Searching Api Data
        </h2>
        <input
          type="text"
          className="w-50  text-center"
          placeholder="Enter The Category"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          
        />
        
        {/* CARD CSS */}
        <div className="d-flex flex-wrap justify-content-between gap-4 mt-5">
          {" "}
          {searchingUser}{" "}
        </div>
      </div>


      
    </>
  );
}

export default SearchApi;
