import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black pb-20">
      {/* Blur effects esparramados: canto superior esquerdo e inferior direito */}
      <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-orange-600 opacity-15 blur-3xl"></div>

      <div className="relative z-10 mt-30 px-2 sm:px-0 md:mt-22">
        <Image
          src="/assets/herosection.png"
          alt="Hero Section"
          width={1280}
          height={720}
          priority
          className="mx-auto w-full max-w-3xl"
        />
        <p className="text-md mx-auto mt-8 max-w-2xl text-center font-light leading-relaxed text-white md:text-lg md:text-gray-400">
          Criamos softwares sob medida que se adaptam à operação da sua empresa,
          conectando processo, performance e experiência
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="mx-4 flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-8 py-2 font-medium text-white transition hover:bg-orange-500 sm:mx-0">
            Ver portfólio
            <span className="text-xl">→</span>
          </button>
          <button className="mx-4 flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 px-8 py-2 font-medium text-orange-500 transition hover:bg-orange-600 hover:text-white sm:mx-0">
            Fazer orçamento
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </main>
  );
}
