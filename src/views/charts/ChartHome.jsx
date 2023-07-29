import React from "react";
import Chart from "./Chart";
import ProgressBar from "./ProgressBar";
import { Link, NavLink, useLocation } from "react-router-dom";

const chartHomeStyles = {
  home: {
    display: "flex",
    justifyContent: "center",
  },
  homeMain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    maxWidth: "1200px",
    width: "100%",
    padding: "20px",
  },
  bgColor: {
    width: "100%",
    height: "160px",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    backgroundColor: "#000E17",
  },
  table: {
    marginTop: "20px",
    padding: "20px",
    boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
  },
  title: {
    padding: "0px 0px 15px",
    color: "gray",
  },
};

function ChartHome() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#2a2a72",
        background: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
      }}
    >
      <h1 style={{ color: "#ffff", fontSize: "9rem", margin: "10px" }}>
        World's First Easiest Way To Earn Money!
      </h1>
      <h4 style={{ color: "#fff", fontSize: "5rem" }}>
        The New Marketing Strategy Was Established On This Website{" "}
      </h4>
      <Link
        className="button"
        to={"/about"}
        style={{
          color: "#000",
          backgroundColor: "rgb(182 224 237)",
          borderRadius: "20px",
          boxShadow: "0 5px 5px rgba(0, 0, 0, .7)",
          width: "200px",
        }}
      >
        More Info
      </Link>
      {/* <div style={chartHomeStyles.homeMain}>
        <div>
          <ProgressBar />
        </div>
        <div>
          <Chart height={450} title="Revenue" />
        </div>
        <div style={chartHomeStyles.table}>
          <div style={chartHomeStyles.title} id="transactions">
            Latest Transactions
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ChartHome;
