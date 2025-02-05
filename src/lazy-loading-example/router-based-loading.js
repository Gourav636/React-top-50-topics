import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import MyHeader from "./my-header";

function RouterBasedLoading() {
  return (
    <div>
      <MyHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default RouterBasedLoading;
