import MindMap from './mindmap'

const nodes = [
    { id: 'Root' },
    { id: 'Child 1' },
    { id: 'Child 2' },
    { id: 'Child 3' },
    { id: 'Child 1.1' },
    { id: 'Child 1.2' },
    { id: 'Child 2.1' },
    { id: 'Child 2.2' },
]

const links = [
    { source: 'Root', target: 'Child 1' },
    { source: 'Root', target: 'Child 2' },
    { source: 'Root', target: 'Child 3' },
    { source: 'Child 1', target: 'Child 1.1' },
    { source: 'Child 1', target: 'Child 1.2' },
    { source: 'Child 2', target: 'Child 2.1' },
    { source: 'Child 2', target: 'Child 2.2' },
]

const Preview = () => {
    return (
        <article id="preview" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl text-white font-bold text-center">Vista previa</h2>
                <section className="mt-8 bg-white">
                    <MindMap nodes={nodes} links={links} />
                </section>
            </div>
        </article>
    )
}

export default Preview