import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./Routes";

function App() {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
            <Route path="*" element={<h1>No Page Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
