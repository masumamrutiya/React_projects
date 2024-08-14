import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Btemplate() {
  const [items, setItems] = useState([]);

  const [category, setCategory] = useState("All");

  //  USEFFECT

  useEffect(() => {
    async function fetchProducts() {

      //  used to error solve

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error");
      }
    }

    fetchProducts();
    // [EMPTY] array per depend
  }, []);
               // Filter
  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm bg-dark">
        <div className="container">
          <a className="navbar-brand text-danger" href="#">
            <marquee> ShopEase</marquee>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className={`btn btn-outline-light me-2 ${
                    category === "All" && "active"
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-outline-light me-2 ${
                    category === "men's clothing" && "active"
                  }`}
                  onClick={() => setCategory("men's clothing")}
                >
                  Men's Clothing
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-outline-light me-2 ${
                    category === "women's clothing" && "active"
                  }`}
                  onClick={() => setCategory("women's clothing")}
                >
                  Women's Clothing
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-outline-light me-2 ${
                    category === "jewelery" && "active"
                  }`}
                  onClick={() => setCategory("jewelery")}
                >
                  jewelery
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-outline-light me-2 ${
                    category === "electronics" && "active"
                  }`}
                  onClick={() => setCategory("electronics")}
                >
                  electronics
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cards */}
      <div className="container my-5" style={{ paddingTop: "80px" }}>
        <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-lg" >
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.title}
                  style={{ maxHeight: "220px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "25px" }}
                  >
                    <b> {item.category}</b>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      height: "45px",
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <p className="card-text mb-1" style={{ fontSize: "19px" }}>
                      <mark> <i> Rating: </i></mark> {item.rating.rate} / 5
                    </p>
                    <p className="card-text mb-1" style={{ fontSize: "25px" }}>
                      <strong>Stock:</strong> {item.rating.count}
                    </p>
                    <p className="card-text h5">
                     $
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>About Us</h5>
              <p className="small">
                ShopEase is your one-stop destination for the latest fashion
                trends, quality products, and unbeatable prices.
              </p>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Men's Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Women's Clothing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p className="small">
                Email: support@shopease.com <br />
                Phone: +123 456 7890
              </p>

              <div>
                <a href="#" className="text-white me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="bg-white" />
          <p className="small mb-0">
            &copy; 2024 ShopEase. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Btemplate;
