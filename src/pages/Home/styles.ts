/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const HomeContainer = styled.main`
  /* Adicione estilos adicionais para HomeContainer se necessário */
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;  
    height: auto; 
    width: 100%;
    background-color: ${(props) => props.theme['blue-100']};

    .desktop-image {
        display: none; 
        width: 100%; 
        object-fit: cover;  
    }

    .mobile-image {
        display: block;
        width: 100%; 
        object-fit: cover;  
    }

    @media (min-width: 768px) {  
        flex-direction: row;  
        height: 34rem;  

        .desktop-image {
            display: block; 
            width: auto;  
            object-fit: cover;
            max-width: 50%;  
            transform: none;  
        }

        .mobile-image {
            display: none; 
        }
    }
`;


export const OzonioImgContainer = styled.div`
    img {
        width: 100%; 
        object-fit: cover;  
        transform: rotate(90deg);  
    }

    @media (min-width: 768px) {  
        img {
            width: auto;  
            object-fit: cover;
            max-width: 50%;  
            transform: none;  
        }
    }
`;



export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 34rem;  
  margin: 0 auto;  
  gap: 2rem;
  flex-grow: 1;  
  padding: 2rem;

  h1 {
    text-align: center;
    color: #53798E;
    font-size: 3.5rem;
    font-weight: 300;
  } 

  h3 {
    color: ${(props) => props.theme['pink-600']};
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['black']};
    text-align: center;
    font-weight: bold;
  }

  @media (min-width: 768px) {  
    max-width: 50%;  
  }
`;

export const StyledButton = styled.a`
  display: inline-block; 
  background-color: transparent;
  border: 2px solid ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['pink-600']};
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none; 

  &:hover {
    background-color: ${(props) => props.theme['blue-300']};
    color: white;
  }
`;


export const CardsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 2rem;

  height: 48rem;
  width: 100%;
  background-color: ${(props) => props.theme['blue-500']};
  
`;

export const KnownMoreTitleContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
 h3{
    font-size: 3.5rem;
    color: ${(props) => props.theme['white-300']};
  }

  h4{
    font-size: 2rem;
    color: ${(props) => props.theme['black']};
  }
`;

export const CardsContainer = styled.div`
  /* Estilos para dispositivos móveis */
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Estilos para web (tela maior que 768px) */
  @media (min-width: 768px) {
    overflow-x: hidden;  /* Desabilita o scroll horizontal */
    white-space: normal;  /* Permite quebra de linha */
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;  
  height: auto; 
  width: 100%;
  background-color: ${(props) => props.theme['blue-100']}; // <-- Ajuste aqui

  img {
    width: 100%; 
    object-fit: cover;  
  }

  @media (min-width: 768px) {  
    flex-direction: row;  
    height: 50rem;  
    background-color: ${(props) => props.theme['blue-100']}; // <-- E aqui se quiser manter o mesmo para tela grande
    img {
      width: auto;  
      object-fit: cover;
      max-width: 40%;  
    }
  }
`;


export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 34rem;  
  margin: 0 auto;  
  gap: 2rem;
  flex-grow: 1;  
  background-color: ${(props) => props.theme['blue-100']};
  
  @media (max-width: 768px) {
    padding: 2rem;
    height: 48rem;
    
     
  }

  h1 {
    text-align: center;
    color: #53798E;
    font-size: 3.5rem;
    font-weight: 300;
  } 

`;



export const ProgramContent = styled.div`
  background-color: ${(props) => props.theme['pink-400']};
  padding: 2rem;
  color: ${(props) => props.theme['black']};

  
  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
    }
  }

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
    color: ${(props) => props.theme['pink-600']};
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h4 {
    color: ${(props) => props.theme['black']};
    font-size: 3rem;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  > div {
    display: flex;

    > div {
      flex: 1;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center; 

      ul.basic-info {
        font-size: 1.3rem;
        width: 100%;
        margin-bottom: 2.25rem;
        li {
          color: ${(props) => props.theme['black']};
        }
      }

      ul.special-info {
        font-size: 1.3rem;
        width: 100%;
        margin-bottom: 2.25rem;
        li {
          color: ${(props) => props.theme['blue-300']};
        }
      }
    }

    img {
      max-width: 100%;
      width: 65%;
      object-fit: cover;
      border: 5px solid ${(props) => props.theme['pink-600']}; 
    }
  }
  `;

export const ImgGroupContainer = styled.div`
  background-color: ${(props) => props.theme['blue-600']};
  
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    object-position: center 40%;  
    border-top: 20px solid ${(props) => props.theme['blue-600']};
    border-bottom: 20px solid ${(props) => props.theme['blue-600']};
  }
`;



