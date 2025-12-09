import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Import added
import "./App.css";
import App from "./App.jsx";

// Pages Routes
import Home from "./Pages/Home.jsx";
import Upload from "./Pages/Upload.jsx";
import Working from "./Pages/Working.jsx";
import Result from "./Pages/Result.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/upload", element: <Upload /> },
  { path: "/working", element: <Working /> },
  { path: "/result", element: <Result /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />   {/* ✅ Wrap with RouterProvider */}
  </StrictMode>
);
