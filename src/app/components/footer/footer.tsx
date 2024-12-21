import Image from "next/image";

import Logo from "../../../../public/images/logo.png";

import { AiOutlineRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <div id="footer" className="footer pt-16">
            <div className="flex justify-evenly mb-14">
                <div className="flex flex-col">
                    <Image src={Logo} alt="Logo da Empresa" width={200} />

                    <p className="w-72 my-4 text-sm text-zinc-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores iusto provident.</p>

                    <div className="flex items-center gap-3">
                        <a href="#" className="footer-social-icon">
                            <FaInstagram color="#fff" />
                        </a>

                        <a href="#" className="footer-social-icon">
                            <FaFacebookF color="#fff" />
                        </a>

                        <a href="#" className="footer-social-icon">
                            <FaWhatsapp color="#fff" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2 text-zinc-800">Links Úteis</h3>

                    <ul className="flex flex-col gap-2">
                        <li className="flex">
                            <a href="#" className="text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#2b98ec" />
                                <p className="text-zinc-700">DenteFix</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#2b98ec" />
                                <p className="text-zinc-700">A Clínica</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#2b98ec" />
                                <p className="text-zinc-700">Equipe</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#2b98ec" />
                                <p className="text-zinc-700">Contato</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex flex-col">
                                <span className="text-md text-zinc-700">Segunda á Sexta:</span>
                                <span className="text-sm text-zinc-600">08h às 18h</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span className="text-md text-zinc-700">Sábado:</span>
                                <span className="text-sm text-zinc-600">09h às 17h</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Entre em contato</h3>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 items-center">
                            <FaMapMarkedAlt className="footer-contatos-icon" color="#fff" size={36} />

                            <div>
                                <h4 className="font-semibold text-zinc-600">Endereço</h4>
                                <p className="text-sm text-zinc-600">R. Outeiro da Cruz, 363 - Jd. São Paulo, São Paulo - SP</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <BsFillTelephoneFill className="footer-contatos-icon" color="#fff" size={35} />

                            <div>
                                <h4 className="font-semibold text-zinc-600">Telefone</h4>
                                <p className="text-sm text-zinc-600">(11) 3791-0461</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <MdEmail className="footer-contatos-icon" color="#fff" size={36} />

                            <div>
                                <h4 className="font-semibold text-zinc-600">Email</h4>
                                <p className="text-sm text-zinc-600">dentefix@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-group">
                <p className="text-sm flex items-center justify-center text-zinc-200">Copyright &copy; 2024 <span className="font-semibold">Andresa Alves Ribeiro</span>. All Rights Reserved</p>
            </div>
        </div>
    );
}