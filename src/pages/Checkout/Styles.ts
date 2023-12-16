import styled, { css } from "styled-components";
import { Row, Column } from "@components/Styled";

// --------------------------------------------------
type TitleProps = {
    $size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl',
    $bold?: boolean,
    $bolder?: boolean,
    $color?: string
};

export const Title = styled.h1<TitleProps>`

    ${props => css`
        font-size: ${props.theme.font.size.body.md};
        color: ${props.theme.color.base_900};

        ${ props.$bolder && css`
            font-weight: 800;
        `}

        ${ props.$bold && css`
            font-weight: 700;
        `}

        ${props.$size && css`
            font-size: ${props.theme.font.size.title[props.$size]};
        `}

        ${props.$color && css`
            color: ${props.$color};
        `}

    `}
`;

// --------------------------------------------------
type TextProps = {
    $size?: 'md' | 'xs' | 'sm' | 'lg',
    $bold?: boolean,
    $color?: string
};

export const Text = styled.p<TextProps>`

    ${props => css`
        font-size: ${props.theme.font.size.body.md};
        color: ${props.theme.color.base_700};

        ${ props.$bold && css`
            font-weight: bold;
        `}

        ${props.$size && css`
            font-size: ${props.theme.font.size.body[props.$size]};
        `}

        ${props.$color && css`
            color: ${props.$color};
        `}

    `}

`;
// --------------------------------------------------
export const Section = styled.section`
    padding: 0 16px 16px 16px;
`;

export const SectionContainer = styled(Row)`
    max-width: 1120px;
    margin: 0 auto;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const SectionPaymentColumn = styled(Column)`
    @media (max-width: 960px) {
        flex: 1;
    }
`;

export const SectionProductsColumn = styled(SectionPaymentColumn)``;

// --------------------------------------------------
export const InputText = styled.input`

    outline: none;
    width: 100%;

    ${props => css`
    
        background-color: ${props.theme.color.base_300};
        border-width: 1px;
        border-color: ${props.theme.color.base_400};
        border-style: solid;
        padding: ${props.theme.spacing.sm};
        border-radius: 4px;
        font-size: ${props.theme.font.size.body.sm};

        &:focus {
            border-color: ${props.theme.color.secondary_dark};
        }
    `}
`;

// --------------------------------------------------
export const ColumnResponsive = styled(Column)`
    @media (max-width: 960px) {
        flex: 1;
    }
`;


export const PayMethodGroupButton = styled(Row)`
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

type PayMethodButtonProps = {
    $variant?: boolean
}

export const PayMethodButton = styled.button<PayMethodButtonProps>`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacing.sm};
        padding: ${theme.spacing.md};
        border-radius: 6px;
        border-width: 1px;
        border-style: solid;
        color: ${theme.color.base_700};
        text-transform: uppercase;
        font-size: ${theme.font.size.button.md};
        cursor: pointer;
    `};

    ${({ theme, $variant}) => $variant
        ? css`
            border-color: ${theme.color.primary};
            background-color: ${theme.color.primary_light};
        `
        : css`
            border-color: ${theme.color.base_400};
            background-color: ${theme.color.base_400};
        `
    }

    @media (max-width: 960px) {
        flex: 1;
    }
`;

// --------------------------------------------------
export const PaymentConfirmButton = styled.button`
    border-radius: 6px;
    border: none;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    ${({ theme }) => css`
        background-color: ${theme.color.secondary};
        color: ${theme.color.white};
        font-size: ${theme.font.size.button.lg};
    `}
`;

// --------------------------------------------------
export const ProductList = styled.div`
    flex: 1 1 300px;
    overflow-y: auto;
`;

// --------------------------------------------------

export const PaymentInfoContainer = styled.div`
    padding: 24px 0;
`;

export const PaymentInfoLine = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    ${({ theme }) => css`
        color: ${theme.color.base_700};
    `}
`;

type PaymentInfoProps = {
    $variant?: boolean
}

export const PaymentInfoTitle = styled.div<PaymentInfoProps>`
    ${({ theme, $variant }) => $variant
        ? css`
            font-size: ${theme.font.size.body.lg};
            font-weight: bold;
        `
        : css `
            font-size: ${theme.font.size.body.sm};
        `
    }
`;

export const PaymentInfoValue = styled.div<PaymentInfoProps>`
    ${({ theme, $variant }) => $variant
        ? css`
            font-size: ${theme.font.size.body.lg};
            font-weighboldt
        `
        : css `
            font-size: ${theme.font.size.body.md};
        `
    }
`;

