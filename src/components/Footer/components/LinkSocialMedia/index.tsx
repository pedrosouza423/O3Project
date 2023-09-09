import React from 'react'
import { LinkSocialMediaContainer } from './styles';

// Definição da interface para os props
interface LinkToSocialMediaProps {
    imageSrc: string;
    title: string;
    linkURL: string;
    type?: 'text' | 'email';
}

const LinkToSocialMedia: React.FC<LinkToSocialMediaProps> = ({ 
    imageSrc, 
    linkURL, 
    title, 
    type = 'text' 
}) => {
    // Verifica se o tipo é 'email' e ajusta o linkURL
    const adjustedLink = type === 'email' ? `mailto:${linkURL}` : linkURL;

    return (
        <LinkSocialMediaContainer>
            <a href={adjustedLink} target='_blank' rel="noopener noreferrer">
                <img src={imageSrc} alt="" />
                <p>{title}</p>
            </a>
        </LinkSocialMediaContainer>
    )
}

export default LinkToSocialMedia;
