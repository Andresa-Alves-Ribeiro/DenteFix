import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import FacebookLogo from "../../../public/images/facebook-logo.svg";
import InstagramLogo from "../../../public/images/instagram-logo.svg";
import WhatsappLogo from "../../../public/images/whatsapp-logo.svg";

export default function Header() {
    return (
        <header className="header flex flex-col">

            {/* Top Info Bar */}
            <div className="info-bar flex justify-between items-center px-4">
                <div className="flex items-center">
                    <a href="#" className="social-icon">
                        <Image src={InstagramLogo} alt="Instagram" width={20} height={20} />
                    </a>
                    <a href="#" className="social-icon">
                        <Image src={FacebookLogo} alt="Facebook" width={20} height={20} />
                    </a>
                    <a href="#" className="social-icon">
                        <Image src={WhatsappLogo} alt="Whatsapp" width={20} height={20} />
                    </a>
                </div>
                <div>Horário: Seg - Sex, 08h às 18h</div>
            </div>

            <div className="flex justify-between items-center p-4">
                <div className="logo-wrapper">
                    <span className="logo-divider"></span>
                    <Image src={Logo} alt="Logo da Empresa" width={150} height={30} />
                    <span className="logo-divider"></span>
                </div>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <a href="#">Início</a>
                    <a href="#">A DenteFix</a>
                    <a href="#">A Clinica</a>
                    <a href="#">Equipe</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    );
}
