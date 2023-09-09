import { styled } from "styled-components";

export const LinkSocialMediaContainer = styled.div`
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 1rem;
        img{
            width: 5rem;
        }
        p{
            color: ${(props) => props.theme['pink-600']};
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

`;