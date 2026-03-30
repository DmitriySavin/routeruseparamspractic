import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Box } from "./Box";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="300px 1fr">
      <AppBar />
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
