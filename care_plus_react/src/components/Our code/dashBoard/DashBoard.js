import React from "react";

const DashBoard = (props) => {
  console.log("dashboard");
  return <div>DashBoard {props.adminData.name}</div>;
};

export default DashBoard;
