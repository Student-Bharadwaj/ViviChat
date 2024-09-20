import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Landing() {
  return (
    <div className="customContainer">
      <nav class="navbar ">
        <div class="container-fluid ">
          <span
            class="navbar-brand text-white mb-0 fs-1"
            style={{ marginLeft: "1.5rem" }}
          >
            ViviChat
          </span>
          <div className="navList">
            <span class="navbar-brand text-white mb-0 fs-4">join as Guest</span>

            <button className=" navbar-brand btn btn-warning ">
                <Link className="text-white  fs-5" to="/" style={{textDecoration:"none"}}>Login</Link>
            </button>
          </div>
        </div>
      </nav>
      <div className="row" style={{marginTop:"4rem"}}>
        <div className="col text-center mt-5">
            <h1 className="landingHeading"> <span style={{color:"orange"}}>Connect</span> with your <br /> Loved Ones</h1>
            <p className="fs-5 " style={{color:"gray"}}>cover a distance by ViviChat</p>
            <button className="btn btn-warning ">
                <Link className="text-white fs-5" to="/auth" style={{textDecoration:"none"}}>Get Started</Link>
            </button>
        </div>
        <div className="col text-left " >
            <img src="/mobile.png" alt="notFound" style={{marginLeft:"3rem",width:"63%"}} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
