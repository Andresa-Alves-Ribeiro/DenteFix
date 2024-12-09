"use client"

import Image from "next/image"
import 'animate.css';

import Endodontia from "../../../public/images/endodontia.png";
import Implantodontia from "../../../public/images/implantodontia.png";
import HarmonizaçãoOrofacial from "../../../public/images/Harmonização orofacial.png";
import Ortodontia from "../../../public/images/ortodontia.png";
import ClinicaGeral from "../../../public/images/clinica geral.png";
import Proteses from "../../../public/images/proteses.png";
import Estomatologia from "../../../public/images/estomatologia.png";
import LentesContato from "../../../public/images/lentes de contato.png";
import Dentistica from "../../../public/images/dentistica.png";
import Odontopediatria from "../../../public/images/Odontopediatria.png";
import Periodontia from "../../../public/images/periodontia.png";
import CirurgiaTraumato from "../../../public/images/Cirurgia e Traumatologia.png";
import DisfuncaoTemporo from "../../../public/images/Disfunção Temporomandibular.png";
import PacientesComNecessidades from "../../../public/images/disabled-person.png";
import OrtodontiaMaxilar from "../../../public/images/Ortordontia dos Maxilares.png";
import { useEffect, useRef, useState } from "react";

export default function ProceduresList() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Para observar apenas uma vez
                    }
                });
            },
            {
              threshold: 0.4, // Ativa quando 10% do componente está visível
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect(); // Cleanup ao desmontar
    }, []);

    return (
        <div className="flex flex-col text-center justify-center mx-28 pb-20 teste">
            <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''
                }`}>
                <h1 ref={elementRef} className={`uppercase font-bold text-5xl mb-6`}>Nós oferecemos diferentes <span>serviços</span></h1>

                <span ref={elementRef} className={`text-zinc-500`}>
                    Transforme seu sorriso com nossos serviços dentários de qualidade.
                    Oferecemos tratamentos com tecnologia avançada e uma equipe dedicada ao seu bem-estar.
                    Agende sua consulta e descubra o poder de um sorriso saudável e radiante!
                </span>

            </div>

            <ul className="flex flex-wrap justify-center mt-14">
                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Endodontia} alt="icone de imagem de endodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Endodontia</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Implantodontia} alt="icone de imagem de Implantodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Implantodontia</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={HarmonizaçãoOrofacial} alt="icone de imagem de Harmonização orofacial" width={70} />
                    <h3 className="font-bold my-4 uppercase text-xl">Harmonização orofacial</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Ortodontia} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Ortodontia</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={ClinicaGeral} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Clinica Geral</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Proteses} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Próteses</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Estomatologia} alt="icone de imagem de Ortodontia" width={50} />
                    <h3 className="font-bold my-4 uppercase text-xl">Estomatologia</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={LentesContato} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Lentes de contato</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Dentistica} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Dentistica</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Odontopediatria} alt="icone de imagem de Ortodontia" width={70} />
                    <h3 className="font-bold my-4 uppercase text-xl">Odontopediatria</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={Periodontia} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Periodontia</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={CirurgiaTraumato} alt="icone de imagem de Ortodontia" width={70} />
                    <h3 className="font-bold my-4 uppercase text-xl">Cirurgia e Traumatologia Buco-Maxilo-Faciais</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={DisfuncaoTemporo} alt="icone de imagem de Ortodontia" width={60} />
                    <h3 className="font-bold my-4 uppercase text-xl">Disfunção Temporomandibular e Dor Orofacial</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={PacientesComNecessidades} alt="icone de imagem de Ortodontia" width={70} />
                    <h3 className="font-bold my-4 uppercase text-xl">Odontologia para Pacientes com Necessidades Especiais</h3>
                </li>

                <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
                    <Image src={OrtodontiaMaxilar} alt="icone de imagem de Ortodontia" width={70} />
                    <h3 className="font-bold my-4 uppercase text-xl">Ortordontia Funcional dos Maxilares</h3>
                </li>
            </ul>
        </div>
    );
}