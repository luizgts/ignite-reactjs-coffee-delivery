import styled, { css } from "styled-components";

// --------------------------------------------------
type BoxProps = {
    $paddingVariant?: boolean,
    $borderRadiusVariant?: boolean,
    $gradientBorder?: boolean
};

export const Box = styled.div<BoxProps>`
    ${props => css`
        
        padding: 1.25rem;
        background-color: ${props.theme.color.base_200};
        border-radius: 6px 6px 6px 6px;

        ${props.$paddingVariant && css`
            padding: 2.5rem;
        `}

        ${props.$borderRadiusVariant && css`
            border-radius: 6px 44px 6px 44px;
        `}

        ${props.$gradientBorder && css`
            background: linear-gradient(${props.theme.color.base_100}, ${props.theme.color.base_100}) padding-box,
              linear-gradient(45deg, ${props.theme.color.secondary}, ${props.theme.color.primary}) border-box;
            border: 1px solid transparent;
        `}

    `}
`;

// --------------------------------------------------
type RowProps = {
    $gap?: 'sm' | 'md' | 'lg' | 'xs',
    $horizontalContentAlign?: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
    $verticalContentAlign?: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;

    ${props => css`
    
        ${props.$gap && css`
            gap: ${props.theme.spacing[props.$gap]};
        `}

        ${props.$horizontalContentAlign && css`
            justify-content: ${props.$verticalContentAlign};
        `}
            
        ${props.$verticalContentAlign && css`
            align-content: ${props.$horizontalContentAlign};
        `}

    `}
`;

// --------------------------------------------------
type ColumnProps = {
    $gap?: 'sm' | 'md' | 'lg' | 'xs',
    $horizontalContentAlign?: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
    $verticalContentAlign?: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
    $fullWidth?: boolean,
    $col?: number
}

const columnSize = [
    '8.33%',
    '16.66%',
    '25%',
    '33.33%',
    '41.66%',
    '50%',
    '58.33%',
    '66.66%',
    '75%',
    '83.33%',
    '91.66%',
    '100%',
];

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    ${props => css`
    
        ${props.$gap && css`
            gap: ${props.theme.spacing[props.$gap]};
        `}

        ${props.$horizontalContentAlign && css`
            align-content: ${props.$horizontalContentAlign};
        `}

        ${props.$verticalContentAlign && css`
            justify-content: ${props.$verticalContentAlign};
        `}

        ${props.$fullWidth && css`
            flex: 1;
        `}

        ${props.$col && css`
            flex-basis: ${columnSize[props.$col-1]};
        `}

    `}
`;
