import React, { Suspense } from "react";
import {
  Outlet,
} from "react-router-dom";
import Header from "./Header";

const DynamicImport = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DynamicImport;
