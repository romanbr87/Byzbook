import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { content } from "../../utils/content/content.js";
const NavRoutes = () => {
  const navRoutes = content.find(
    (contentItem) => contentItem.name === `nav-routes`
  );

  const routes = content?.find((item) => item.name === "nav-routes");
  const convertComponentPathToImport = (componentPath) => {
    return lazy(() => import(`../${componentPath}`));
  };

  return (
    <Suspense fallback={<div className="bg-light text-black">Loading...</div>}>
      <Routes>
        {navRoutes?.routes?.map((route, routeIndex) => {
          const Component = convertComponentPathToImport(route.component);

          return (
            <Route key={routeIndex} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
