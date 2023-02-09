import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// //Old approach
// import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

//Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productID", element: <ProductDetailPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
