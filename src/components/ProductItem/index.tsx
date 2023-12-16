import { useTheme } from "styled-components";

import { ProductImage, ProductTitle, ProductButtonRemove, ProductSaleTotal, Separation } from './Styles';
import { Row, Column } from "@components/Styled";
import { InputProductQTDE } from "@components/InputProductQTDE";

import { Trash } from '@phosphor-icons/react';

import { formatCurrency } from '@utils/currency';

type ItemType = {
    id: string,
    name: string,
    imgPath: string,
    price: number,
    qtde: number,
    subTotal: number
}

type ProductItemProps = {
    data: ItemType,
    onRemove: (itemId: string) => void,
    onChangeQTDE: (item: ItemType) => void,
}

export function ProductItem({ data, onRemove, onChangeQTDE }: ProductItemProps) {

    const theme = useTheme();

    function handleMinus() {

        const tempData: ItemType = { 
            ...data 
        };

        if(tempData.qtde > 1) {
            tempData.qtde -= 1;
        }

        onChangeQTDE(tempData);
    }

    function handleAdd() {

        const tempData: ItemType = { 
            ...data 
        };

        tempData.qtde += 1;

        onChangeQTDE(tempData);
    }

    return (
        <>
            <Row
                style={{
                    padding: '8px 4px'
                }}
            >
                <ProductImage src={data.imgPath} alt={`Item ${data.name}`} />
                <Column style={{ gap: '8px' }}>
                    <ProductTitle>{data.name}</ProductTitle>
                    <Row style={{ gap: '8px' }}>
                        <InputProductQTDE 
                            value={data.qtde}
                            onAddClick={handleAdd}
                            onMinusClick={handleMinus}
                        />
                        <ProductButtonRemove
                            onClick={() => onRemove(data.id)}
                        >
                            <Trash size={16} color={theme.color.primary}/>
                            REMOVER
                        </ProductButtonRemove>
                    </Row>
                </Column>
                <ProductSaleTotal>
                    R$ {formatCurrency(data.subTotal).format()}
                </ProductSaleTotal>
            </Row>
            <Separation />
        </>
    )
}