import styled, { css } from "styled-components";

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