"use client"

import Image from "next/image";

import Logo from "../../../../public/images/logo.png";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { BsClockFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
    return (
        <header className="header flex flex-col">
            <div className="flex justify-between items-center p-6">
                <div className="logo-wrapper">
                    <Image src={Logo} alt="Logo da Empresa" width={200} />
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-3 items-center border-r border-gray-300 pr-8">
                        <BsFillTelephoneFill className="footer-contatos-icon" color="#fff" size={35} />

                        <div>
                            <h4 className="text-zinc-700 text-lg font-bold mb-1">Telefone</h4>
                            <p className="text-zinc-500 text-sm">(11) 3791-0461</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <a href="#" className="social-icon">
                            <FaInstagram color="#5a5a5a" size={18} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaFacebookF color="#5a5a5a" size={18} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaWhatsapp color="#5a5a5a" size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="info-bar flex justify-between items-center p-4">
                <nav className="flex nav-links">
                    <Link href="/">Home</Link>
                    <Link href="#">A DenteFix</Link>
                    <Link href="#">A Clinica</Link>
                    <Link href="/team">Equipe</Link>
                    <Link href="#">Contato</Link>
                </nav>
            </div>
        </header>
    );
}
