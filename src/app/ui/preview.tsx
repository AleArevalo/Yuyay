import MindMap from './mindmap'

const nodes = [
    { id: 'Educación', isMain: true, info: 'Área relacionada con estudios y aprendizaje.' },
    { id: 'Trabajo', isMain: true, info: 'Área relacionada con la vida laboral y profesional.' },
    { id: 'Ocio', isMain: true, info: 'Área relacionada con actividades recreativas y pasatiempos.' },
    { id: 'Deportes', isMain: true, info: 'Área relacionada con actividades deportivas y ejercicio.' },
    { id: 'Matemáticas', isMain: false, info: 'Asignatura de estudios.' },
    { id: 'Literatura', isMain: false, info: 'Asignatura de estudios.' },
    { id: 'Historia', isMain: false, info: 'Asignatura de estudios.' },
    { id: 'Ciencias', isMain: false, info: 'Asignatura de estudios.' },
    { id: 'Proyectos', isMain: false, info: 'Tareas y proyectos laborales.' },
    { id: 'Reuniones', isMain: false, info: 'Reuniones de trabajo.' },
    { id: 'Emails', isMain: false, info: 'Gestión de correos electrónicos.' },
    { id: 'Series', isMain: false, info: 'Series de televisión.' },
    { id: 'Películas', isMain: false, info: 'Películas vistas y por ver.' },
    { id: 'Libros', isMain: false, info: 'Libros leídos y pendientes.' },
    { id: 'Videojuegos', isMain: false, info: 'Videojuegos jugados y pendientes.' },
    { id: 'Fútbol', isMain: false, info: 'Actividades y eventos de fútbol.' },
    { id: 'Baloncesto', isMain: false, info: 'Actividades y eventos de baloncesto.' },
    { id: 'Gimnasio', isMain: false, info: 'Rutinas y sesiones de gimnasio.' },
    { id: 'Natación', isMain: false, info: 'Actividades y eventos de natación.' },
    { id: 'Amigos', isMain: false, info: 'Actividades y eventos con amigos.' },
    { id: 'Familia', isMain: false, info: 'Actividades y eventos familiares.' },
    { id: 'Hobbies', isMain: false, info: 'Pasatiempos y hobbies.' },
    { id: 'Viajes', isMain: false, info: 'Planes y recuerdos de viajes.' },
    { id: 'Mascotas', isMain: false, info: 'Cuidado y actividades con mascotas.' },
    { id: 'Cocina', isMain: false, info: 'Recetas y actividades culinarias.' },
    { id: 'Música', isMain: false, info: 'Gustos y actividades musicales.' },
    { id: 'Fotografía', isMain: false, info: 'Actividades y proyectos de fotografía.' },
    { id: 'Eventos Sociales', isMain: false, info: 'Participación en eventos sociales.' }
]

const links = [
    { source: 'Educación', target: 'Matemáticas', value: 1 },
    { source: 'Educación', target: 'Literatura', value: 1 },
    { source: 'Educación', target: 'Historia', value: 1 },
    { source: 'Educación', target: 'Ciencias', value: 1 },
    { source: 'Educación', target: 'Libros', value: 1 },
    { source: 'Trabajo', target: 'Proyectos', value: 1 },
    { source: 'Trabajo', target: 'Reuniones', value: 1 },
    { source: 'Trabajo', target: 'Emails', value: 1 },
    { source: 'Ocio', target: 'Series', value: 1 },
    { source: 'Ocio', target: 'Películas', value: 1 },
    { source: 'Ocio', target: 'Libros', value: 1 },
    { source: 'Ocio', target: 'Videojuegos', value: 1 },
    { source: 'Deportes', target: 'Fútbol', value: 1 },
    { source: 'Deportes', target: 'Baloncesto', value: 1 },
    { source: 'Deportes', target: 'Gimnasio', value: 1 },
    { source: 'Deportes', target: 'Natación', value: 1 },

    // Enlaces cruzados
    { source: 'Matemáticas', target: 'Ciencias', value: 1 },
    { source: 'Literatura', target: 'Historia', value: 1 },
    { source: 'Ciencias', target: 'Gimnasio', value: 1 },
    { source: 'Proyectos', target: 'Viajes', value: 1 },
    { source: 'Reuniones', target: 'Eventos Sociales', value: 1 },
    { source: 'Emails', target: 'Familia', value: 1 },
    { source: 'Series', target: 'Películas', value: 1 },
    { source: 'Películas', target: 'Libros', value: 1 },
    { source: 'Libros', target: 'Videojuegos', value: 1 },
    { source: 'Videojuegos', target: 'Mascotas', value: 1 },
    { source: 'Fútbol', target: 'Amigos', value: 1 },
    { source: 'Baloncesto', target: 'Amigos', value: 1 },
    { source: 'Gimnasio', target: 'Natación', value: 1 },
    { source: 'Amigos', target: 'Hobbies', value: 1 },
    { source: 'Familia', target: 'Cocina', value: 1 },
    { source: 'Hobbies', target: 'Música', value: 1 },
    { source: 'Viajes', target: 'Fotografía', value: 1 },
    { source: 'Mascotas', target: 'Fotografía', value: 1 },
    { source: 'Cocina', target: 'Eventos Sociales', value: 1 },
    { source: 'Música', target: 'Eventos Sociales', value: 1 },
    { source: 'Fotografía', target: 'Eventos Sociales', value: 1 }
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