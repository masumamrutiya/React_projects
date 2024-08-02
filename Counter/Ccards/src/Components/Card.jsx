import React from "react";


function Card({ Details }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "10px",
          backgroundColor: "whitesmoke",
          textAlign: "center",
        }}
      >
        <img
          src={Details.image}
          className="card-img-top m-auto"
          alt={Details}
          style={{ width: "180px", height: "180px" ,objectFit:"contain"}}
        />
        <div className="card-body">
          <h5 className="card-title">{Details.title}</h5>
          <p className="card-text">{Details.description}</p>
          <p className="card-text">
            <strong>Price:</strong> ${Details.price}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {Details.rating.rate} (
            {Details.rating.count} reviews)
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
