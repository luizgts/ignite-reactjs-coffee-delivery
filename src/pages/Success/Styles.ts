import styled, { css } from "styled-components";

export const Section = styled.section`
    padding: 0 16px 16px 16px;
`;

export const SectionContainer = styled.section`
    max-width: 1120px;
    margin: 0 auto;
`;

export const SectionResponsiveContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 102px;

    @media (min-width: 960px) {
        flex-direction: row;
    }  

`;

type IconContainer = {
    color: string
}
export const IconContainer = styled.div<IconContainer>`

    ${({color}) => color && css`
            background-color: ${color};
        `
    }

    border-radius: 1000px;
    width: 32px;
    height: 32px;
    padding: 8px;

`;

export const Title = styled.h1`
    ${({theme}) => css`
        font-size: ${theme.font.size.title.lg};
        color: ${theme.color.secondary_dark};
        font-family: ${theme.font.family.title};
    `}
`;

export const SubTitle = styled.p`
    ${({theme}) => css`
        font-size: ${theme.font.size.body.lg};
        color: ${theme.color.base_800};
    `}
`;

export const SuccessImage = styled.img``;