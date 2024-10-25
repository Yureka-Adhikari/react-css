import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
class MyStyling extends React.Component {
  render() {
    // const myheaderstyle = {
    //   color: "darkblue",
    //   backgroundColor: "skyblue",
    //   fontFamily: "Arial",
    //   padding: "5px",
    // };
    // const mystyle = {
    //   color: "lavender",
    //   backgroundColor: "purple",
    //   fontFamily: "Times New Roman",
    //   padding: "10px",
    // };

    return (
      <div>
        {/* <h1 style={myheaderstyle}> HI! </h1>
        <p style={mystyle}> How Are You? </p> */}
        <h1 className="myheaderstyle"> HI! </h1>
        <p className="mystyle"> How Are You? </p>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyStyling />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
