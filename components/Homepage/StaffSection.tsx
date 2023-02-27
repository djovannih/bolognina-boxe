import Image from 'next/image'
import { urlForImage } from 'utils/imageBuilder'
import { StaffMember } from 'utils/types'

export default function StaffSection({ staff }: { staff: StaffMember[] }) {
  return (
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
            <div className="flex flex-wrap justify-center -m-4">
              {staff.map((staffMember) => (
                <div
                  key={staffMember.name}
                  className="h-full p-4 lg:w-1/4 md:w-1/2"
                >
                  <div className="flex flex-col items-center h-full text-center">
                    <Image
                      src={urlForImage(staffMember.image)}
                      alt={staffMember.image.alt as string}
                      fill
                      className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg !relative aspect-square"
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
  )
}
