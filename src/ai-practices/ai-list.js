import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const AiList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="SentimentAnalysis">Sentiment Analysis</Link>
          </li>
          <li>
            <Link to="ProductImages">Product Images</Link>
          </li>
          <li>
            <Link to="ChatApp">Chat App Claude AI</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading.....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AiList;
