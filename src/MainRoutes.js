import React from "react";
import { Route, Routes } from "react-router-dom";
import Better from "./components/AboutUs/Better";
import History from "./components/AboutUs/History";
import Purpose from "./components/AboutUs/Purpose";
import Relax from "./components/AboutUs/Relax";
import PayCard from "./components/PayCard/PayCard";
import AboutUs from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
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
      element: <AboutUs />,
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
    {

      link: "/history",
      element: <History />,
      id: 8,
    },
    {
      link: "/better",
      element: <Better />,
      id: 9,
    },
    {
      link: "/purpose",
      element: <Purpose />,
      id: 10,
    },
    {
      link: "/relax",
      element: <Relax />,
      id: 11,
    },
    {
      link: "/paycard",
      element: <PayCard />,
      id: 12,
    },

      link: "/cart",
      element: <CartPage />,
      id: 13,
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
