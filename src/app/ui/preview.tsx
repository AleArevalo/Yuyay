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
    { source: 'Yuyay', target: 'Memes', value: 1 },
    { source: 'Yuyay', target: 'Educativo', value: 1 },
    { source: 'Educativo', target: 'Matemáticas', value: 1 },
    { source: 'Educativo', target: 'Literatura', value: 1 },
    { source: 'Yuyay', target: 'Cinematografía', value: 1 },
    { source: 'Cinematografía', target: 'Películas', value: 1 },
    { source: 'Cinematografía', target: 'Series', value: 1 },
    { source: 'Cinematografía', target: 'Documentales', value: 1 },
    { source: 'Yuyay', target: 'Recuerdos', value: 1 },
    { source: 'Recuerdos', target: 'Cumpleaños', value: 1 },
    { source: 'Cumpleaños', target: 'Oficina', value: 1 },
    { source: 'Oficina', target: 'Lista negra', value: 1 },
    { source: 'Yuyay', target: 'Deportes', value: 1 },
    { source: 'Deportes', target: 'Fútbol', value: 1 },
    { source: 'Deportes', target: 'Baloncesto', value: 1 },
    { source: 'Deportes', target: 'Tenis', value: 1 },
    { source: 'Yuyay', target: 'Ciencia', value: 1 },
    { source: 'Ciencia', target: 'Biología', value: 1 },
    { source: 'Ciencia', target: 'Química', value: 1 },
    { source: 'Ciencia', target: 'Física', value: 1 },
    { source: 'Literatura', target: 'Química', value: 1 }
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