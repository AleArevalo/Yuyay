import MindMap from './mindmap'

const nodes = [
    { id: 'Yuyay', info: 'Este es el nodo raíz.' },
    { id: 'Educativo', info: 'Este es el primer hijo.' },
    { id: 'Cinematografía', info: 'Este es el segundo hijo.' },
    { id: 'Memes', info: 'Este es el tercer hijo.' },
    { id: 'Matemáticas', info: 'Este es el primer hijo del primer hijo.' },
    { id: 'Literatura', info: 'Este es el segundo hijo del primer hijo.' },
    { id: 'Películas', info: 'Este es el primer hijo del segundo hijo.' },
    { id: 'Series', info: 'Este es el segundo hijo del segundo hijo.' },
    { id: 'Documentales', info: 'Este es el tercer hijo del segundo hijo.' },
    { id: 'Recuerdos', info: 'Recuerdos importantes.' },
    { id: 'Cumpleaños', info: 'Fechas de cumpleaños.' },
    { id: 'Oficina', info: 'Este es el cuarto hijo.' },
    { id: 'Lista negra', info: 'Este es el cuarto hijo.' },
    { id: 'Deportes', info: 'Este es el cuarto hijo.' },
    { id: 'Fútbol', info: 'Este es el primer hijo del cuarto hijo.' },
    { id: 'Baloncesto', info: 'Este es el segundo hijo del cuarto hijo.' },
    { id: 'Tenis', info: 'Este es el tercer hijo del cuarto hijo.' },
    { id: 'Ciencia', info: 'Este es el quinto hijo.' },
    { id: 'Biología', info: 'Este es el primer hijo del quinto hijo.' },
    { id: 'Química', info: 'Este es el segundo hijo del quinto hijo.' },
    { id: 'Física', info: 'Este es el tercer hijo del quinto hijo.' }
]

const links = [
    { source: 'Yuyay', target: 'Memes' },
    { source: 'Yuyay', target: 'Educativo' },
    { source: 'Educativo', target: 'Matemáticas' },
    { source: 'Educativo', target: 'Literatura' },
    { source: 'Yuyay', target: 'Cinematografía' },
    { source: 'Cinematografía', target: 'Películas' },
    { source: 'Cinematografía', target: 'Series' },
    { source: 'Cinematografía', target: 'Documentales' },
    { source: 'Yuyay', target: 'Recuerdos' },
    { source: 'Recuerdos', target: 'Cumpleaños' },
    { source: 'Cumpleaños', target: 'Oficina' },
    { source: 'Oficina', target: 'Lista negra' },
    { source: 'Yuyay', target: 'Deportes' },
    { source: 'Deportes', target: 'Fútbol' },
    { source: 'Deportes', target: 'Baloncesto' },
    { source: 'Deportes', target: 'Tenis' },
    { source: 'Yuyay', target: 'Ciencia' },
    { source: 'Ciencia', target: 'Biología' },
    { source: 'Ciencia', target: 'Química' },
    { source: 'Ciencia', target: 'Física' }
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