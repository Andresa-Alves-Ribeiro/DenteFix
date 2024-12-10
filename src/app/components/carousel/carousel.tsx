"use client";

import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
    EmblaCarouselType,
    EmblaEventType,
} from "embla-carousel";
import "../../../app/embla-carousel.css";

export default function MyCarousel() {
    // Configuração do autoplay
    const autoplayOptions = Autoplay({ delay: 3000, stopOnInteraction: false });
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayOptions]);

    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const TWEEN_FACTOR_BASE = 0.2;

    const slides = [
        "/images/DENTEFIX_801.jpg",
        "/images/DENTEFIX_3.jpg",
        "/images/DENTEFIX_1225.jpg",
        "/images/DENTEFIX_1413.jpg",
    ];

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
                    const tweenNode = tweenNodes.current[slideIndex];
                    tweenNode.style.transform = `translateX(${translate}%)`;
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenParallax)
            .on("scroll", tweenParallax)
            .on("select", tweenParallax);
    }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor]);

    return (
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((src, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">
                                    <img src={src} alt={`Slide ${index + 1}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
