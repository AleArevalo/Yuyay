import { IconSearch } from './ui/icons/icons'
import { VoiceAssistant, UndrawThoughtProcess, UndrawSoftware, UndrawProudSelf,  } from '@/assets/images'

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-6 pb-16 md:py-16 text-center">
        <div className="grid md:grid-flow-col justify-between">
          <UndrawThoughtProcess classList="m-auto md:hidden" width={300} height={250} />
          <div>
            <h1 className="text-4xl font-bold text-gray-400">Welcome to Yuyay</h1>
            <p className="my-4 text-gray-100">
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
              <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">Ver resultado</a>
              <a href="#" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full ml-4 hover:bg-gray-300">Empezar</a>
            </div>
          </div>
          <UndrawThoughtProcess classList="hidden md:block" width={750} height={350} />
        </div>
      </main>

      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Características</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600">Transcripción de voz</h3>
              <VoiceAssistant width={325} height={250} />
              <p className="mt-4 text-gray-600">Habla como una nota de voz y la AI la guardará como una memoria</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600">Mapa mental inteligente</h3>
              <UndrawSoftware width={325} height={250} />
              <p className="mt-4 text-gray-600">Las memorias serán presentadas como mapas dinámicos e interactivos</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600">Memoria segmentada</h3>
              <UndrawProudSelf width={325} height={250} />
              <p className="mt-4 text-gray-600">Búsqueda rápida y precisa con resumen o como nota de voz</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
