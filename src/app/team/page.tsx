"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import dentists from "../components/dentistsData/dentistData";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Team() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="banner-team">
                <p className="text-zinc-700">Nosso Time</p>

                <div>
                    <span><Link href="/">Home</Link> / Team</span>
                </div>
            </div>

            <div className="container team-page flex flex-col text-center justify-center py-20">
                <div className={`${isVisible ? 'animate__animated animate__fadeInLeftBig' : ''}`}>
                    <h1 ref={elementRef} className="uppercase font-bold text-5xl mb-10">Conheça nossa <span>equipe</span></h1>
                    <p ref={elementRef} className="mb-16 text-start text-zinc-600">Nossa equipe de dentistas é formada por profissionais altamente qualificados, comprometidos em oferecer o melhor cuidado para você e sua família. Cada integrante do time traz sua experiência e especialidade, garantindo excelência em diversas áreas da odontologia, como prevenção, estética, ortodontia e implantes.
                        O que nos diferencia é a paixão pelo que fazemos. Trabalhamos juntos com um único objetivo: proporcionar saúde bucal e confiança aos nossos pacientes. Priorizamos um atendimento humanizado, onde cada pessoa é tratada com respeito, atenção e carinho, em um ambiente acolhedor e profissional.
                    </p>
                </div>

                <ul className="grid grid-cols-3 gap-6">
                    {dentists.map((dentist, index) => (
                    <div className="flex justify-center items-center">
                        <li key={index} className="flex flex-col items-center w-max">
                            <div className="image-dentist-container">
                                <Image
                                    src={dentist.image}
                                    alt={dentist.alt}
                                    width={300}
                                    height={300}
                                    className="image-dentist"
                                />
                            </div>

                            <div className="info-dentist">
                                <h3>{dentist.name}</h3>

                                <p className="text-zinc-500 text-sm">{dentist.specialty}</p>

                                <div className="flex items-center gap-3 mt-3">
                                    <a href="#">
                                        <FaInstagram color="#2b98ec" size={18} />
                                    </a>

                                    <a href="#">
                                        <FaFacebookF color="#2b98ec" size={16} />
                                    </a>

                                    <a href="#">
                                        <FaWhatsapp color="#2b98ec" size={18} />
                                    </a>
                                </div>
                            </div>
                        </li>

                    </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}