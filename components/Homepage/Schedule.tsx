import { Image as SanityImage } from '@sanity/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from 'utils/imageBuilder'

export default function Schedule({ image }: { image: SanityImage }) {
  return (
    <div className="flex flex-col flex-grow basis-full sm:basis-1/2 lg:basis-1/3 shrink-0">
      <div className="relative w-full mb-4 overflow-hidden rounded-lg">
        <Link href={urlForImage(image)}>
          <Image
            src={urlForImage(image)}
            alt={image.alt as string}
            fill
            className="!relative"
          />
        </Link>
      </div>
    </div>
  )
}
