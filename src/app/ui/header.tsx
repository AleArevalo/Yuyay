import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto grid md:flex justify-items-center md:justify-center items-center gap-4 md:gap-16 py-8">
      <nav className="hidden md:block">
        <ul className="flex gap-12">
          <li>
            <Link href="/#home" className="hover:text-gray-400 font-medium border-b-2 border-black dark:border-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/#project" className="text-indigo-600 hover:text-gray-400 font-medium">Project</Link>
          </li>
        </ul>
      </nav>

      <Link href="/" className="flex-shrink-0">
        <Image src="/yuyay.svg" alt="Yuyay Logo" className='dark:invert' width={250} height={250} priority />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex gap-12">
          <li>
            <Link href="/preview" className="text-indigo-600 hover:text-gray-400 font-medium">Preview</Link>
          </li>
          <li>
            <Link href="/config" className="hover:text-gray-400 font-medium">Config</Link>
          </li>
        </ul>
      </nav>

      <nav className="md:hidden">
        <ul className="flex gap-8">
          <li>
            <Link href="/#home" className="hover:text-gray-400 font-medium border-b-2 border-black dark:border-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/#project" className="text-indigo-600 hover:text-gray-400 font-medium">Project</Link>
          </li>
          <li>
            <Link href="/preview" className="hover:text-gray-400 font-medium">Preview</Link>
          </li>
          <li>
            <Link href="/config" className="text-indigo-600 hover:text-gray-400 font-medium">Config</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header