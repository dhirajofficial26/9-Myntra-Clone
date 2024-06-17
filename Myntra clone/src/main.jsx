import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./bag.css";
import App from "./routes/App.jsx";
import { Bag } from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import MyntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: postloader, //by loader we teeling before load listofpost exctue this postloader it take promise
      },
      {
        path: "/Bagitems",
        element: <Bag />,
        // action: CreatePostData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
