import React from "react";

function About() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-6">
            <iframe
              width="630"
              height="514"
              src="https://www.youtube.com/embed/_DYPZYuimGk"
              title="Journey of Red and White | Founder | Story | IT hub | IT institutes in Surat | Inspire Story"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{borderRadius:"17px"}}
            ></iframe>
          </div>
          <div className="col-6">
            <h1 className="text-center pt-5">WHO ARE YOU</h1>
            <h5 className="pt-3" style={{color: "#60697b"}}>
              Red & White Multimedia Education, NSDC partner and ISO 9001:2015
              certified firm under the part of Red & White Education Private
              Limited providing accredited courses since 2008 and have
              successfully trained over 37,500+ students. Along with an
              experienced faculty we focus on developing essential skills to
              help students and to achieve their highest potential, embodying
              our slogan: "Shaping Skills for Scaling Higher."
            </h5>
            <h6 className="pt-3" style={{color: "#60697b"}}>Our coaching and training programs in IT and Design are led by industry maestro Educators. After the completion of our training, students are well-prepared to dive in prominent IT companies and gain experience working on live projects for offshore clients.</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
