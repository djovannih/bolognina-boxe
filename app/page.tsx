import MainImage from 'components/Homepage/MainImage'
import Image from 'next/image'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { urlForImage } from 'utils/imageBuilder'
import sanityClient from 'utils/sanityClient'

import ring from '../public/images/ring.webp'
import { HomepageData } from '../utils/types'

const getData = async (): Promise<HomepageData> =>
  await sanityClient.fetch(groq`*[_type == "homepage"][0]`)

export default async function Page() {
  const { cards, redSchedule, blueSchedule } = await getData()

  return (
    <>
      <Image
        src={ring}
        alt="Ring"
        priority
        className="fixed inset-0 min-h-[50vh] h-auto object-cover min-w-[100vw] top-16 opacity-10"
      />
      <section className="z-20 text-black md:pt-20">
        <MainImage />
        <section className="relative text-gray-500 bg-neutral-900">
          <div className="container flex flex-wrap px-5 py-12 mx-auto">
            <div className="flex flex-wrap justify-between gap-8 mb-10 lg:py-6 lg:text-left">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col flex-grow basis-full sm:basis-1/3 lg:basis-1/4 shrink-0"
                >
                  <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={urlForImage(card.image)}
                      alt={card.title}
                      fill
                      className="!relative"
                    />
                  </div>
                  <div className="flex flex-col mb-10">
                    <h2 className="mb-3 text-2xl font-medium text-white">
                      {card.title}
                    </h2>
                    <p className="mb-2 text-lg leading-relaxed text-left text-neutral-300">
                      {card.content}
                    </p>
                    <Link
                      href={card.link.url}
                      className="text-lg leading-relaxed text-red-500"
                    >
                      {card.link.text}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative z-20 text-gray-500 bg-neutral-900">
          <div className="container flex flex-wrap px-5 py-12 mx-auto">
            <h2 className="mx-auto mb-4 text-3xl font-medium text-white sm:text-5xl">
              Orario corsi
            </h2>
            <div className="flex flex-wrap justify-between gap-8 mb-10 lg:py-6 lg:text-left">
              <div className="flex flex-col flex-grow basis-full sm:basis-1/3 lg:basis-1/4 shrink-0">
                <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlForImage(blueSchedule)}
                    alt={blueSchedule.alt as string}
                    fill
                    className="!relative"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-grow basis-full sm:basis-1/3 lg:basis-1/4 shrink-0">
                <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlForImage(redSchedule)}
                    alt={redSchedule.alt as string}
                    fill
                    className="!relative"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container px-5 mx-auto">
            <h2 className="mb-4 text-3xl font-medium text-center text-white sm:text-5xl">
              Orario corsi
            </h2>
            <div className="flex flex-wrap justify-between gap-8">
              <Image
                src={urlForImage(redSchedule)}
                alt={redSchedule.alt as string}
                fill
                className="!relative lg:max-w-[48%]"
              />
              <Image
                src={urlForImage(blueSchedule)}
                alt={blueSchedule.alt as string}
                fill
                className="!relative lg:max-w-[48%]"
              />
            </div>
          </div> */}
        </section>
        {/* <StaffSection staff={staff} /> */}
      </section>
    </>
  )
}
