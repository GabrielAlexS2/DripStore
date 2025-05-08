import React from "react";
import tenis from "../assests/logo/tenis.svg";
import bolinha from "../assests/logo/bolinha.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carrossel = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"#f5f5f5"}}>
      <div className="container p-3" style={{width:"60%"}}>
        <img src={bolinha} alt=""  style={{position:"absolute", left:"70%", top:"170px"}}/>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a
                href="#"
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Ver Ofertas
              </a>
              </div>
              <div>
              <img
                src={tenis}
                className="d-block w-100"
                alt="Tenis"
                style={{ objectFit: "contain", maxHeight: "400px" }}
              /></div>
            </div>
            <div className="carousel-item">
            <div className=" container">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a
                href="#"
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Ver Ofertas
              </a>
              </div>
              <img
                src={tenis}
                className="d-block w-100"
                alt="Tenis"
                style={{ objectFit: "contain", maxHeight: "400px" }}
              />
            </div>
            <div className="carousel-item">
            <div className="">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a
                href="#"
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Ver Ofertas
              </a>
              </div>
              <img
                src={tenis}
                className="d-block w-100"
                alt="Tenis"
                style={{ objectFit: "contain", maxHeight: "400px" }}
              />
            </div>
            <div className="carousel-item">
            <div className="">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a
                href="#"
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Ver Ofertas
              </a>
              </div>
              <img
                src={tenis}
                className="d-block w-100"
                alt="Tenis"
                style={{ objectFit: "contain", maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
