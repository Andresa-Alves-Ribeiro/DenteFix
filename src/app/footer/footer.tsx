import Image from "next/image";

import Logo from "../../../public/images/logo.png";

import { AiOutlineRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <div className="footer pt-20 pb-1">
            <div className="flex justify-evenly">
                <div className="flex flex-col">
                    <Image src={Logo} alt="Logo da Empresa" width={200} />

                    <p className="w-72 my-4 text-zinc-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores iusto provident.</p>

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
                    <h3 className="font-bold text-xl mb-4">Links Úteis</h3>

                    <ul className="flex flex-col gap-2">
                        <li className="flex">
                            <a href="#" className="text-zinc-700 text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#030c61" />
                                <p>DenteFix</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-zinc-700 text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#030c61" />
                                <p>A Clínica</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-zinc-700 text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#030c61" />
                                <p>Equipe</p>
                            </a>
                        </li>

                        <li className="flex">
                            <a href="#" className="text-zinc-700 text-sm flex items-center gap-2">
                                <AiOutlineRight size={14} color="#030c61" />
                                <p>Contato</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-4">Horário de Atendimento</h3>

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <AiOutlineRight size={14} color="#030c61" />

                            <div className="flex flex-col">
                                <span className="text-zinc-600 text-md">Segunda - Sexta:</span>
                                <span className="text-zinc-600 text-sm">08h às 18h</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <AiOutlineRight size={14} color="#030c61" />

                            <div className="flex flex-col">
                                <span className="text-zinc-600 text-md">Sábado:</span>
                                <span className="text-zinc-600 text-sm">09h às 17h</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-4">Entre em contato</h3>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 items-center">
                            <BsFillTelephoneFill className="footer-contatos-icon" color="#fff" size={35} />

                            <div>
                                <h4>Endereço</h4>
                                <p className="text-zinc-600 text-sm">R. Outeiro da Cruz, 363 - Jd. São Paulo, São Paulo - SP</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaMapMarkedAlt className="footer-contatos-icon" color="#fff" size={36} />

                            <div>
                                <h4>Telefone</h4>
                                <p className="text-zinc-600 text-sm">(11) 3791-0461</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <MdEmail className="footer-contatos-icon" color="#fff" size={36} />

                            <div>
                                <h4>Email</h4>
                                <p className="text-zinc-600 text-sm">dentefix@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ margin: "20px 60px", borderTop: "1px solid #030c61",}} />

            <div>
                <p style={{ color: "#030c61", marginBottom: "20px"}} className="text-sm flex items-center justify-center">Copyright &copy; 2024 Andresa Alves Ribeiro. All Rights Reserved</p>
            </div>
        </div>
    );
}