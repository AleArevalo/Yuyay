import Image from 'next/image'
import { VoiceAssistant, UndrawThoughtProcess, UndrawSoftware, UndrawProudSelf } from './ui/icons/icons'

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-6 py-16 text-center">
        <div className="grid grid-flow-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-400">Welcome to Yuyay</h1>
            <p className="my-4 text-gray-100">
              The modern way to organize your thoughts with AI-powered mind maps.
            </p>
            <input
              type="text"
              placeholder="Buscar en la mente de Yuyay..."
              className="bg-transparent border border-gray-500 placeholder-gray-500 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out w-4/6"
            />
            <div className="mt-8">
              <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Ver resultado</a>
              <a href="#" className="px-4 py-2 bg-gray-200 text-gray-800 rounded ml-4 hover:bg-gray-300">Empezar</a>
            </div>
          </div>
          <div>
            <VoiceAssistant width={550} height={250} />
          </div>
        </div>
      </main>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Características</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded shadow-md text-center">
              <h3 className="text-xl font-bold">Feature 1</h3>
              <p className="mt-4 text-gray-600">Description of Feature 1</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md text-center">
              <h3 className="text-xl font-bold">Feature 2</h3>
              <p className="mt-4 text-gray-600">Description of Feature 2</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md text-center">
              <h3 className="text-xl font-bold">Feature 3</h3>
              <p className="mt-4 text-gray-600">Description of Feature 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
