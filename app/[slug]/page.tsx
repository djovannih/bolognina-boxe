import { PortableText } from '@portabletext/react'
import { Image as SanityImage } from '@sanity/types'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { urlForImage } from 'utils/imageBuilder'
import sanityClient from 'utils/sanityClient'

const ptComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Image
        src={urlForImage(value)}
        alt={value.alt as string}
        fill
        className="!relative"
      />
    ),
  },
}

const getPage = async (slug: string): Promise<any> =>
  await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  )

const Page = async (context: any) => {
  const page = await getPage(context.params.slug)

  return (
    page && (
      <div className="z-20 mt-16 min-h-[85vh] text-white py-1">
        <article className="container max-w-5xl px-4 mx-auto divide-gray-900 xl:max-w-7xl sm:px-6 md:px-8 prose-p:my-2">
          <h1 className="mt-2 mb-6 text-4xl font-medium text-white">
            {page.title}
          </h1>
          <PortableText value={page.content} components={ptComponents} />
        </article>
      </div>
    )
  )
}

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  )
  return paths.map((slug: string) => ({ slug }))
}

export default Page
