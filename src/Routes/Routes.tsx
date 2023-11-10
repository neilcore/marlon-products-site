import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import HomePage from "../Components/HomePage/HomePage"
import ProductsContainer from "../Components/Products/ProductsContainer"

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
    ]);

    return router;
}

export default Routes