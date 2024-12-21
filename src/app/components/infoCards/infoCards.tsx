import { FaTooth } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdBiotech } from "react-icons/md";

export default function InfoCards() {
    return (
        <div className="flex justify-center">
            <div className="card-home-1">
                <FaTooth size={30} />

                <span className="text-lg uppercase">Experiência Sem Dor</span>

                <p className="w-80 text-justify text-sm">Nosso objetivo é transformar a percepção da visita ao dentista, dissociando-a de dor e sofrimento. Trabalhamos para oferecer um ambiente acolhedor e tranquilo.</p>
            </div>

            <div className="card-home-2">
                <FaUserDoctor size={30} />

                <span className="text-lg uppercase">Profissionais Capacitados</span>

                <p className="w-80 text-justify text-sm">Contamos com uma equipe de profissionais atualizados e altamente capacitados em todas as áreas da odontologia. Cada paciente recebe atendimento personalizado, com dedicação e cuidado desde a primeira consulta.</p>
            </div>

            <div className="card-home-1">
                <MdBiotech size={40} />

                <span className="text-lg uppercase">Tecnologia e Conforto</span>

                <p className="w-80 text-justify text-sm">Utilizamos modernas técnicas e equipamentos que, aliados à competência da nossa equipe, garantem tratamentos mais rápidos, eficazes e confortáveis para você.</p>
            </div>
        </div>
    );
}