import Link from 'next/link'

import Features from './ui/features'
import Preview from './ui/preview'
import { IconSearch } from './ui/icons/icons'
import { UndrawThoughtProcess } from '@/assets/images'

const Home = () => {
  return (
    <>
      <main>
        <article className="container mx-auto px-6 pb-16 md:py-16 text-center">
          <section className="grid md:grid-flow-col justify-between">
            <UndrawThoughtProcess classList="m-auto md:hidden" width={300} height={250} />
            <div>
              <h1 className="text-4xl font-bold text-gray-500 md:text-gray-400">
                Bienvenido a Yuyay
              </h1>
              <p className="my-4">
                La forma más moderna de organizar tus pensamientos con mapas mentales segmentados con IA.
              </p>
              <div className="flex justify-center ">
                <div className="relative w-4/5 md:w-4/6">
                  <input
                    type="text"
                    placeholder="Buscar en la mente de Yuyay..."
                    className="bg-transparent border border-gray-500 placeholder-gray-500 text-white rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out w-full"
                    maxLength={30}
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <IconSearch width={24} height={24} classList="text-gray-500" />
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">Ver resultado</a>
                <Link href="/config" className="px-4 py-2 bg-black dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full ml-4">Empezar</Link>
              </div>
            </div>
            <UndrawThoughtProcess classList="hidden md:block w-[750px] h-[350px]" />
          </section>
        </article>

        <Features />

        <Preview />
      </main>
    </>
  )
}

export default Home