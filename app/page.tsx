import 'styles/index.css'

import Image from 'next/image'
import Link from 'next/link'

import jab from '../public/images/jab.jpg'
import placeholder from '../public/images/placeholder.png'
import ring from '../public/images/ring.webp'

export default function Page() {
  return (
    <>
      <Image
        src={ring}
        alt="Ring"
        priority
        className="fixed inset-0 w-screen h-auto top-16 opacity-10"
      />
      <section className="z-20 text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto h-80 lg:h-96 lg:px-4 lg:py-4">
          <div className="fixed flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white uppercase lg:text-8xl md:text-7xl ">
              Bolognina boxe
            </h1>
            <br></br>
            <p className="mx-auto text-2xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Gente che lotta dentro e fuori dal ring
            </p>
          </div>
        </div>
        <section className="relative text-gray-600 body-font bg-neutral-900">
          <div className="container flex flex-wrap px-5 py-12 mx-auto">
            <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
              <Image src={jab} alt="Ring" priority className="" />
            </div>
            <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div
                className="flex flex-col items-center mb-10 lg:items-start delay-[200ms] duration-[500ms] taos:translate-x-[200px] taos:opacity-0"
                data-taos-offset="200"
              >
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-white title-font">
                    Inclusiva
                  </h2>
                  <p className="mb-2 text-lg leading-relaxed text-neutral-300">
                    La nostra palestra è aperta a tutte e tutti. Vogliamo che
                    chiunque possa sentirsi realizzato/a e messo/a nelle
                    condizioni di superare i propri limiti, in un ambiente in
                    cui spirito di collaborazione e solidarietà sovrastano
                    l&apos;individualismo.
                  </p>
                  <Link
                    href="/palestra"
                    className="text-lg leading-relaxed text-red-600"
                  >
                    Scopri di più sulla nostra palestra
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-white title-font">
                    Dal quartiere per il quartiere
                  </h2>
                  <p className="mb-2 text-lg leading-relaxed text-neutral-300">
                    Questa palestra è stata costruito interamente dal basso, con
                    la solidarietà di molti che ne hanno riconosciuto il valore
                    sociale. Vogliamo essere un punto di riferimento e una
                    ricchezza per il quartiere San Donato di Bologna
                  </p>
                  <Link
                    href="/palestra"
                    className="text-lg leading-relaxed text-red-600"
                  >
                    Leggi le nostre regole
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-white title-font">
                    Boxe ma non solo
                  </h2>
                  <p className="mb-2 text-lg leading-relaxed text-neutral-300">
                    Oltre al pugilato, ospitiamo diverse discipline, tra cui
                    muay thai, yoga, ginnastica dolce, salsa, power lifting e
                    functional training
                  </p>
                  <Link
                    href="/palestra"
                    className="text-lg leading-relaxed text-red-600"
                  >
                    Tutti i nostri corsi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-20 text-gray-600 body-font bg-neutral-900">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h2 className="mb-4 font-medium text-white sm:text-5xl title-font">
                I nostri istruttori
              </h2>
              <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-neutral-300">
                Ecco il nostro staff
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-white rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <Image
                        src={placeholder}
                        alt="Team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                      />
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-white title-font">
                          Babbo Natale
                        </h2>
                        <h3 className="mb-3 text-neutral-200">
                          Lavoratore stagionale
                        </h3>
                        <p className="mb-4 text-neutral-400">
                          Porta sempre bellissimi regali
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <Image
                        src={placeholder}
                        alt="Team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                      />
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-white title-font">
                          Superman
                        </h2>
                        <h3 className="mb-3 text-neutral-200">Supereroe</h3>
                        <p className="mb-4 text-neutral-400">
                          Non ti consiglio di fare sparring con lui
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <Image
                        src={placeholder}
                        alt="Team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                      />
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-white title-font">
                          Topolino
                        </h2>
                        <h3 className="mb-3 text-neutral-200">
                          È un topo ma che parla
                        </h3>
                        <p className="mb-4 text-neutral-400">
                          Mi dispiace ma preferisco Paperino
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <Image
                        src={placeholder}
                        alt="Team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                      />
                      <div className="w-full">
                        <h2 className="text-lg font-medium text-white title-font">
                          Djovanni
                        </h2>
                        <h3 className="mb-3 text-neutral-200">
                          Content creator & developer
                        </h3>
                        <p className="mb-4 text-neutral-400">
                          Ottimo programmatore, ottimo videomaker, pessimo
                          pugile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
