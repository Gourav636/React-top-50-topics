import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const SentimentAnalysis = React.lazy(() => import("./SentimentAnalysis.js"));

const AiList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/AiList/SentimentAnalysis">Sentiment Analysis</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="SentimentAnalysis" element={<SentimentAnalysis />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AiList;
