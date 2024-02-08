import React from "react";
import "./Web.css";

export default function Website() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark t-0 sticky-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOME
              </a>
              <ul className="dropdown-menu bg-dark ">
                <li>
                  <a className="dropdown-item text-primary " href="#">
                    Main Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Minimal Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Masonry Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Classic Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Boxed Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Simple Home
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </a>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    <b>About Us</b>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    What We Do
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Team Member
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Our Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SHOP
              </a>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    <i className="fa fa-arrow-right" aria-hidden="true">
                      SHOP TYPES
                    </i>
                    <a className="dropdown-item text-primary" href="#">
                      Shop Carousel
                    </a>
                    <a className="dropdown-item text-primary" href="#">
                      Shop Boxed
                    </a>
                    <a className="dropdown-item text-primary" href="#">
                      Single Cetagory
                    </a>
                  </a>
                </li>
                <div className="two">
                  <li>
                    <a className="dropdown-item text-primary" href="#">
                      <i className="fa fa-arrow-right " aria-hidden="true">
                        PRODUCT TYPES
                      </i>
                      <a className="dropdown-item text-primary" href="#">
                        Standard Product
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Variable Product
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Virtual Product
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        New! Product
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        On Sale Product
                      </a>
                    </a>
                  </li>
                </div>
                <div className="three">
                  <li>
                    <a className="dropdown-item text-primary" href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true">
                        FEATURED
                      </i>
                      <a className="dropdown-item text-primary" href="#">
                        User Dashboard
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Order Tracking
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        My Account
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Cart
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Payment Methods
                      </a>
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PORTFOLIO
              </a>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Standard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Masonry Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Masonry Wide
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BLOG
              </a>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Masonry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-primary" href="#">
                    Simple
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="Header">
        <div className="head1">
          <b>DEPOT</b>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="container1">
              <img
                id="img1"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h2-banner-1.jpg"
                alt="Snow"
              />

              <div className="top-left">
                <i
                  id="no1"
                  className="fa fa-arrow-right "
                  aria-hidden="true"
                ></i>
                <i id="no2">DECORATIVE BASKETS</i>
                <br></br>
                <i id="no3">From $40</i>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container1">
              <img
                id="img2"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h2-banner-2.jpg"
                alt="Snow"
              />

              <div className="top-left">
                <i
                  id="no1"
                  className="fa fa-arrow-right "
                  aria-hidden="true"
                ></i>
                <i id="no2">ANTIQUE VASES</i>
                <br></br>
                <i id="no3">Home Decor</i>
              </div>
            </div>
            <div className="container1">
              <img
                id="img3"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h2-banner-3.jpg"
                alt="Snow"
              />

              <div className="top-left">
                <i
                  id="no1"
                  className="fa fa-arrow-right "
                  aria-hidden="true"
                ></i>
                <i id="no2">DECORATIVE BASKETS</i>
                <br></br>
                <i id="no3">From $40</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5 ">
        <div class="row">
          <div class="col">
            <div class="alert" role="alert">
              <h2 id="Services">Welcome</h2>
              <p id="Services1">
                Marketing is not selling. Marketing is building a brand{" "}
                <br></br> in the mind of the prospect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div className="container1">
                    <img
                      src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-550x550.jpg"
                      class="d-block w-100 img-fluid"
                      alt="..."
                    />
                    <div className="top-left">
                      <i id="home">New!</i>
                    </div>
                  </div>
                  <div class="carousel-caption  d-md-block">
                    <h5>BASKET WITH HANDELES</h5>
                    <h5 id="home1">160$</h5>
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="container1">
                    <img
                      src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-550x550.jpg"
                      class="d-block w-100 img-fluid"
                      alt="..."
                    />
                    <div className="top-left">
                      <i id="home">New!</i>
                    </div>
                  </div>
                  <div class="carousel-caption  d-md-block">
                    <h5>BASKET WITH HANDELES</h5>
                    <h5 id="home1">160$</h5>
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="container1">
                    <img
                      src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-1100x730.jpg"
                      class="d-block w-100 img-fluid"
                      alt="..."
                      style={{ width: "550px", height: "600px" }}
                    />

                    <div className="top-left">
                      <i id="home">New!</i>
                    </div>
                  </div>
                  <div class="carousel-caption  d-md-block">
                    <h5>BASKET WITH HANDELES</h5>
                    <h5 id="home1">160$</h5>
                    <button>ADD TO CART</button>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container alert alert-light text-center mt-5" role="alert">
        <h2>WHAT THEY’RE SAYING</h2>
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide CC my-auto"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h4>
                "This company is the best. I am so happy with the result!"
                <br />
              </h4>
              <h6>
                Michael Roe,
                <br /> Vice President
              </h6>
            </div>
            <div class="carousel-item ">
              <h4>
                "One word... WOW!!"
                <br />
                <h6>John Doe, Salesman, Rep Inc</h6>
              </h4>
            </div>
            <div class="carousel-item ">
              <h4>
                "Could I... BE any more happy with this company?"
                <br />
                <h6> Chandler Bing, Actor, FriendsAlot</h6>
              </h4>
            </div>
          </div>
          <button
            id="Slide1"
            class="carousel-control-prev my-auto "
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            id="Slide2"
            class="carousel-control-next my-auto "
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <div className="flex-child1">
              <img
                id="n10"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-1h.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div class="col">
            <div className="flex-child1">
              <img
                id="n10"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-2h.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div class="col">
            <div className="flex-child1">
              <img
                id="n10"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-3h.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div class="col">
            <div className="flex-child1">
              <img
                id="n10"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-4h.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div class="col">
            <div className="flex-child1">
              <img
                id="n10"
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-5h.png"
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container row row-cols-1 row-cols-md-4 g-4 mt-5 mx-auto">
        <div class="col border-0">
          <div class="card border border-0">
            <div class="card-body">
              <h5 class="card-title" id="footer1">
                Customer Service
              </h5>
              <p>Help & Contact Us</p>
              <p>Returns & Refunds</p>
              <p>Online Stores</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div class="col border-0">
          <div class="card border border-0">
            <div class="card-body">
              <h5 class="card-title" id="footer3">
                Company
              </h5>
              <p class="card-text"></p>
              <ul>
                <li>
                  <p id="footer8">What We Do </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer8">Available Services s</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer5">Latest Posts</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer6">FAQ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col border-0">
          <div class="card border border-0">
            <div class="card-body">
              <h5>Social Media</h5>
              <p class="card-text"></p>
              <ul>
                <li>
                  <p id="footer9">SOCIAL MEDIA</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer10">Twitter</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer11">Instagram</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer12">Tumblr</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p id="footer13">Pinteres</p>
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border border-0">
            <div class="card-body">
              <h5 class="card-title" id="footer3">
                PROFILE
              </h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>Order Tracking</p>
              <p>Help & Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
