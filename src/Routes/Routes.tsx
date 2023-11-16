import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import HomePage from "../Pages/HomePage/HomePage"
import ProductsContainer from "../Pages/Products/ProductsContainer"
import NewsBlogContainer from "../Pages/News Blog/NewsBlogContainer"

function Routes() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "products",
          element: <ProductsContainer />,
        },
        {
          path: "news-blog",
          element: <NewsBlogContainer/>
        }
    ]);

    return router;
}

export default Routes