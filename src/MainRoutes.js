import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/aboutus",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 4,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 7,
    },
  ];
  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
        {PRIVATE_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
