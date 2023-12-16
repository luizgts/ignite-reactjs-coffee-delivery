import styled, { css } from "styled-components";

export const ItemContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => css`
        background-color: ${theme.color.base_200};
        border-radius: 6px 36px 6px 36px;

        h3 {
            font-family: ${theme.font.family.title};
            font-size: ${theme.font.size.title.sm};
            color: ${theme.color.base_800};
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: ${theme.font.size.body.sm};
            color: ${theme.color.base_600};
            text-align: center;
        }
    `}


    img {
        max-width: 120px;
        height: auto;
        margin-top: -44px;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    gap:0.25rem;
    margin: 0.75rem 0 1rem 0;
`;

export const Tag = styled.span`

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.25rem;

    ${({ theme }) => css`
        background-color: ${theme.color.secondary_light};
        color: ${theme.color.secondary_dark};
        font-size: ${theme.font.size.tag.sm};
    `}
`;

export const CartButton = styled.button`

    ${({ theme }) => css`
        height: 2.375rem;
        width: 2.375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.color.primary_dark};
        border: none;
        border-radius: ${theme.border.radius.sm};
        transition: all 0.25s; 
        cursor: pointer;

        svg {
            color: ${theme.color.base_200};
            transition: all 0.25s;
        }

        &:hover {
            background-color: ${theme.color.primary};
        }

    `};

`;

export const ItemPrice = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.25rem;

    ${({theme}) => css`
        color: ${theme.color.base_700};

        span:last-child {
            font-family: ${theme.font.family.title};
            font-size: ${theme.font.size.title.md};
        }

    `}
`;

export const ItemFooter = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
`;



export const InputContainer = styled.div`

    display: flex;
    align-items: center;
    border-radius: 6px;
    height: 2.375rem;
    padding: 0 0.5rem;
    margin-right: 0.5rem;

    ${({ theme }) => css`
        background-color: ${theme.color.base_400};

        input {
            width: 1.25rem;
            border: none;
            outline: none;
            background: none;
            text-align: center;
            font-size: ${theme.font.size.body.md}
        }

        button {
            cursor: pointer;
            font-size: 1rem;
            color: ${theme.color.primary};
            transition: all 0.25s;
            border: none;
            background: none;
        }

        button:hover {
            color: ${theme.color.primary_dark};
        }
    `}

`;