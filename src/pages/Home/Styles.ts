import styled, { css } from "styled-components";

// Intro Section
// ---------------------------------------------------
export const IntroSection = styled.section`
    background: url('intro-background.png') repeat-x;
    background-size: contain;

    ${({theme}) => css`
        padding: 0 ${theme.spacing.md};
    `}

    @media (max-width: 960px) {
        background-size: cover;
    }
`;

export const IntroContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const IntroTextSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    ${({ theme }) => css`
        
        h1 {
            font-family: ${theme.font.family.title};
            font-size: ${theme.font.size.title.xl};
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.base_900};
        }

        p {
            font-size: ${theme.font.size.body.lg};
            color: ${theme.color.base_800};
        }
    `}
`;

export const IntroTextItems = styled.div`
    display: flex;
    margin-top: 4.125rem;
    gap: 2rem;

    ${({ theme }) => css`
        font-size: ${theme.font.size.body.md};

        ul {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
        
        li {
            display: flex;
            align-items: center;
            list-style: none;
            color: ${theme.color.base_700};
        }
    `}

    @media (max-width: 960px) {
        
        flex-direction: column;
        gap: 1.25rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

`;

export const ItemIcon = styled.span<{ color: string }>`

    height: 32px;
    width: 32px;
    padding: 8px;
    margin-right: 12px;
    border-radius: 1000px;

    ${({ theme, color }) => css`
        color: ${theme.color.white};
        background-color: ${color};
    `}
`;

export const IntroImageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IntroImage = styled.img`
    @media (max-width: 600px) {
        & {
            max-width: 250px;
        }
    }
`;

// Catalog Section
// ---------------------------------------------------
export const CatalogSection = styled.section`
    ${({ theme }) => css`
        padding: 0 ${theme.spacing.md};
    `}
`

export const CatalogContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 0;

    ${({ theme }) => css`

        h2 {
            font-family: ${theme.font.family.title};
            font-size: ${theme.font.size.title.lg};
            font-weight: ${theme.font.weight.extra_bolde};
            color: ${theme.color.base_800};
            margin-bottom: 3.375rem;
        }

    `}
`;

export const CatalogList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem 2rem;

    @media (max-width: 1056px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;