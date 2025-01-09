"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Clinic() {
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
                <p className="text-zinc-700">Nossa Clínica</p>

                <div>
                    <span><Link href="/">Home</Link> / A Clínica</span>
                </div>
            </div>

            <div className="container team-page flex flex-col text-center justify-center py-20">
                <div className={`${isVisible ? 'animate__animated animate__fadeInLeftBig' : ''}`}>
                    <h1 ref={elementRef} className="uppercase font-bold text-5xl mb-10">Venha conhecer nossa <span>clínica</span></h1>
                    <p ref={elementRef} className="mb-16 text-start text-zinc-600">
                    </p>
                </div>
            </div>
        </div>
    )
}