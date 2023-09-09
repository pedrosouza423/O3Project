import { InfoBlock } from "./styles";

interface InfoBlockProps {
    imageSrc: string;
    title: string;
    description: string[]; 
    inverted?: boolean;
}


export const InfoBlockComponent: React.FC<InfoBlockProps> = ({ imageSrc, title, description, inverted }) => {
    return (
        <InfoBlock className={inverted ? 'inverted' : ''}>
            <div>
                <h3>{title}</h3>
                <img src={imageSrc} alt={title} />
            </div>
            <div className="description-container">
                {description.map((desc, index) => (
                    <p key={index}>• {desc}</p>
                ))}
            </div>
        </InfoBlock>
    );
}

