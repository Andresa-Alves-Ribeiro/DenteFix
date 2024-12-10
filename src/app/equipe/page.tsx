"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Dentista1 from "../../../public/images/dentista1.png"

export default function Equipe() {
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
            <div className="banner-equipe"></div>

            <div className={`flex flex-col text-center justify-center mx-28 py-20 teste ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                <h1 ref={elementRef} className="uppercase font-bold text-5xl mb-6 text-zinc-700">Conheça nosso <span>time de dentistas</span></h1>

                <div>
                    <ul className="flex">
                        <li>
                            <Image src={Dentista1} alt="dentista" />

                            <div>
                                <div></div>

                                <h3>Dentista teste</h3>
                                <p>Dentista Pediatrica</p>
                            </div>
                        </li>

                        <li>
                            <Image src={Dentista1} alt="dentista" />

                            <div>
                                <div></div>

                                <h3>Dentista teste</h3>
                                <p>Dentista Pediatrica</p>
                            </div>
                        </li>

                        <li>
                            <Image src={Dentista1} alt="dentista" />

                            <div>
                                <div></div>

                                <h3>Dentista teste</h3>
                                <p>Dentista Pediatrica</p>
                            </div>
                        </li>

                        <li>
                            <Image src={Dentista1} alt="dentista" />

                            <div>
                                <div></div>

                                <h3>Dentista teste</h3>
                                <p>Dentista Pediatrica</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}