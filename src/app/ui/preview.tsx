import MindMap from './mindmap'

const nodes = [
    { id: 'Educativo', isMain: true, info: 'Este es el primer hijo.' },
    { id: 'Cinematografía', isMain: true, info: 'Este es el segundo hijo.' },
    { id: 'Memes', isMain: true, info: 'Este es el tercer hijo.' },
    { id: 'Matemáticas', isMain: false, info: 'Este es el primer hijo del primer hijo.' },
    { id: 'Literatura', isMain: false, info: 'Este es el segundo hijo del primer hijo.' },
    { id: 'Películas', isMain: false, info: 'Este es el primer hijo del segundo hijo.' },
    { id: 'Series', isMain: false, info: 'Este es el segundo hijo del segundo hijo.' },
    { id: 'Documentales', isMain: false, info: 'Este es el tercer hijo del segundo hijo.' },
    { id: 'Recuerdos', isMain: true, info: 'Recuerdos importantes.' },
    { id: 'Cumpleaños', isMain: false, info: 'Fechas de cumpleaños.' },
    { id: 'Oficina', isMain: false, info: 'Este es el cuarto hijo.' },
    { id: 'Lista negra', isMain: false, info: 'Este es el cuarto hijo.' },
    { id: 'Deportes', isMain: true, info: 'Este es el cuarto hijo.' },
    { id: 'Fútbol', isMain: false, info: 'Este es el primer hijo del cuarto hijo.' },
    { id: 'Baloncesto', isMain: false, info: 'Este es el segundo hijo del cuarto hijo.' },
    { id: 'Tenis', isMain: false, info: 'Este es el tercer hijo del cuarto hijo.' },
    { id: 'Ciencia', isMain: true, info: 'Este es el quinto hijo.' },
    { id: 'Biología', isMain: false, info: 'Este es el primer hijo del quinto hijo.' },
    { id: 'Química', isMain: false, info: 'Este es el segundo hijo del quinto hijo.' },
    { id: 'Física', isMain: false, info: 'Este es el tercer hijo del quinto hijo.' }
]

const links = [
    { source: 'Educativo', target: 'Matemáticas', value: 1 },
    { source: 'Educativo', target: 'Literatura', value: 1 },
    { source: 'Cinematografía', target: 'Películas', value: 1 },
    { source: 'Cinematografía', target: 'Series', value: 1 },
    { source: 'Cinematografía', target: 'Documentales', value: 1 },
    { source: 'Recuerdos', target: 'Cumpleaños', value: 1 },
    { source: 'Cumpleaños', target: 'Oficina', value: 1 },
    { source: 'Oficina', target: 'Lista negra', value: 1 },
    { source: 'Deportes', target: 'Fútbol', value: 1 },
    { source: 'Deportes', target: 'Baloncesto', value: 1 },
    { source: 'Deportes', target: 'Tenis', value: 1 },
    { source: 'Ciencia', target: 'Biología', value: 1 },
    { source: 'Ciencia', target: 'Química', value: 1 },
    { source: 'Ciencia', target: 'Física', value: 1 },
    { source: 'Literatura', target: 'Química', value: 1 }
]

const Preview = () => {
    return (
        <article id="preview" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center">Vista previa</h2>
                <section className="mt-8 bg-white dark:bg-[#17181c] rounded-full">
                    <MindMap nodes={nodes} links={links} />
                </section>
            </div>
        </article>
    )
}

export default Preview