import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout";
import { Sales } from "../pages/Sales";
import { Invoces } from "./Invoces";
import { InvoceDetails } from "./InvoceDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page Content</div>} />
          <Route path="feedback" element={<div>Feedback page content</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales page content</div>} />
            <Route path="analytics" element={<div>Analytics page content</div>} />
            <Route path="deposits" element={<div>Deposits page content</div>} />
            <Route path="invoces" element={<Invoces />}>
              <Route index element={<div>Invoces page content</div>} />
              <Route path=":invocesId" element={<InvoceDetails />} />
            </Route>
          </Route>
          <Route path="reports" element={<div>Reports page content</div>} />
          <Route path="dashboard" element={<div>Dashboard page content</div>} />
          <Route path="custumers" element={<div>Custumers page content</div>} />
        </Route>
      </Routes>

      <GlobalStyle />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
