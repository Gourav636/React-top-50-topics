import React from "react";

const ComponentA = React.lazy(() => import("./ComponentA"));
const ComponentB = React.lazy(() => import("./ComponentB"));
const ComponentC = React.lazy(() => import("./ComponentC"));

function MySuspenseList() {
  return (
    <div>
      {/* <SuspenseList revealOrder="forwards">
        <Suspense fallback={<div>Loading Component A...</div>}>
          <ComponentA />
        </Suspense>
        <Suspense fallback={<div>Loading Component B...</div>}>
          <ComponentB />
        </Suspense>
        <Suspense fallback={<div>Loading Component C...</div>}>
          <ComponentC />
        </Suspense>
      </SuspenseList> */}
    </div>
  );
}

export default MySuspenseList;
