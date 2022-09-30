import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context";
import "./index.css";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
