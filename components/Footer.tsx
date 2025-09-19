export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
          Cuponized.com
        </h3>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-neutral-400">
          {/* Español */}
          <a href="/sobre-nosotros" className="hover:underline">Sobre nosotros</a>
          <a href="/aviso-legal" className="hover:underline">Aviso legal</a>

          {/* Inglés */}
          <a href="/about-us" className="hover:underline">About us</a>
          <a href="/legal-notice" className="hover:underline">Legal notice</a>
        </nav>

        <p className="mt-6 text-sm text-gray-600 dark:text-neutral-400">
          © Cuponized™ 2024–2025. Tu aliado para ahorrar cada día.
        </p>

        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Una iniciativa independiente creada en Argentina 🇦🇷
        </p>

        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          ❤️ Hecho con pasión para quienes buscan pagar menos.
        </p>
      </div>
    </footer>
  );
}

