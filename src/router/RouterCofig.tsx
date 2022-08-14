import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageRouter } from "./allRouter";

export default function RouterCofig() {
  return (
    <Routes>
      {PageRouter.map((router, index) => (
        <React.Fragment key={index}>
          <Route
            key={index}
            path={router.path}
            element={<router.component />}
          />
          {router.children &&
            router.children.map((item, index) => (
              <Route
                key={index}
                path={`/component${item.path}`}
                element={<item.component />}
              />
            ))}
        </React.Fragment>
      ))}
    </Routes>
  );
}
