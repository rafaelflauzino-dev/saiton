import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-black overflow-hidden">
      {/* Blur effects esparramados: canto superior esquerdo e inferior direito */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-15"></div>

      <div className="mt-30 md:mt-22 relative z-10 px-2 sm:px-0">
        <Image
          src="/assets/herosection.png"
          alt="Hero Section"
          width={1280}
          height={720}
          priority
          className="w-full max-w-3xl mx-auto"
        />
        <p className="text-center text-white text-md font-light mt-8 max-w-2xl mx-auto leading-relaxed md:text-lg md:text-gray-400">
          Criamos softwares sob medida que se adaptam à operação da sua empresa, conectando processo, performance e experiência
        </p>
        <div className="flex flex-col gap-4 justify-center mt-8 sm:flex-row">
          <button className="flex items-center justify-center gap-2 px-8 py-2 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition mx-4 sm:mx-0">
            Ver portfólio
            <span className="text-xl">→</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-2 border-2 border-orange-600 hover:bg-orange-600 text-orange-500 hover:text-white font-medium rounded-lg transition mx-4 sm:mx-0">
            Fazer orçamento
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      <footer className="relative z-10 mt-20 w-full border-t border-orange-800/80 bg-black px-6 py-12 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-orange-500 md:hidden">
              Software House
            </p>
            <Image
              src="/assets/whats.svg"
              alt="Software House Logo"
              width={100}
              height={40}
              className="h-9 w-auto"
            />
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-orange-500 transition hover:bg-orange-500/10 sm:h-12 sm:w-12"
              >
                <svg viewBox="0 0 256 256" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-orange-500 transition hover:bg-orange-500/10 sm:h-12 sm:w-12"
              >
                <svg viewBox="0 0 552.77 552.77" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"/>
                  <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"/>
                  <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48S535.836,228.581,525.732,215.282z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-5 text-center md:w-auto md:justify-self-end md:items-end md:text-right">
            <p className="max-w-xs text-sm font-light leading-7 text-gray-400">
              Software pensado para gerar eficiência
              <br />
              e apoiar crescimento.
            </p>
            <Link
              href="/#contact"
              className="inline-flex min-h-11 w-full max-w-[280px] items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-orange-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black md:w-auto"
            >
              Falar com especialista
              <span className="text-xl leading-none">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-orange-800/40 pt-6 text-center text-xs text-gray-500 md:flex-row md:text-left">
          <p>
            SAITON HUB LTDA &middot; CNPJ 00.000.600/0000-00
            <br />
            &copy; 2026 Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <Link
              href="/politica-de-privacidade"
              className="transition hover:text-orange-500"
            >
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="transition hover:text-orange-500">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
