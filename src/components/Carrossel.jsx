import React from "react";
import tenis from "../assests/logo/tenis.svg";
import bolinha from "../assests/logo/bolinha.svg";
import camisa from "../assests/logo/camisa.svg";
import fone from "../assests/logo/fone.svg";
import sapato from "../assests/logo/sapato.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carrossel = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container p-3" style={{ width: "80%" }}>
        <img
          src={bolinha}
          alt=""
          style={{ position: "relative", left: "80%", top: "40px" }}
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
                  <a href="#">
                    <button className="butaoo">
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
                    </button>
                  </a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100 sapatin"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">
                  <button className="butaoo">
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
                  </button>
                </a>
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
                  <a href="#">
                    <button className="butaoo">
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
                    </button>
                  </a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100 sapatin"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">
                  <button className="butaoo">
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
                  </button>
                </a>
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
                  <a href="#">
                    <button className="butaoo">
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
                    </button>
                  </a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100 sapatin"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">
                  <button className="butaoo">
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
                  </button>
                </a>
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
                  <a href="#">
                    <button className="butaoo">
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
                    </button>
                  </a>
                </div>
                <img
                  src={tenis}
                  className="d-block w-100 sapatin"
                  alt="Tenis"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
              <div className=" container d-md-block d-lg-none">
                <h1 className=" fw-bold">
                  Queima de <br></br>estoque Nike🔥
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#">
                  <button className="butaoo">
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
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="cartao" className=" flex-sm-column flex-md-row flex-column">
          <div class="parent">
            <div class="card">
              <img src={camisa} alt="" />
              <div class="content-box">
                <span class="card-title">Camisa Supreme</span>
                <p class="card-content">Camisa super confortavel</p>
                <span class="see-more">Add Cart</span>
              </div>
              <div class="date-box">
                <span class="month">Maio</span>
                <span class="date">12</span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <img src={fone} alt="" />
              <div class="content-box">
                <span class="card-title">Fone Gamer</span>
                <p class="card-content">
                  Melhor qualidade de audio
                </p>
                <span class="see-more">Add Cart</span>
              </div>
              <div class="date-box">
                <span class="month">Maio</span>
                <span class="date">12</span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <img src={sapato} alt="" />
              <div class="content-box">
                <span class="card-title">Jordan</span>
                <p class="card-content">
                  Super confortavel
                </p>
                <span class="see-more">Add Cart</span>
              </div>
              <div class="date-box">
                <span class="month">Maio</span>
                <span class="date">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
