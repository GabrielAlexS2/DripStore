import React from "react";
import tenis from "../assests/logo/tenis.svg";
import bolinha from "../assests/logo/bolinha.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carrossel = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container p-3" style={{ width: "80%" }}>
        <img
          src={bolinha}
          alt=""
          style={{ position: "absolute", left: "80%", top: "100px" }}
        />
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className=" d-flex">
                <div className=" container d-md-none d-lg-block d-none">
                  <h1 className=" fw-bold">
                    Queima de <br></br>estoque Nike🔥
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
              </div>
            </div>
            <div className="carousel-item">
              <div className=" d-flex">
                <div className=" container d-md-none d-lg-block d-none">
                  <h1 className=" fw-bold">
                    Queima de <br></br>estoque Nike🔥
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
              </div>
            </div>
            <div className="carousel-item">
              <div className=" d-flex">
                <div className=" container d-md-none d-lg-block d-none">
                  <h1 className=" fw-bold">
                    Queima de <br></br>estoque Nike🔥
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
              </div>
            </div>
            <div className="carousel-item">
              <div className=" d-flex">
                <div className=" container d-md-none d-lg-block d-none">
                  <h1 className=" fw-bold">
                    Queima de <br></br>estoque Nike🔥
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#"><button className="butaoo">
                    <div>
                      <span>
                        <p>Ver-Ofertas</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Interesse?</p>
                      </span>
                    </div>
                  </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
