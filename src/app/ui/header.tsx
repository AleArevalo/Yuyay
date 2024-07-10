import Image from 'next/image'

export default function Header () {
  return (
    <header className="container mx-auto grid md:flex justify-center items-center gap-4 md:gap-16 py-8">
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Project</a>
          </li>
        </ul>
      </nav>

      <div className="flex-shrink-0">
        <Image src="/yuyay.svg" alt="Yuyay Logo" className='dark:invert' width={250} height={250} priority />
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:text-gray-400">Preview</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Config</a>
          </li>
        </ul>
      </nav>

      <nav className="md:hidden">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Project</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Preview</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Config</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}