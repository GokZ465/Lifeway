import * as Route from "@/constants/routes";
import logo from "@/images/logo2.png";
import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { GitHub, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          {/* <span>
            Developed by
            {' '}
            <a href="https://github.com/jgudo">JULIUS GUEVARRA</a>
          </span> */}
        </strong>
      </div>
      <div className="footer-col-2">
        {/* logo removed */}
        <img
          style={{
            scale: "2.5",
          }}
          alt="Footer logo"
          className="footer-logo"
          src={logo}
        />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
        <div className="social-media-icons">
          <IconButton>
            <GitHub />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </div>
      </div>
      <div className="footer-col-3">
        <strong>
          {/* <span>
            Fork this project &nbsp;
            <a href="https://github.com/jgudo/ecommerce-react">HERE</a>
          </span> */}
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
