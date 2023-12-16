import { Layout } from "@layouts/Layout";
import { CheckoutPage } from "@pages/Checkout";
import { HomePage } from "@pages/Home";
import SuccessPage from "@pages/Success";
import { Route, Routes } from "react-router-dom";

export function Router() {
    return (
        <Routes >
            <Route path="/" element={<Layout />}>
                <Route 
                    path="/"
                    element={<HomePage />}
                />
                <Route 
                    path="/checkout"
                    element={<CheckoutPage />}
                />
                <Route 
                    path="/purchage_finish"
                    element={<SuccessPage />}
                />
            </Route>
        </Routes>
    );
}