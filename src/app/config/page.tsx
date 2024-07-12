import { UndrawMobileDevelopment } from '@/assets/images'
import { IconBrandGithub, IconBrandGoogle, IconKey } from '../ui/icons/icons'

export default function Config() {
    return (
        <main className="container mx-auto px-6 md:py-16 text-center">
            <div className="grid md:grid-flow-col justify-between">
                <div className="m-auto md:hidden mb-4">
                    <UndrawMobileDevelopment width={300} height={150} />
                </div>
                <UndrawMobileDevelopment classList="hidden md:block w-[750px] h-[350px]" />
                <div>
                    <h2 className="text-4xl font-bold text-gray-500 md:text-gray-400">
                        API Key o Registro
                    </h2>
                    <p className="my-4">
                        Ingresa tu API key de OpenAI o regístrate con tu cuenta de GitHub o Google para probar Yuyay.
                    </p>
                    <div className="flex justify-center ">
                        <div className="relative w-4/5 md:w-4/6">
                            <input
                                type="text"
                                placeholder="Paste your API Key here..."
                                className="bg-transparent border border-gray-500 placeholder-gray-500 text-white rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out w-full"
                                maxLength={30}
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <IconKey width={24} height={24} classList="text-gray-500" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-7">
                        <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">
                            Usar API Key
                        </button>
                    </div>
                    <div className="my-2">ó</div>
                    <div className="flex justify-center">
                        <button className="flex px-4 py-2 bg-white text-black hover:border-[1px] dark:hover:border-0 dark:hover:bg-gray-200 hover:border-black rounded-full mr-4">
                            <IconBrandGoogle width={24} height={24} classList="me-2" />
                            <span className="hidden md:block">Continúa con Google</span>
                            <span className="md:hidden">Usar Google</span>
                        </button>
                        <button className="flex px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-full">
                            <IconBrandGithub width={24} height={24} classList="me-2" />
                            <span className="hidden md:block">Continúa con GitHub</span>
                            <span className="md:hidden">Usar GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-8 border-gray-500 md:hidden" />
        </main>
    )
}