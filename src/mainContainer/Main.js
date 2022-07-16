import React from "react";
import Home from "../home/HomeComponent";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function Main(props) {
  return (
    // In future if pages are required
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home theme={props.theme} setTheme={props.setTheme} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
