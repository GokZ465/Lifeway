import * as Route from "@/constants/routes";
import logo from "@/images/logo2.png";
import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Twitter, YouTube, LinkedIn, Facebook } from "@mui/icons-material";

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
          {/* <IconButton sx={{ fontSize: "3.5rem", color: "#24292e" }}>
            <GitHub />
          </IconButton> */}
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
