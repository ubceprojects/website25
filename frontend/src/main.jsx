import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MotionConfig } from "motion/react";
import "./index.css";
import Home from "./pages/Home";

// The landing page is imported eagerly so it ships in the entry bundle and mounts
// without an extra network round trip. The other routes stay lazy (code-split), so
// a visitor only downloads their JS once they actually navigate there.
const About = lazy(() => import("./pages/About"));
const MeetTheTeam = lazy(() => import("./pages/MeetTheTeam"));
const Events = lazy(() => import("./pages/Events"));

const withSuspense = (element) => (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>{element}</Suspense>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: withSuspense(<About />),
    },
    {
        path: "/team",
        element: withSuspense(<MeetTheTeam />),
    },
    {
        path: "/events",
        element: withSuspense(<Events />),
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// reducedMotion="user" makes every motion component skip transform/layout
// animations (but keep cheap opacity fades) for visitors who set
// "prefers-reduced-motion: reduce" at the OS level.
root.render(
    <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
    </MotionConfig>
);
