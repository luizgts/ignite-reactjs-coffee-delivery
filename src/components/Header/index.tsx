import { Link } from 'react-router-dom';
import { Actions, HeaderContainer, HeaderLogo, HeaderSection, Location, CartButton, Counter } from './Styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logoSVG from '@assets/logo.svg';
import { usePurchase } from '@hooks/usePurchase';

export function Header() {

    const { purchase } = usePurchase();

    return (
        <HeaderSection>
            <HeaderContainer>
                <Link to="/">
                    <HeaderLogo src={logoSVG} alt="" />
                </Link>
                <Actions>
                    <Location>
                        <MapPin size={20} weight="fill" />São Paulo, SP
                    </Location>
                    <CartButton to="/checkout">
                        <ShoppingCart 
                            size={18} 
                            weight="fill"
                        />
                        { purchase.items.length > 0 && <Counter>{purchase.items.length}</Counter> }
                    </CartButton>
                </Actions>
            </HeaderContainer>
        </HeaderSection>
    );
}