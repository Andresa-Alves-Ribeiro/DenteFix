import Image from "next/image";
import { Service } from '../../types';

interface ServiceCardProps extends Service {
    isVisible: boolean;
}

export default function ServiceCard({ name, image, isVisible }: ServiceCardProps) {
    return (
        <li className={`card-service ${isVisible ? 'animate__animated animate__flipInX' : ''}`}>
            <Image src={image} alt={`Ícone de ${name}`} width={60} height={60} />
            <h3 className="uppercase font-semibold mt-4 mb-6 text-xl">{name}</h3>
            <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consectetur alias voluptate omnis nam nostrum fuga</p>
        </li>
    );
}