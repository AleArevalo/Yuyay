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
            </div>
        </article>
    )
}

export default Preview