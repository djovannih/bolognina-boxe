'use client'
import { useEffect, useState } from 'react'

export default function MainImage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY)
    updateScrollY()
    window.addEventListener('scroll', updateScrollY)
    return () => window.removeEventListener('scroll', updateScrollY)
  }, [])

  return (
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
  )
}
