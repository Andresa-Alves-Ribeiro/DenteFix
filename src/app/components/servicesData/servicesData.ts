import { Service } from "@/app/types";

import Endodontia from "../../../../public/images/endodontia.png"
import Implantodontia from "../../../../public/images/implantodontia.png"
import HarmonizacaoOrofacial from "../../../../public/images/Harmonização orofacial.png"
import Ortodontia from "../../../../public/images/ortodontia.png"
import ClinicaGeral from "../../../../public/images/clinica geral.png"
import Proteses from "../../../../public/images/proteses.png"
import Estomatologia from "../../../../public/images/estomatologia.png"
import LentesContato from "../../../../public/images/lentes de contato.png"
import Dentistica from "../../../../public/images/dentistica.png"
import Odontopediatria from "../../../../public/images/Odontopediatria.png"
import Periodontia from "../../../../public/images/periodontia.png"
import CirurgiaTraumatologia from "../../../../public/images/Cirurgia e Traumatologia.png"
import DisfuncaoTemporomandibular from "../../../../public/images/Disfunção Temporomandibular.png"
import NecessidadesEspeciais from "../../../../public/images/disabled-person.png"
import FuncionalMaxilares from "../../../../public/images/Ortordontia dos Maxilares.png"

const services: Service[] = [
    { name: "Endodontia", image: Endodontia },
    { name: "Implantodontia", image: Implantodontia },
    { name: "Harmonização Orofacial", image: HarmonizacaoOrofacial },
    { name: "Ortodontia", image: Ortodontia },
    { name: "Clinica Geral", image: ClinicaGeral },
    { name: "Próteses", image: Proteses },
    { name: "Estomatologia", image: Estomatologia },
    { name: "Lentes de Contato", image: LentesContato },
    { name: "Dentística", image: Dentistica },
    { name: "Odontopediatria", image: Odontopediatria },
    { name: "Periodontia", image: Periodontia },
    { name: "Cirurgia e Traumatologia", image: CirurgiaTraumatologia },
    { name: "Disfunção Temporomandibular", image: DisfuncaoTemporomandibular },
    { name: "Pacientes com Necessidades Especiais", image: NecessidadesEspeciais },
    { name: "Ortodontia Funcional dos Maxilares", image: FuncionalMaxilares },
];

export default services;