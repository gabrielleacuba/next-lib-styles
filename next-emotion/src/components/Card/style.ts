import styled from "@emotion/styled";

export const CardStyle = styled.div`
    height: 320px;
    width: 256px;

    background-color: var(--gl-color-shades-gray-90);
    border-radius: var(--gl-border-radius-xs);
    background-size: cover;
    background-position: center;

    transform: scale(0.9);

    transition: all ease-in-out 300ms; 

    &:hover{
        transform: scale(1);
    }

`
