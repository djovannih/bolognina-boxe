export default function Footer() {
  return (
    <footer className="relative z-20 pb-4 mt-8 text-gray-200 bg-neutral-900">
      <div className="max-w-5xl px-4 mx-auto divide-y divide-gray-900 xl:max-w-7xl sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-neutral-300 lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="font-semibold tracking-tight text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                © 2023 Bolognina boxe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
