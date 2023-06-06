import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Tooltip } from "@mui/material";
import React from "react";
// import "react-circular-progressbar/dist/styles.css";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const progressBarStyles = {
  progress_bar: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "15px",
    borderRadius: "6px",
    textAlign: "center",
    height: "fit-content",
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray",
  },
  title: {
    fontSize: "20px",
  },
  middle: {
    marginTop: "20px",
    marginBottom: "5px",
  },
  progress: {
    height: "250px",
    width: "250px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  progressMain: {
    color: "#536def",
  },
  description: {
    color: "gray",
    margin: "15px 0px",
    fontSize: "20px",
  },
  price: {
    color: "rgb(15, 15, 15)",
    fontSize: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    margin: "20px 0px 15px",
  },
  bottom: {
    padding: "0px 20px 20px",
  },
  bottomText: {
    color: "gray",
  },
  nested: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nestedText: {
    pricee: {
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      fontSize: "17px",
      color: "green",
      "&.decrese": {
        color: "red",
      },
    },
  },
};

function ProgressBar() {
  const data01 = [
    { name: "Users", value: 23 },
    { name: "Transactions", value: 30 },
    { name: "Fleets", value: 15 },
    { name: "Blogs", value: 19 },
    { name: "Balance", value: 20 },
  ];

  return (
    <div style={progressBarStyles.progress_bar}>
      <div style={progressBarStyles.top}>
        <p style={progressBarStyles.title}>Total Revenue</p>
        <MoreVertOutlinedIcon />
      </div>

      <div style={progressBarStyles.middle}>
        <div style={progressBarStyles.progress}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#4665fdce"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p style={progressBarStyles.description}>Total sales made today.</p>
        <p style={progressBarStyles.price}>
          <AttachMoneyOutlinedIcon style={{ fontSize: "32px" }} />
          324
        </p>
      </div>

      <div style={progressBarStyles.bottom}>
        <p style={progressBarStyles.bottomText}>
          Previous transaction processing. Last payments may not be included.
        </p>

        <div style={progressBarStyles.nested}>
          <div style={progressBarStyles.nestedText}>
            <p>Last Week</p>
            <p className="pricee">
              <KeyboardArrowUpOutlinedIcon /> $11.9k
            </p>
          </div>
          <div style={progressBarStyles.nestedText}>
            <p>Last Month</p>
            <p className="pricee decrese">
              <KeyboardArrowUpOutlinedIcon /> $12.4k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
