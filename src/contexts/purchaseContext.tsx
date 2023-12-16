import { ReactElement, createContext, useState } from "react";

export type PurchaseStateType = {
    subTotal: number,
    taxaEntrega: number,
    total: number,
    payMethod: string,
    address: {
        cep: string,
        rua: string,
        numero: string,
        complemento: string,
        bairro: string,
        cidade: string,
        uf: string
    },
    items: ItemType[]
}

type ItemType = {
    id: string,
    name: string,
    imgPath: string,
    price: number,
    qtde: number,
    subTotal: number
}

type PurchaseContextType = {
    purchase: PurchaseStateType,
    addItemToCartAction: (item: ItemType) => void,
    removeItemFromCartAction: (itemId: string) => void,
    updateItemQTDEInCartAction: (item: ItemType) => void,
    updateAddress: (addressKey: string, addressValue: string) => void,
    updatePaymentMethod: (payMethod: string) => void
}

export const PurchaseContext = createContext<PurchaseContextType>({} as PurchaseContextType);

type PurchaseProviderProps = {
    children: ReactElement
}

const initialState: PurchaseStateType = {
    subTotal: 0,
    taxaEntrega: 350,
    total: 0,
    payMethod: 'credito',
    address: {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: ''
    },
    items: []
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {

    const [purchase, setPurchase] = useState(initialState)

    function addItemToCartAction(item: ItemType) {

        // Verificar se o item já existe
        // Se existir, atualizar
        // Se não existir, adicionar

        let tempState: PurchaseStateType;

        const itemExists = purchase.items.filter(i => i.id === item.id).length > 0;

        if (itemExists) {
            const updatedItems = purchase.items.map(i => {
                if (i.id === item.id) {
                    return {
                        ...item,
                        subTotal: item.qtde * item.price
                    } as ItemType;
                }

                return i;
            });

            tempState = {
                ...purchase,
                items : updatedItems
            };

        } else {

            tempState = {
                ...purchase,
                items: [...purchase.items, {
                    ...item,
                    subTotal: item.qtde * item.price
                }]
            }            
        }

        // Update SubTotal
        tempState.subTotal = tempState
            .items.reduce((prev, curr) => {
                return prev + curr.subTotal
            }, 0);
        
        // Update Total
        tempState.total = tempState
        .items.reduce((prev, curr) => {
            return prev + curr.subTotal
        }, 0) + tempState.taxaEntrega;

        setPurchase(tempState);
    }

    function removeItemFromCartAction(itemId: string) {
        const tempState: PurchaseStateType = {
            ...purchase,
            items: purchase.items.filter(i => i.id !== itemId)
        }

        // Update SubTotal
        tempState.subTotal = tempState
            .items.reduce((prev, curr) => {
                return prev + curr.subTotal
            }, 0);
        
        // Update Total + Taxa
        tempState.total = tempState
        .items.reduce((prev, curr) => {
            return prev + curr.subTotal
        }, 0);

        tempState.total = tempState.total ? tempState.total + tempState.taxaEntrega : 0;

        setPurchase(tempState);
    }

    function updateItemQTDEInCartAction(item: ItemType) {

        const updatedItems = purchase.items.map(i => {
            if (i.id === item.id) {
                return {
                    ...item,
                    subTotal: item.qtde * item.price
                } as ItemType;
            }

            return i;
        });

        const tempState: PurchaseStateType = {
            ...purchase,
            items: updatedItems
        }

        // Update SubTotal
        tempState.subTotal = tempState
            .items.reduce((prev, curr) => {
                return prev + curr.subTotal
            }, 0);
        
        // Update Total
        tempState.total = tempState
        .items.reduce((prev, curr) => {
            return prev + curr.subTotal
        }, 0) + tempState.taxaEntrega;

        setPurchase(tempState);
    }

    function updateAddress(addressKey: string, addressValue: string) {
        setPurchase({
            ...purchase,
            address: {
                ...purchase.address, [addressKey]: addressValue
            }
        });
    }

    function updatePaymentMethod(payMethod: string) {
        setPurchase({
            ...purchase,
            payMethod
        });
    }

    return (
        <PurchaseContext.Provider value={{
            purchase,
            addItemToCartAction,
            removeItemFromCartAction,
            updateItemQTDEInCartAction,
            updateAddress,
            updatePaymentMethod
        }}>
            {children}
        </PurchaseContext.Provider>
    );

}


