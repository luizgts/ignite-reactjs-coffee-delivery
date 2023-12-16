import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderSection = styled.header`
    ${({theme}) => css`
        position: fixed;
        width: 100%;
        background-color: ${theme.color.base_100};
        z-index: 100;
        padding: 0 16px;
    `}
`;

export const HeaderContainer = styled.section`
    ${({ theme }) => css`
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${theme.spacing.lg} 0;    
    `}
    
`;

export const HeaderLogo = styled.img`
    height: 2.5rem;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const Location = styled.div`
    height: 2.375rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    ${({ theme }) => css`
        background-color: ${theme.color.primary_light};
        color: ${theme.color.primary_dark};
        font-size: ${theme.font.size.body.sm};
        padding: 0.625rem 0.5rem;
        border-radius: ${theme.border.radius.sm};

        svg {
            color: ${theme.color.primary};
        }
    `};
`;


export const CartButton = styled(Link)`
    position: relative;

    ${({ theme }) => css`
        height: 2.375rem;
        width: 2.375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.color.secondary_light};
        border-radius: ${theme.border.radius.sm};
        transition: all 0.25s; 

        svg {
            color: ${theme.color.secondary_dark};
            transition: all 0.25s;
        }

        &:hover {
            background-color: ${theme.color.secondary};
        }

        &:hover svg {
            color: ${theme.color.white};
        }

    `};

`;

export const Counter = styled.div`
    position: absolute;
    min-width: 1.3rem;
    height: 1.3rem;
    padding: 0.125rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    top: -8px;
    right: -8px;
    
    ${({theme}) => css`
        font-size: ${theme.font.size.body.sm};
        font-weight: bold;
        color: ${theme.color.white};
        background-color: ${theme.color.secondary_dark};
    `}
`;