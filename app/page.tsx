'use client'
import 'styles/index.css'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import jab from '../public/images/jab.jpg'
import placeholder from '../public/images/placeholder.png'
import ring from '../public/images/ring.webp'

interface InfoSection {
  title: string
  text: string
  link: { href: string; text: string }
}

const items: InfoSection[] = [
  {
    title: 'Inclusiva',
    text: "La nostra palestra è aperta a tutte e tutti. Vogliamo che chiunque possa sentirsi realizzato/a e messo/a nelle condizioni di superare i propri limiti, in un ambiente in cui spirito di collaborazione e solidarietà sovrastano l'individualismo.",
    link: {
      href: '/palestra',
      text: 'Scopri di più sulla nostra palestra',
    },
  },
  {
    title: 'Dal quartiere per il quartiere',
    text: 'Questa palestra è stata costruito interamente dal basso, con la solidarietà di molti che ne hanno riconosciuto il valore sociale. Vogliamo essere un punto di riferimento e una ricchezza per il quartiere San Donato di Bologna.',
    link: {
      href: '/chi-siamo',
      text: 'Leggi le nostre regole',
    },
  },
  {
    title: 'Boxe ma non solo',
    text: 'Oltre al pugilato, ospitiamo diverse discipline, tra cui muay thai, yoga, ginnastica dolce, salsa, power lifting e functional training.',
    link: {
      href: '/corsi',
      text: 'Tutti i nostri corsi',
    },
  },
]

interface StaffMember {
  name: string
  role: string
  description: string
}

const staffMembers: StaffMember[] = [
  {
    name: 'Babbo Natale',
    role: 'Lavoratore stagionale',
    description: 'Porta sempre bellissimi regali',
  },
  {
    name: 'Superman',
    role: 'Supereroe',
    description: 'Non ti consiglio di fare sparring con lui',
  },
  {
    name: 'Topolino',
    role: 'È un topo ma che parla',
    description: 'Mi dispiace ma preferisco Paperino',
  },
  {
    name: 'Djovanni',
    role: 'Content creator & developer',
    description: 'Ottimo programmatore, ottimo videomaker, pessimo pugile',
  },
]

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY)
    updateScrollY()
    window.addEventListener('scroll', updateScrollY)
    return () => window.removeEventListener('scroll', updateScrollY)
  }, [])

  return (
    <>
      <Image
        src={ring}
        alt="Ring"
        priority
        className="fixed inset-0 min-h-[50vh] h-auto object-cover min-w-[100vw] top-16 opacity-10"
      />
      <section className="z-20 text-black md:pt-20">
        <div className="container flex justify-end px-5 pt-32 mx-auto mb-72 h-fit sm:h-[50vh] md:px-4 md:py-4">
          <div
            className="fixed flex flex-col mt-8 text-left sm:mt-36"
            style={{ opacity: 1 - scrollY / 100 / 4 }}
          >
            <h1 className="mb-2 text-6xl font-bold tracking-widest text-left text-white uppercase whitespace-pre lg:text-8xl md:text-7xl  leading-none font-['Oswald']">
              {'Bolognina\nboxe'}
            </h1>
            <p className="text-sm font-normal text-left text-gray-500 md:text-2xl dark:text-gray-300">
              Gente che lotta dentro e fuori dal ring
            </p>
          </div>
        </div>
        <section className="relative text-gray-500 bg-neutral-900">
          <div className="container flex flex-wrap px-5 py-12 mx-auto">
            <div className="flex flex-wrap justify-between gap-8 mb-10 lg:py-6 lg:pl-12 lg:text-left">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col flex-grow basis-full sm:basis-1/3 lg:basis-1/4 shrink-0"
                >
                  <div className="w-full mb-4 overflow-hidden rounded-lg">
                    <Image src={jab} alt="Ring" />
                  </div>
                  <div className="flex flex-col mb-10">
                    <h2 className="mb-3 text-2xl font-medium text-white">
                      {item.title}
                    </h2>
                    <p className="mb-2 text-lg leading-relaxed text-left text-neutral-300">
                      {item.text}
                    </p>
                    <Link
                      href={item.link.href}
                      className="text-lg leading-relaxed text-red-500"
                    >
                      {item.link.text}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative z-20 text-gray-500 bg-neutral-900">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-medium text-white sm:text-5xl">
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
                  {staffMembers.map((staffMember) => (
                    <div
                      key={staffMember.name}
                      className="p-4 lg:w-1/4 md:w-1/2"
                    >
                      <div className="flex flex-col items-center h-full text-center">
                        <Image
                          src={placeholder}
                          alt="Team"
                          className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                        />
                        <div className="w-full">
                          <h2 className="text-lg font-medium text-white">
                            {staffMember.name}
                          </h2>
                          <h3 className="mb-3 text-neutral-200">
                            {staffMember.role}
                          </h3>
                          <p className="mb-4 text-neutral-400">
                            {staffMember.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
