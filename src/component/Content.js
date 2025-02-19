import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

function Content() {
    return (
        <div>
            {/* <Suspense
        fallback={
          <div className="flex justify-center h-screen bg-[#1a2c38]">
            <Loader />
          </div>
        }
      > */}
            <Routes>
                {routes?.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    );
                })}
            </Routes>
            {/* </Suspense> */}
        </div>
    );
}

export default Content;
