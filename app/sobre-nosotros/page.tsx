"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros | Cuponized",
  description: "Quiénes somos y cómo te ayudamos a ahorrar con cupones verificados.",
  alternates: {
    canonical: "/sobre-nosotros",
    languages: { es: "/sobre-nosotros", en: "/about-us" },
  },
  openGraph: {
    title: "Sobre nosotros | Cuponized",
    description: "Quiénes somos y cómo te ayudamos a ahorrar con cupones verificados.",
    url: "/sobre-nosotros",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre nosotros | Cuponized",
    description: "Quiénes somos y cómo te ayudamos a ahorrar con cupones verificados.",
    images: ["/og-default.png"],
  },
};

export default function SobreNosotros() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Sobre nosotros</h1>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Cuponized nació con una misión simple: ayudarte a encontrar los mejores
        descuentos y promociones de manera rápida y sencilla.
      </p>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Creemos que ahorrar no debería ser complicado. Por eso reunimos ofertas
        de distintas marcas y tiendas para que puedas descubrirlas en un solo lugar.
      </p>
      <p className="text-gray-700 dark:text-neutral-300">
        Somos un proyecto independiente creado en Argentina 🇦🇷 con la pasión de
        hacer que tu plata rinda más.
      </p>
    </main>
  );
}
