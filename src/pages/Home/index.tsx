import { CardsContainer, CardsSection, ContentContainer, FormContainer, HomeContainer, ImgGroupContainer, InfoContainer, InfoContent, KnownMoreTitleContainer, ProgramContent, StyledButton } from "./styles"
import OzonioImg from "./assets/image 2.svg"
import OzonioImgMobile from "./assets/OzonioImgMobile.svg"
import NurseApplyingOzone from "./assets/nurse_applying_ozone.svg"
import IconDolar from "./assets/IconDolar.svg"
import IconPeople from "./assets/IconPeople.svg"
import IconVerify from "./assets/IconVerify.svg"
import Skyscraper from "./assets/Skyscraper.jpg"
import ImgGroup from "./assets/ImgGroup.jpg"
import NurseImg from "./assets/NurseImg/NurseImg.svg"
import NurseImg2 from "./assets/NurseImg/NurseImg2.svg"
import NurseImg3 from "./assets/NurseImg/NurseImg3.svg"
import { Card } from "./components/Card"
import { InfoBlockComponent } from "./components/InfoBlock"


export const Home = () => {

  return (
    <HomeContainer>

      <FormContainer >
        <img src={OzonioImg} alt="" className="desktop-image" />
        <img src={OzonioImgMobile} alt="" className="mobile-image" />


        <ContentContainer>
          <h1>Curso de <strong>Ozonio</strong>terapia</h1>
          <h3>Habilitação aplicada à clínica e estética</h3>
          <p>120 horas, aulas teóricas hibridas e práticas presenciais. Com material didático e certificado!</p>
          <StyledButton href="https://forms.gle/MQpofeZoQfEgJjUeA" target="_blank">Matricule - se</StyledButton>
        </ContentContainer>
      </FormContainer>

      <CardsSection>
        <KnownMoreTitleContainer>
          <h3>Saiba mais! </h3>
          <h4>Conheça nossos Professores</h4>
        </KnownMoreTitleContainer>
        <CardsContainer>
          <Card
            name="Dr. Arildo de Souza"
            job="Enfermeiro"
            description="Especialista em Enfermagem Dermatológica e em Estética e Cosmetologia, Habilitação em Ozonioterapia. Membro da Comissão de Regulamentação de Enfermagem em Estética do Cofen, Coordenador da Câmara Técnica de Enfermagem Estética do Coren GO, membro da SOBENDE."
            avatarSrc={NurseImg}
          />
          <Card
            name="Dra. Juliana Costa"
            job="Enfermeira"
            description="Doutoranda em Naturopatia, Pós-graduada em Ozonioterapia e em Técnicas Biofísicas para Desintoxicação e Desparasitação, Especialista em Medicina Integrativa, Estomaterapeuta. Atua na Clínica Integrativa Dr. Hussen Awada."
            avatarSrc={NurseImg2}
          />
          <Card
            name="Dra. Cristina Sardini"
            job="Enfermeira"
            description="Pós-graduada em Ozonioterapia, em Estética e Cosmiatria, em Enfermagem Dermatológica, Enfermagem em Oncologia, Enfermagem do Trabalho, Especialista em Aromaterapia, Mestranda em Educação. Sócia Fundadora e atuante da SOBENDE, Ozonioterapeuta da Clínica Natividade."
            avatarSrc={NurseImg3}
          />
        </CardsContainer>
      </CardsSection>

      <InfoContainer>
        <img src={NurseApplyingOzone} alt="Enfermeira aplicando ozonio" />
        <InfoContent>
          <InfoBlockComponent
            imageSrc={IconDolar}
            title="INVESTIMENTO"
            description={[
              "Plano de 10x R$ 350 sem juros",
              "À vista: desconto especial (no PIX)"
            ]}
          />
          <InfoBlockComponent
            imageSrc={IconPeople}
            inverted
            title="PÚBLICO"
            description={[
              "Conforme LEI Nº 14.648 DE 04 DE AGOSTO DE 2023, a ozonioterapia somente poderá ser realizada por profissional de saúde de nível superior inscrito em seu conselho de fiscalização profissional;"
            ]}
          />
          <InfoBlockComponent
            imageSrc={IconVerify}
            title="CERTIFICADO"
            description={[
              "Com acreditação de 120h, seguindo os critérios dos conselhos de classe.",
            ]}
          />

          <StyledButton href="https://forms.gle/MQpofeZoQfEgJjUeA" target="_blank">Matricule - se</StyledButton>

        </InfoContent>
      </InfoContainer>

      <ProgramContent>
        <div className="header-container">
          <h3>IMERSÃO PRESENCIAL</h3>
          <h4>4 dias de workshops <strong>práticos!</strong></h4>
        </div>
        <div className="content-container">
          <div>
            <ul className="basic-info">
              <li>Datas: <strong>18, 19, 25 e 26 de novembro de 2023</strong></li>
              <li>Horário: <strong>8h - 18h</strong></li>
            </ul>
            <ul className="basic-info">
              <li>Local: Edifício Buena Vista Office Design, Av. T - 4, 619 - St. Bueno Goiânia - GO.</li>
            </ul>
            <ul className="special-info">
              <li><strong>Incluso: Material Didático e Coffee Break.</strong></li>
              <li>Mentoria em grupo - 120 dias PÓS CURSO</li>
            </ul>
            <StyledButton href="https://drive.google.com/file/d/1_VBHYcXQ9BadfsXYrpmYGgBnPdGP4ngp/view?usp=sharing " target="_blank">Acesse o Conteúdo Programático</StyledButton>


          </div>
          <div>
            <img src={Skyscraper} alt="Ozônio" />
          </div>
        </div>
      </ProgramContent>

      <ImgGroupContainer>
        <img src={ImgGroup} alt="Ozônio" />
      </ImgGroupContainer>
    </HomeContainer>
  )
}
