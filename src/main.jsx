import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import isPropValid from "@emotion/is-prop-valid";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyleSheetManager>
    </BrowserRouter>
  </StrictMode>,
);