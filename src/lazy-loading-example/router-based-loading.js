import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHeader from "./my-header";

const Home = React.lazy(() => import("./home"));
const About = React.lazy(() => import("./about"));

function RouterBasedLoading() {
  return (
    <div>
      <MyHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterBasedLoading;
