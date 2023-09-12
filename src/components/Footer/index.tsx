import { FooterContainer, SocialMediaContainer } from './styles'
import IconInstagram from "./assets/IconInstagram.svg"
import IconEmail from "./assets/IconEmail.svg"
import IconPhone from "./assets/IconPhone.svg"
import CompanyLogo from "./assets/CompanyLogo.svg"
import LinkToSocialMedia from './components/LinkSocialMedia'

// Comentário deve ser apagado

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <img className='CompanyLogo' src={CompanyLogo} alt="" />
            </div>


            <SocialMediaContainer>
                <SocialMediaContainer>
                    <LinkToSocialMedia imageSrc={IconInstagram} linkURL="https://www.instagram.com/o3curso/" title="@O3curso" />
                    <LinkToSocialMedia imageSrc={IconEmail} linkURL="o3curso@gmail.com" title="o3curso@gmail.com" type="email" />
                    <LinkToSocialMedia imageSrc={IconPhone} linkURL="https://wa.link/93zvd4" title="(011) 93049-0758" />
                </SocialMediaContainer>
            </SocialMediaContainer>
        </FooterContainer>
    )
}

export default Footer