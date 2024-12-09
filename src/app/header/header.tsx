import Image from "next/image";
import Logo from "../../../public/images/logo.png";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Header() {
    return (
        <header className="header flex flex-col">

            {/* Top Info Bar */}
            <div className="info-bar flex justify-between items-center px-4">
                <div className="flex items-center">
                    <a href="#" className="social-icon">
                        <FaInstagram color="#fff" size={18} />
                    </a>
                    <a href="#" className="social-icon">
                        <FaFacebookF color="#fff" size={18} />
                    </a>
                    <a href="#" className="social-icon">
                        <FaWhatsapp color="#fff" size={18} />
                    </a>
                </div>
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
