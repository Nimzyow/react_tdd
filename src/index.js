import React from "react";
import ReactDOM from "react-dom";
import { CustomerForm } from "./CustomerForm";

const defaultData = {};

ReactDOM.render(
  <CustomerForm {...defaultData} />,
  document.getElementById("root"),
);
