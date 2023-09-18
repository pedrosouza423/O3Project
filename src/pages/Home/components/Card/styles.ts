import styled from 'styled-components';

export const CardContainer = styled.aside`
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    min-width: 323px;
    min-height: 450px;
    max-width: 323px;
    
    background-color: ${(props) => props.theme['gray-500']};
`;

export const CoverImage = styled.img`
    width: 100%;
    height: 80px;
    object-fit: none;
    
    object-position: center 1%; 
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4rem;
    gap: 1rem;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        strong{
            font-size: 1.5rem;
            color: ${(props) => props.theme['white-500']};
        }
        span{
            color: ${(props) => props.theme['gray-600']};
            font-size: 1.25rem;
        }

    }
`;

export const Footer = styled.footer`
    border-top: 1px solid ${(props) => props.theme['gray-400']};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    
    p{
        font-size: 1rem;
        color: ${(props) => props.theme['white']};
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;
