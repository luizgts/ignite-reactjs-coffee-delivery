import { useTheme } from 'styled-components';

import { db } from '../../db';

import coffeeBannerPNG from '@assets/coffee-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { 
    IntroImageSection, 
    IntroTextItems, 
    IntroSection, 
    IntroTextSection, 
    ItemIcon, 
    IntroContainer, 
    IntroImage,
    CatalogContainer,
    CatalogList,
    CatalogSection
} from './Styles';

import { CatalogItem } from "@pages/Home/components/CatalogItem";
import { usePurchase } from '@hooks/usePurchase';

type ItemType = {
    id: string,
    name: string,
    imgPath: string,
    price: number,
    qtde: number,
    subTotal: number
}

export function HomePage() {

    const theme = useTheme();
    const { addItemToCartAction } = usePurchase();

    function handleAddItemToCart(item: ItemType) {
        addItemToCartAction(item);
    }

    return (
        <>
            <IntroSection>
                <IntroContainer>
                    <IntroTextSection>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, e a qualquer hora</p>
                        <IntroTextItems>
                            <ul>
                                <li>
                                    <ItemIcon 
                                        color={theme.color.secondary_dark}
                                    >
                                        <ShoppingCart size={16} weight="fill" />
                                    </ItemIcon> Compra simples e segura
                                </li>
                                <li>
                                    <ItemIcon 
                                        color={theme.color.secondary}
                                    >
                                        <Timer size={16} weight="fill" />
                                    </ItemIcon> Entrega rápida e rastreada
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <ItemIcon 
                                        color={theme.color.base_700}
                                    >
                                        <Package size={16} weight="fill" />
                                    </ItemIcon> Embalagem mantém o café intacto
                                </li>
                                <li>
                                    <ItemIcon 
                                        color={theme.color.primary}
                                    >
                                        <Coffee size={16} weight="fill" />
                                    </ItemIcon> O café chega fresquinho até você
                                </li>
                            </ul>
                        </IntroTextItems>
                    </IntroTextSection>
                    <IntroImageSection>
                        <IntroImage src={coffeeBannerPNG} alt="" />
                    </IntroImageSection>
                </IntroContainer>
            </IntroSection>

            <CatalogSection>
                <CatalogContainer>
                    <h2>Nossos cafés</h2>
                    <CatalogList>
                        {db.map((item) => (
                            <CatalogItem 
                                data={item} 
                                key={item.id}
                                onAddToCart={handleAddItemToCart}
                            />
                        ))}
                    </CatalogList>
                </CatalogContainer>
            </CatalogSection>
        </>
    );
}
