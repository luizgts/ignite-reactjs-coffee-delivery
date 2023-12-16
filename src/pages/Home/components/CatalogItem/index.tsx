import { useState } from "react";

import { ProductType } from "@@types/ProductType"

import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, ItemContainer, ItemFooter, ItemPrice, Tag, TagContainer } from './Styles';
import { InputProductQTDE } from "@components/InputProductQTDE";
import { formatCurrency } from "@utils/currency";

type ItemType = {
    id: string,
    name: string,
    imgPath: string,
    price: number,
    qtde: number,
    subTotal: number
}

type CatalogItemProps = {
    data: ProductType,
    onAddToCart: (item: ItemType) => void
}

export function CatalogItem(props: CatalogItemProps) {

    const [qtde, setQtde] = useState(1);

    function handleMinus() {
        if (qtde <= 1 ) return;
        setQtde(prevState => prevState - 1);
    }

    function handleAdd() {
        setQtde(prevState => prevState + 1);
    }

    function handleAddToCart() {
        const item: ItemType = {
            id: props.data.id,
            name: props.data.name,
            imgPath: props.data.imgPath,
            price: props.data.price,
            qtde: qtde,
            subTotal: 0
        };

        props.onAddToCart(item);
    }
    
    return (
        <ItemContainer>
            <img src={props.data.imgPath} alt="" />
            <TagContainer>
                {props.data.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagContainer>
            <h3>{props.data.name}</h3>
            <p>{props.data.description}</p>
            <ItemFooter>
                <ItemPrice>
                    <span>R$</span><span>{formatCurrency(props.data.price).format()}</span>
                </ItemPrice>
                <InputProductQTDE 
                    value={qtde}
                    onAddClick={handleAdd}
                    onMinusClick={handleMinus}
                />
                <CartButton
                    onClick={handleAddToCart}
                >
                    <ShoppingCart 
                        size={22} 
                        weight="fill"
                    />
                </CartButton>
            </ItemFooter>
        </ItemContainer>
    );
}

