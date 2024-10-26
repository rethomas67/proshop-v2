import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  //Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

/*const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product" element={<ProductScreen />} />
    </Route>
  )
);*/
console.log("here");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,

    children: [
      {
        index: true,
        element: <HomeScreen />,
      },

      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
    ],
  },
]);
console.log(router[1]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
