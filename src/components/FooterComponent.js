import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address className="address">
              Jagatpura
              <br />
              Jaipur, Rajasthan
              <br />
              INDIA
              <br />
              <i className="fa fa-phone fa-lg"></i>: +912 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +912 8765 4265
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">delicious@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="d-flex flex-wrap">
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook m-1"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin m-1"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter m-1"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-social-icon m-1"
                href="mailto:vijaypop12@gmail.com"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Ranvijay Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
