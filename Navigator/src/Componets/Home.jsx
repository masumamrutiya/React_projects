import React from 'react'
import Ai from "../Assests/Ai-banner.jpg"
import Gift from "../Assests/rnw_web_slider.jpg"
import Afillition from "../Assests/Afilliation.jpg"



function Home() {
  return (
    <>
    {/* <h1>SLIDER...........</h1> */}
     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Ai} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Gift} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Afillition} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home