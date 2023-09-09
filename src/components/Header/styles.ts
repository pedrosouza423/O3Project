import { styled } from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['pink-500']};
    height: 9.75rem;
    padding: 1rem;
`;