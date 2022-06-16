import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "../Home";
import { Meal } from "../Meal";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal" element={<Meal />} />
      </Routes>
    </div>
  );
};
