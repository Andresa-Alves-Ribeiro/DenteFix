"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="items-center text-center py-32">
            <h1 className="error-title">404</h1>

            <div>
                <h3 className="error-subtitle">Oops! Página Não Encontrada!</h3>

                <p className="error-paragraph">Desculpe, a página que você está procurando não existe</p>

                <div className="mt-10">
                    <Link href='/' className="error-button">
                        Página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
}
