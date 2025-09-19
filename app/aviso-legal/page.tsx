
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal | Cuponized",
  description: "Información sobre enlaces de afiliado y responsabilidad de las ofertas publicadas.",
  alternates: {
    canonical: "/aviso-legal",
    languages: { es: "/aviso-legal", en: "/legal-notice" },
  },
  openGraph: {
    title: "Aviso legal | Cuponized",
    description: "Información sobre enlaces de afiliado y responsabilidad de las ofertas publicadas.",
    url: "/aviso-legal",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso legal | Cuponized",
    description: "Información sobre enlaces de afiliado y responsabilidad de las ofertas publicadas.",
    images: ["/og-default.png"],
  },
};

export default function AvisoLegal() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Aviso legal</h1>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Cuponized actúa como un agregador de ofertas y descuentos. No vendemos
        productos directamente, sino que redirigimos a las tiendas oficiales.
      </p>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Algunos enlaces pueden incluir programas de afiliados, lo que significa
        que podríamos recibir una comisión si realizás una compra a través de
        ellos. Esto no afecta el precio final que pagás.
      </p>
      <p className="text-gray-700 dark:text-neutral-300">
        La información publicada se actualiza periódicamente, pero no podemos
        garantizar la disponibilidad o vigencia de cada oferta. Te recomendamos
        verificar siempre las condiciones en el sitio del comercio.
      </p>
    </main>
  );
}
