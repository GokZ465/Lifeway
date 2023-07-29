import * as Route from "@/constants/routes";
import logo from "@/images/logo2.png";
import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "/node_modules/@mui/material"; // Absolute path to MUI IconButton

// Add the new icons here with an absolute path
import {
  Twitter,
  YouTube,
  LinkedIn,
  Facebook,
  Pinterest,
  Reddit,
  Instagram,
} from "/node_modules/@mui/icons-material";
import { FaBlogger } from "react-icons/fa"; // Import the Blogger icon from react-icons

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
          {/* Add new icons here */}
          <IconButton sx={{ fontSize: "3.5rem", color: "#1DA1F2" }}>
            <Twitter style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          <IconButton sx={{ fontSize: "3.5rem", color: "#FF0000" }}>
            <YouTube style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          <IconButton sx={{ fontSize: "3.5rem", color: "#0A66C2" }}>
            <LinkedIn style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          <IconButton sx={{ fontSize: "3.5rem", color: "#4267B2" }}>
            <Facebook style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          {/* Pinterest */}
          <IconButton sx={{ fontSize: "3.5rem", color: "#E60023" }}>
            <Pinterest style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          {/* Reddit */}
          <IconButton sx={{ fontSize: "3.5rem", color: "#FF4500" }}>
            <Reddit style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          {/* Blogger */}
          <IconButton sx={{ fontSize: "3.5rem", color: "#FF5721" }}>
            <FaBlogger style={{ height: "5.5rem", width: "2.8rem" }} />
          </IconButton>
          {/* Instagram */}
          <IconButton sx={{ fontSize: "3.5rem", color: "#C13584" }}>
            <Instagram style={{ height: "5.5rem", width: "2.8rem" }} />
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
