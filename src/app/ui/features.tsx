import { VoiceAssistant, UndrawSoftware, UndrawProudSelf } from '@/assets/images'

const Features = () => {
    return (
        <article id="project" className="bg-indigo-600 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl text-white font-bold text-center">Características</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 dark:bg-[#17181c] p-8 rounded-3xl shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">Transcripción de voz</h3>
                        <VoiceAssistant classList="w-full h-auto max-h-[250px]" />
                        <p className="mt-4 text-gray-600 dark:text-white">Habla como una nota de voz y la AI la guardará como una memoria</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#17181c] p-8 rounded-3xl shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">Mapa mental inteligente</h3>
                        <UndrawSoftware classList="w-full h-auto max-h-[250px]" />
                        <p className="mt-4 text-gray-600 dark:text-white">Las memorias serán presentadas como mapas dinámicos e interactivos</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#17181c] p-8 rounded-3xl shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">Memoria segmentada</h3>
                        <UndrawProudSelf classList="w-full h-auto max-h-[250px]" />
                        <p className="mt-4 text-gray-600 dark:text-white">Búsqueda rápida y precisa con resumen o como nota de voz</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Features