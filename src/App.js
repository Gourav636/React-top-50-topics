import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import ControlledForm from "./controlled-and-uncontrolled-form/controlled-form";
import UnControlledForm from "./controlled-and-uncontrolled-form/uncontrolled-form";
import CounterExample from "./use-reducer-example/CounterExample";
import Counter from "./use-state-example/counter";
import ParentComponent from "./use-imperative-handle-example/use-imperative-handle-hook";
import DynamicImport from "./handle-code-splitting/dynamic-import";
import ReactMemoCaller from "./react-memo-example/reactmemocaller";
import ComponentbasedLoading from "./lazy-loading-example/componenet-based-loading";
import LayoutComponent from "./use-layout-effect-example/layout-component";
import BasicRouting from "./routing-handling-example/basic-routing";
import UserComponent from "./use-effect-clean-up-example/user-api";
import UserDetail from "./use-effect-clean-up-example/user-detail";
import Parent from "./react-portals-example/parent";
import CallbackParent from "./use-callback-hook-example/callback-parent";
import ForwardRefParentComponent from "./forward-ref-example/forward-ref-parent-component";
import AiList from "./ai-practices/ai-list";
import SentimentAnalysis from "./ai-practices/SentimentAnalysis";
import ProductImages from "./ai-practices/ProductImages";
import ChatApp from "./ai-practices/ChatApp";
import Home from "./handle-code-splitting/Home";
import About from "./handle-code-splitting/About";
import LazyHome from "./lazy-loading-example/lazy-home";
import LazyAbout from "./lazy-loading-example/lazy-about";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">React Playground</h1>
      </header>

      {/* App Container */}
      <div className="app-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <h2>Components</h2>
          <ul>
            <li>
              <Link to="/controlled-form">Controlled Form</Link>
            </li>
            <li>
              <Link to="/uncontrolled-form">Uncontrolled Form</Link>
            </li>
            <li>
              <Link to="/use-reducer">useReducer</Link>
            </li>
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-imperative-handle">useImperativeHandle</Link>
            </li>
            <li>
              <Link to="/dynamic-import">Dynamic Import</Link>
            </li>
            <li>
              <Link to="/react-memo">React Memo</Link>
            </li>
            <li>
              <Link to="/lazy-loading">Lazy Loading</Link>
            </li>
            <li>
              <Link to="/use-layout-effect">useLayoutEffect</Link>
            </li>
            <li>
              <Link to="/routing">Routing Examples</Link>
            </li>
            <li>
              <Link to="/use-effect-cleanup">useEffect Cleanup</Link>
            </li>
            <li>
              <Link to="/react-portals">React Portals</Link>
            </li>
            <li>
              <Link to="/use-callback">useCallback</Link>
            </li>
            <li>
              <Link to="/forward-ref">Forward Ref</Link>
            </li>
            <li>
              <Link to="/ai-list">AI Examples</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/controlled-form" element={<ControlledForm />} />
              <Route path="/uncontrolled-form" element={<UnControlledForm />} />
              <Route path="/use-reducer" element={<CounterExample />} />
              <Route path="/use-state" element={<Counter />} />
              <Route
                path="/use-imperative-handle"
                element={<ParentComponent />}
              />
              <Route path="/dynamic-import" element={<DynamicImport />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Route>
              <Route path="/react-memo" element={<ReactMemoCaller />} />
              <Route path="/lazy-loading" element={<ComponentbasedLoading />}>
                <Route index element={<LazyHome />} />
                <Route path="about" element={<LazyAbout />} />
              </Route>
              <Route path="/use-layout-effect" element={<LayoutComponent />} />
              <Route path="/routing" element={<BasicRouting />} />
              <Route path="/use-effect-cleanup" element={<UserComponent />} />
              <Route path="/user/:id" element={<UserDetail />} />
              <Route path="/react-portals" element={<Parent />} />
              <Route path="/use-callback" element={<CallbackParent />} />
              <Route
                path="/forward-ref"
                element={<ForwardRefParentComponent />}
              />
              <Route path="/ai-list" element={<AiList />}>
                <Route
                  path="SentimentAnalysis"
                  element={<SentimentAnalysis />}
                />
                <Route path="ProductImages" element={<ProductImages />} />
                <Route path="ChatApp" element={<ChatApp />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 React Playground | Built with ❤️ using React.js</p>
      </footer>
    </Router>
  );
};

export default App;
