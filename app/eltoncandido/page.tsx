import Image from "next/image";

export default function EltonCandidoPage() {
  const buttons = [
    "LinkedIn",
    "TikTok",
    "Instagram",
  ];

  return (
    <main className="fixed inset-0 flex h-[100svh] max-h-[100svh] touch-none items-center justify-center overflow-hidden overscroll-none bg-black px-6 py-4">
      <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-orange-600 opacity-15 blur-3xl"></div>

      <section className="relative z-10 flex max-h-[calc(100svh-32px)] w-full max-w-[340px] flex-col items-center overflow-hidden">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-orange-600/60 bg-black shadow-[0_10px_26px_-18px_rgba(234,88,12,0.95)]">
          <Image
            src="/assets/eltoncandido.png"
            alt="Elton Candido"
            width={880}
            height={1067}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>
        <h1 className="mt-4 mb-4 text-center text-xl font-bold text-white">
          Elton Candido
        </h1>

        <div className="flex w-full flex-col items-center gap-3">
          {buttons.map((label) => (
          <button
            key={label}
            type="button"
            className="relative flex min-h-11 w-full items-center justify-center rounded-lg border border-orange-600 bg-black px-6 py-2 text-sm font-semibold text-white shadow-[0_8px_18px_-12px_rgba(234,88,12,0.95)] transition hover:border-orange-500 hover:bg-orange-600/10"
          >
            {label === "LinkedIn" && (
              <svg
                viewBox="0 0 552.77 552.77"
                className="absolute left-5 h-5 w-5 text-orange-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z" />
                <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z" />
                <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48S535.836,228.581,525.732,215.282z" />
              </svg>
            )}
            {label === "Instagram" && (
              <svg
                viewBox="0 0 256 256"
                className="absolute left-5 h-5 w-5 text-orange-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
              </svg>
            )}
            {label === "TikTok" && (
              <span
                aria-hidden="true"
                className="absolute left-5 h-5 w-5 bg-orange-500 [mask:url('/assets/tiktok.svg')_center/contain_no-repeat] [-webkit-mask:url('/assets/tiktok.svg')_center/contain_no-repeat]"
              />
            )}
            {label}
          </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-light text-gray-400">
            Desenvolva seu software com a
          </p>
          <Image
            src="/assets/whats.svg"
            alt="Saiton"
            width={120}
            height={40}
            className="h-9 w-auto"
          />
        </div>
      </section>
    </main>
  );
}
