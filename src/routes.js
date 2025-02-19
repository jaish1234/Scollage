import React from "react";

const LandingPage = React.lazy(() => import("./views/landingPage"))

const routes = [
    { path: "/", name: "LandingPage", element: LandingPage },
]

export default routes;