import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-black overflow-hidden pb-20">
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

    </main>
  );
}
