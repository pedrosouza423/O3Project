import { styled } from "styled-components";

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 300px;  


  &.inverted {
    div {
      flex-direction: row-reverse;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    justify-content: center;
    @media (max-width: 768px) {
      gap: 2rem;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;  // <-- Faça com que tome a largura total da div pai
  }

  h3 {
    font-size: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme["pink-600"]};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    color: ${(props) => props.theme["black"]};

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;


