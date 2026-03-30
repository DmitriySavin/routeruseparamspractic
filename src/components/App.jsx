import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout";
// import Sales from "../pages/Sales";
// import Invoces from "./Invoces";
// import InvoceDetails from "./InvoceDetails";
// import Customers from "../pages/Customers";
// import CustomerDetails from "../pages/CustomersDetails";

const Sales = lazy(() => import("../pages/Sales"));
const Invoces = lazy(() => import("./Invoces"));
const InvoceDetails = lazy(() => import("./InvoceDetails"));
const Customers = lazy(() => import("../pages/Customers"));
const CustomersDetails = lazy(() => import("../pages/CustomersDetails"));

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<div>Home Page Content</div>} /> */}
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="feedback" element={<div>Feedback page content</div>} />
            <Route path="sales" element={<Sales />}>
              <Route index element={<div>Sales page content</div>} />
              <Route
                path="analytics"
                element={<div>Analytics page content</div>}
              />
              <Route
                path="deposits"
                element={<div>Deposits page content</div>}
              />
              <Route path="invoces" element={<Invoces />}>
                <Route index element={<div>Invoces page content</div>} />
                <Route path=":invocesId" element={<InvoceDetails />} />
              </Route>
            </Route>
            <Route path="reports" element={<div>Reports page content</div>} />
            <Route
              path="dashboard"
              element={<div>Dashboard page content</div>}
            />
            <Route path="customers" element={<Customers />} />
            <Route
              path="customers/:customersId"
              element={<CustomersDetails />}
            />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
