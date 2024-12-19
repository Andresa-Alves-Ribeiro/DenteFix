import { StaticImageData } from "next/image";

export interface Service {
    name: string;
    image: StaticImageData;
}

export interface Dentist {
    name: string;
    specialty: string;
    image: StaticImageData;
    alt: string;
  }