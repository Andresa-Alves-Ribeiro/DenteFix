"use client"

import 'animate.css';

import { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../servicesData/servicesData";

export default function ProceduresList() {
    const [isVisible, setIsVisible] = useState(false);
    const [itemsToShow, setItemsToShow] = useState<number>(9);
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

    const handleShowMore = () => {
        if (itemsToShow === 9) {
            setItemsToShow(services.length);
        } else {
            setItemsToShow(9);
        }
    };


    return (
        <div className="flex flex-col text-center justify-center mx-28 pb-20 services-itens">
            <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''
                }`}>
                <h1 ref={elementRef} className="uppercase font-bold text-5xl mb-6 text-zinc-700">Nós oferecemos diferentes <span>serviços</span></h1>

                <span ref={elementRef} className={`text-zinc-500`}>
                    Transforme seu sorriso com nossos serviços dentários de qualidade.
                    Oferecemos tratamentos com tecnologia avançada e uma equipe dedicada ao seu bem-estar.
                    Agende sua consulta e descubra o poder de um sorriso saudável e radiante!
                </span>

            </div>

            <ul className="flex flex-wrap justify-center mt-14">
                {services.slice(0, itemsToShow).map((service, index) => (
                    <ServiceCard key={index} {...service} isVisible={isVisible} />
                ))}
            </ul>

            <div className="see-more-button">
                <button onClick={handleShowMore} className='teste'>
                    Ver Mais
                </button>
            </div>
        </div>
    );
}