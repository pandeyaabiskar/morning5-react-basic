import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { store } from "./store";
import { Provider } from "react-redux";
import ProductProvider from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
