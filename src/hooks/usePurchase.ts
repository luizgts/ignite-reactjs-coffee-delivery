import { useContext } from "react";
import { PurchaseContext } from '@contexts/purchaseContext';

export function usePurchase() {
    const context = useContext(PurchaseContext);
    return context;
}