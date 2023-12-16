import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalTheme } from "@themes/global";
import { theme } from "@themes/theme";

import { Router } from "@routes/Router";

import { PurchaseProvider } from "@contexts/purchaseContext";

export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <PurchaseProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PurchaseProvider>
      <GlobalTheme />
    </ThemeProvider>
  )
}
