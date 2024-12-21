"use client";

import Image from "next/image";
import { useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import Time from "../../../../public/images/dentista1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
    // Adicionando o autoplay à inicialização do Embla
    const [emblaRef, emblaApi] = EmblaCarouselReact({
        loop: true,
        slidesToScroll: 3,
        plugins: [Autoplay({ delay: 3000, stopOnInteraction: false })], // Ativando o autoplay
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const testimonials = [
        {
            text: "Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret mag magn aliquat enim sed minim veniam nostrud lorem ipsum dolor.",
            author: "Scott Irvine",
            role: "Patient",
            image: Time,
        },
        {
            text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            author: "Emily Johnson",
            role: "Patient",
            image: Time,
        },
        {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            author: "Michael Brown",
            role: "Patient",
            image: Time,
        },
        {
            text: "Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret mag magn aliquat enim sed minim veniam nostrud lorem ipsum dolor.",
            author: "Dana Irvine",
            role: "Patient",
            image: Time,
        },
        {
            text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            author: "Fabio Johnson",
            role: "Patient",
            image: Time,
        },
        {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            author: "Jana Brown",
            role: "Patient",
            image: Time,
        },
    ];

    return (
        <div className="container py-20 testimonials">
            <h2 className="text-center text-5xl font-bold uppercase mb-6 text-zinc-700">
                O que os pacientes <span>estão dizendo</span>
            </h2>
            <p className="text-zinc-500 mb-14">
                Dolor sit am consectetur adipisicing elit eiusmod tempor cididunt laboret mag dolore magna aliquat enim sed ad minim veniam nostrud eiusmod tempor incididunt ut labore
            </p>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((testimonial, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="single-item owl-item">
                                <div className="text">
                                    {testimonial.text}
                                    <FaQuoteRight className="quote-icon" />
                                </div>

                                <div className="author-info">
                                    <div className="author-img">
                                        <figure>
                                            <Image src={testimonial.image} alt={testimonial.author} width={60} height={60} />
                                        </figure>
                                    </div>

                                    <div className="author-thumb">
                                        <h5>{testimonial.author}</h5>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <button onClick={scrollPrev} className="embla__button embla__button--prev">Prev</button>
                <button onClick={scrollNext} className="embla__button embla__button--next">Next</button>
            </div>

            <style jsx>{`
                .embla {
                    background: none;
                    max-width: 95%;
                    overflow: hidden;
                    --slide-spacing: 2rem;
                }

                .embla__slide {
                    transform: translate3d(0, 0, 0);
                    flex: none;
                    min-width: 0;
                    padding-left: var(--slide-spacing);
                }
            `}</style>
        </div>
    );
}
