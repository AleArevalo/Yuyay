import MindMap from './mindmap'

import { nodes, links } from '@/assets/data/demo-mindmap'

const Preview = () => {
    return (
        <article id="preview" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center">Vista previa</h2>
                <section className="flex mt-8 bg-white dark:bg-[#17181c] border-2 rounded-xl md:rounded-full">
                    <MindMap nodes={nodes} links={links} />
                </section>
                <div className="text-center py-4">
                    Prueba buscando en la memoria de simulación para ver cómo funciona
                </div>
                <div className="grid md:grid-cols-3 gap-4 mx-8">
                    <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">
                        ¿Cómo se multiplica dos números?
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">
                        ¿Última serie que deje pendiente?
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full">
                        Mis notas del curso de nodeJS
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Preview