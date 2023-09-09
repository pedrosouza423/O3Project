import { Avatar } from './components/Avatar/index';
import { CardContainer, CoverImage, Profile, Footer } from './styles';
// import OzonioImg from "./assets/image 2.svg"
import OzonioImg from "../../assets/image 2.svg"

// Crie uma interface com:  name, job, description, avatarSrc

interface CardProps {
    name: string;
    job: string;
    description: string;
    avatarSrc: string;
}

export function Card({ name, job, description, avatarSrc }: CardProps) {
    return (
        <CardContainer>
            <CoverImage src={OzonioImg} />
            <Profile>
                <Avatar src={avatarSrc} />
                <div>
                    <strong>{name}</strong>
                    <span>{job}</span>

                </div>
            </Profile>
            <Footer>
                <p>{description}</p>
            </Footer>
        </CardContainer>
    );
}
