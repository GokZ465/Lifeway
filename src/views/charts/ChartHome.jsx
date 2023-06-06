import React from "react";
import Chart from "./Chart";
import ProgressBar from "./ProgressBar";

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
    <div style={chartHomeStyles.home}>
      <div style={chartHomeStyles.homeMain}>
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
      </div>
    </div>
  );
}

export default ChartHome;
