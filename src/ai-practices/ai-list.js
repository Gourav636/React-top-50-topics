import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const SentimentAnalysis = React.lazy(() => import("./SentimentAnalysis.js"));
const ProductImages = React.lazy(() => import("./ProductImages.js"));
const ChatApp = React.lazy(() => import("./ChatApp.js"));

const AiList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/AiList/SentimentAnalysis">Sentiment Analysis</Link>
          </li>
          <li>
            <Link to="/AiList/ProductImages">Product Images</Link>
          </li>
          <li>
            <Link to="/AiList/ChatApp">Chat App Claude AI</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="SentimentAnalysis" element={<SentimentAnalysis />} />
          <Route path="ProductImages" element={<ProductImages />} />
          <Route path="ChatApp" element={<ChatApp />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
};

export default AiList;
