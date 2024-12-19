"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import dentists from "../components/dentistsData/dentistData";

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

            <div className={`team-page flex flex-col text-center justify-center mx-28 py-20 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                <h1 ref={elementRef} className="uppercase font-bold text-5xl mb-10">Conheça nossa <span>equipe</span></h1>
                <p className="mb-16 text-start text-zinc-600">Nossa equipe de dentistas é formada por profissionais altamente qualificados, comprometidos em oferecer o melhor cuidado para você e sua família. Cada integrante do time traz sua experiência e especialidade, garantindo excelência em diversas áreas da odontologia, como prevenção, estética, ortodontia e implantes.
                    O que nos diferencia é a paixão pelo que fazemos. Trabalhamos juntos com um único objetivo: proporcionar saúde bucal e confiança aos nossos pacientes. Priorizamos um atendimento humanizado, onde cada pessoa é tratada com respeito, atenção e carinho, em um ambiente acolhedor e profissional.
                </p>

                <div>
                    <ul className="flex flex-wrap justify-center gap-16">
                        {dentists.map((dentist, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <Image src={dentist.image} alt={dentist.alt} width={250} />
                                <div className="info-dentist">
                                    <h3>{dentist.name}</h3>
                                    <p className="text-zinc-200">{dentist.specialty}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}