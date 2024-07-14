import MindMap from './mindmap'

const data = {
    name: 'Root',
    children: [
        {
            name: 'Child 1',
            children: [
                {
                    name: 'Child 1.1',
                    children: [
                        { name: 'Child 1.1.1' },
                        { name: 'Child 1.1.2' },
                    ],
                },
                { name: 'Child 1.2' },
            ],
        },
        {
            name: 'Child 2',
            children: [
                {
                    name: 'Child 2.1',
                    children: [
                        { name: 'Child 2.1.1' },
                        { name: 'Child 2.1.2' },
                    ],
                },
                { name: 'Child 2.2' },
            ],
        },
        {
            name: 'Child 3',
            children: [
                { name: 'Child 3.1' },
                { name: 'Child 3.2' },
            ],
        },
    ],
}

const Preview = () => {
    return (
        <article id="preview" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl text-white font-bold text-center">Vista previa</h2>
                <section className="mt-8 bg-white">
                    <MindMap data={data} />
                </section>
            </div>
        </article>
    )
}

export default Preview