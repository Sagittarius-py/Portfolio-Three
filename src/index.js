import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
      `}</style>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
