import Image from "next/image"
import Time from "../../../../public/images/nossa historia.png"
import { BsShieldCheck } from "react-icons/bs"
import { PiHandHeart } from "react-icons/pi"

export default function OurStory() {
    return (
        <div className="our-story py-20">
            <div className="container flex items-center">
                <div>
                    <div className="our-story-container">
                        <span className="text-xl font-semibold">Nossa História</span>
                        <h1 className="text-5xl font-semibold">Cuidados inovadores com nosso toque pessoal</h1>
                        <p className="text-zinc-500 pb-14">Unimos tecnologia de ponta com um atendimento acolhedor e personalizado. Nosso objetivo é proporcionar tratamentos odontológicos de excelência em um ambiente confortável, promovendo a saúde bucal e o bem-estar dos nossos pacientes.</p>
                    </div>

                    <div>
                        <div className="flex gap-4">
                            <BsShieldCheck size={70} color="#ffffff" className="simbols-vision-mission" />

                            <div className="vision-mission-data">
                                <h3 className="font-semibold text-lg pb-1">Nossa Visão</h3>
                                <p className="text-zinc-600 pb-14">Ser referência em odontologia, oferecendo tratamentos modernos e humanizados.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <PiHandHeart size={70} color="#ffffff" className="simbols-vision-mission" />

                            <div className="vision-mission-data">
                                <h3 className="font-semibold text-lg pb-1">Nossa Missão</h3>
                                <p className="text-zinc-600 pb-14">Promover a saúde bucal e a autoestima dos nossos pacientes através do nosso atendimento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src={Time} alt="Imagem do time mostrando as mãos com luvas" width={1500} />
                </div>
            </div>
        </div>
    )
}