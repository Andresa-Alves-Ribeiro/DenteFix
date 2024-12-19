import Image from "next/image";

import Time from "../../../../public/images/dentista1.jpg"
import { FaQuoteRight } from "react-icons/fa";


export default function Testimonials() {
    return (
        <div className="container py-20">
            <h2 className="text-center text-4xl font-bold">O que os pacientes estão dizendo</h2>
            <p>Dolor sit am consectetur adipisicing elit eiusmod tempor cididunt laboret mag dolore magna aliquat
                enim sed ad minim veniam nostrud eiusmod tempor incididunt ut labore</p>

            <div className="owl-item active">
                <div className="single-item">
                    <div className="text">Dolor sitam consectetur sed adipisicing
                        eiusmod tempor cididunt laboret mag
                        magn aliquat enim sed minim veniam
                        nostrud lorem ipsum dolor.

                        <FaQuoteRight className="quote-icon" />
                        </div>

                    <div className="author-info">
                        <div className="author-img">
                            <figure>
                                <Image src={Time} alt={"teste"} width={60} height={60} />
                            </figure>
                        </div>

                        <div className="author-thumb">
                            <h5>Scott Irvine</h5>
                            <span>Patient</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
