import Image from "next/image";
import { Service } from '../../types';

interface ServiceCardProps extends Service {
    isVisible: boolean;
}

export default function ServiceCard({ name, image, isVisible }: ServiceCardProps) {
    return (
        <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
            <Image src={image} alt={`Ícone de ${name}`} width={45} height={45} />
            <h3 className="font-bold my-4 uppercase text-xl">{name}</h3>
        </li>
    );
}