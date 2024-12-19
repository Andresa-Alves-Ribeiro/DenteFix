import { Dentist } from "@/app/types";

import Dentista1 from "../../../../public/images/dentista1.jpg"
import Dentista2 from "../../../../public/images/dentista2.jpg"
import Dentista6 from "../../../../public/images/dentista3.jpg"
import Dentista7 from "../../../../public/images/dentista4.jpg"
import Dentista3 from "../../../../public/images/dentista5.jpg"
import Dentista4 from "../../../../public/images/dentista6.jpg"
import Dentista5 from "../../../../public/images/dentista7.jpg"
import Dentista8 from "../../../../public/images/dentista8.jpg"

const dentists: Dentist[] = [
    {
        name: "Ivan Pires",
        specialty: "Cirurgião Dentista",
        image: Dentista1,
        alt: "dentista",
    },
    {
        name: "Beatriz Vecchia",
        specialty: "Ortodontista",
        image: Dentista2,
        alt: "dentista",
    },
    {
        name: "Dentista Teste",
        specialty: "Dentista Pediatrica",
        image: Dentista6,
        alt: "dentista",
    },
    {
        name: "Karen Jarroug",
        specialty: "Odontologia Holística",
        image: Dentista7,
        alt: "dentista",
    },
    {
        name: "Paula Matsuda",
        specialty: "Ortognática",
        image: Dentista3,
        alt: "dentista",
    },
    {
        name: "Camila Simplicio",
        specialty: "Cirurgiã Dentista",
        image: Dentista4,
        alt: "dentista",
    },
    {
        name: "Dentista Teste",
        specialty: "Dentista Pediatrica",
        image: Dentista5,
        alt: "dentista",
    },
    {
        name: "Adriana Pires",
        specialty: "Dentista Pediatrica",
        image: Dentista8,
        alt: "dentista",
    },
];

export default dentists;