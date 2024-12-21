"use client";

import { FaQuoteRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
    const autoplayOptions = Autoplay({ delay: 6000, stopOnInteraction: false, });
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayOptions]);
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

    const testimonials = [
        {
            text: "Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret mag magn aliquat enim sed minim veniam nostrud lorem ipsum dolor.",
            author: "Scott Irvine",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/men/26.jpg",
        },
        {
            text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            author: "Emily Johnson",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            author: "Michael Brown",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/men/53.jpg",
        },
        {
            text: "Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret mag magn aliquat enim sed minim veniam nostrud lorem ipsum dolor.",
            author: "Dana Irvine",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/women/62.jpg",
        },
        {
            text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            author: "Fabio Johnson",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/men/43.jpg",
        },
        {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            author: "Jana Brown",
            role: "Paciente",
            image: "https://randomuser.me/api/portraits/women/17.jpg",
        },
    ];

    return (
        <div className="container py-20" ref={elementRef}>
            <div className={`flex flex-col items-center ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}>
                <h2 className="text-center text-5xl font-bold uppercase mb-6 text-zinc-700">
                    O que os pacientes <span>estão dizendo</span>
                </h2>
                <p className="text-zinc-500 mb-10 text-testimonials">
                    Dolor sit am consectetur adipisicing elit eiusmod tempor cididunt laboret mag dolore magna aliquat enim sed ad minim veniam nostrud eiusmod tempor incididunt ut labore
                </p>
            </div>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((testimonial, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="single-item owl-item">
                                <div className="text">
                                    {testimonial.text}
                                    <FaQuoteRight className="quote-icon" />
                                </div>

                                <div className="author-info px-4 flex items-center gap-3">
                                    <img src={testimonial.image} alt={testimonial.author} width={60} height={60} className="rounded-full" />

                                    <div className="author-thumb">
                                        <h5 className="font-bold text-zinc-800 text-lg">{testimonial.author}</h5>
                                        <span className="text-sm">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .embla {
                    background: none;
                    max-width: 90%;
                    overflow: hidden;
                    --slide-spacing: 1.7rem;
                }

                .embla__slide {
                    transform: translate3d(0, 0, 0);
                    flex: none;
                    min-width: 0;
                    padding-left: var(--slide-spacing);
                }

                @media (min-width: 1441px) and (max-width: 1680px) {
                    .embla {
                    background: none;
                    max-width: 73%;
                    overflow: hidden;
                    --slide-spacing: 1.1rem;
                }
            }

                @media (min-width: 1681px) and (max-width: 1920px) {
                    .embla {
                    background: none;
                    max-width: 75%;
                    overflow: hidden;
                    --slide-spacing: 1.8rem;
                }
            }

            @media (min-width: 1921px) and (max-width: 2560px) {
                    .embla {
                    background: none;
                    max-width: 77%;
                    overflow: hidden;
                    --slide-spacing: 1.8rem;
                    padding: 30px;
                }
            }
        `}</style>
        </div>
    );
}
