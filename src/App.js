import React, { Suspense } from "react";
import ControlledForm from "./controlled-and-uncontrolled-form/controlled-form";
import UnControlledForm from "./controlled-and-uncontrolled-form/uncontrolled-form";
import CounterExample from "./use-reducer-example/CounterExample";
import MySuspenseList from "./suspense-list-example/MySuspenseList";
import Counter from "./use-state-example/counter";
import ParentComponent from "./use-imperative-handle-example/use-imperative-handle-hook";
import DynamicImport from "./handle-code-splitting/dynamic-import";
import ReactMemoCaller from "./react-memo-example/reactmemocaller";
import ComponentbasedLoading from "./lazy-loading-example/componenet-based-loading";
import RouterBasedLoading from "./lazy-loading-example/router-based-loading";
import LayoutComponent from "./use-layout-effect-example/layout-component";
import BasicRouting from "./routing-handling-example/basic-routing";
import LinkingRouting from "./routing-handling-example/linking-routing";
import NestedRouting from "./routing-handling-example/nested-routing";
import DynamicRouting from "./routing-handling-example/dynamic-routing";
import UserComponent from "./use-effect-clean-up-example/user-api";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserDetail from "./use-effect-clean-up-example/user-detail";
import SentimentAnalysis from "./ai-practices/SentimentAnalysis.js";
import Parent from "./react-portals-example/parent.js";
import CallbackParent from "./use-callback-hook-example/callback-parent.js";
import CallbackChild from "./use-callback-hook-example/callback-child.js";
import ForwardRefParentComponent from "./forward-ref-example/forward-ref-parent-component.js";
import AiList from "./ai-practices/ai-list.js";

const App = () => {
  return (
    <Router>
      <h1>Welcome to React!</h1>
      <div>
        <fieldset style={{ width: "600px" }}>
          <legend>Controlled Form</legend>
          <ControlledForm></ControlledForm>
        </fieldset>
        <br></br>
        <fieldset style={{ width: "600px" }}>
          <legend>Uncontrolled Form</legend>
          <UnControlledForm></UnControlledForm>
        </fieldset>
        <br></br>
        <fieldset style={{ width: "600px" }}>
          <legend>useReducer</legend>
          <CounterExample></CounterExample>
        </fieldset>
        <br></br>
        <fieldset style={{ width: "600px" }}>
          <legend>Suspense List</legend>
          {/* <MySuspenseList /> */}
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>Use State</legend>
          <Counter />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>useImperativeHandle</legend>
          <ParentComponent />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>dynamic-import</legend>
          <DynamicImport />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>React-Memo</legend>
          <ReactMemoCaller />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>Lazy-loading-and-router-based-component</legend>
          <ComponentbasedLoading />
          <br></br>
          <RouterBasedLoading />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>use-Layout-Effect-example</legend>
          <LayoutComponent />
        </fieldset>
        <fieldset style={{ width: "600px" }}>
          <legend>routing-handle-example</legend>
          <h3>Basic Routing</h3>
          <BasicRouting />
          <hr />
          <br />
          <h3>Linking Routing</h3>
          <LinkingRouting />
          <hr />
          <br />
          <h3>Nested Routing</h3>
          <NestedRouting />
          <hr />
          <br />
          <h3>Dynamic Routing</h3>
          <DynamicRouting />
        </fieldset>
        <fieldset
          style={{ width: "100%", padding: "20px", overflow: "hidden" }}
        >
          <legend>use-Effect-clean-up-example</legend>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<UserComponent />} />
                <Route path="/user/:id" element={<UserDetail />} />
              </Routes>
            </Suspense>
          </div>
        </fieldset>
        <fieldset>
          <legend>react-portal-example</legend>
          <div id="modal-root"></div>
          <br></br>
          <Parent />
        </fieldset>
        <fieldset>
          <legend>use-callback-example</legend>
          <CallbackParent />
          <br />
          <br />
          <CallbackChild />
        </fieldset>
        <fieldset>
          <legend>forward-ref-example</legend>
          <ForwardRefParentComponent />
        </fieldset>
        <fieldset>
          <legend>AI Example</legend>
          <Link to="/AiList">Go to AI List</Link>
          <Routes>
            <Route path="/AiList/*" element={<AiList />} />
          </Routes>
        </fieldset>
      </div>
    </Router>
  );
};

export default App;
