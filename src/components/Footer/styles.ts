import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme['blue-100']};
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: row;
  gap: 8rem; 

  @media (max-width: 900px) { 
    flex-direction: column-reverse;
    height: 50rem;

    .CompanyLogo {
        width: 23rem;
    }
  }
`;


export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
