import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithubSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Social.css'
const Social = () => {
    return (
        <div className="socialIcons">
            <a href="https://www.facebook.com/ENG.SAIKOOOOO/" target="_blank" rel="noreferrer" className="p-2 m-2 text-white fs-4">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/M0hamedSayed" target="_blank" rel="noreferrer" className="p-2 m-2 text-white fs-4">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-sayed-13893a228/" target="_blank" rel="noreferrer" className="p-2 m-2 text-white fs-4">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/channel/UCqn_PLsnJlox6nCuPWkK7WQ" target="_blank" rel="noreferrer" className="p-2 m-2 text-white fs-4">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
    );
}
export default Social;