import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";
import Events from "./pages/Events";

const router = createBrowserRouter([
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
    {
        exact: true,
        path: "/about",
        element: <About />,
    },
    {
        exact: true,
        path: "/team",
        element: <MeetTheTeam />,
    },
    {
        exact: true,
        path: "/events",
        element: <Events />,
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <RouterProvider router={router} />
    </>
);
