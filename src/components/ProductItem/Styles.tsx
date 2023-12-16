import styled, { css } from "styled-components";

export const ProductImage = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 20px;
`;

export const ProductTitle = styled.span`
    ${({ theme }) => css`
        
        font-size: ${theme.font.size.body.md};
        color: ${theme.color.base_800};
    `}
`;

export const ProductButtonRemove = styled.button`
    border-radius: 6px;
    padding: 8px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-content: center;
    gap: 4px;

    ${({ theme }) => css`
        background-color: ${theme.color.base_400};
        color: ${theme.color.base_700};
        font-size: ${theme.font.size.body.sm};
    `}
`;

export const ProductSaleTotal = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;

    ${({ theme }) => css`
        color: ${theme.color.base_700};
    `}
`;

export const Separation = styled.div`
    height: 1px;
    margin: 24px 0;
    ${({ theme }) => css`
        background-color: ${theme.color.base_400};
    `}
`;
