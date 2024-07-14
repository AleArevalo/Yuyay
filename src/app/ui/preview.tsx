import MindMap from './mindmap'

const nodes = [
    { id: 'Educación', info: 'Área relacionada con estudios y aprendizaje.' },
    { id: 'Trabajo', info: 'Área relacionada con la vida laboral y profesional.' },
    { id: 'Ocio', info: 'Área relacionada con actividades recreativas y pasatiempos.' },
    { id: 'Deportes', info: 'Área relacionada con actividades deportivas y ejercicio.' },
    { id: 'Matemáticas', info: 'Asignatura de estudios.' },
    { id: 'Literatura', info: 'Asignatura de estudios.' },
    { id: 'Historia', info: 'Asignatura de estudios.' },
    { id: 'Ciencias', info: 'Asignatura de estudios.' },
    { id: 'Proyectos', info: 'Tareas y proyectos laborales.' },
    { id: 'Reuniones', info: 'Reuniones de trabajo.' },
    { id: 'Emails', info: 'Gestión de correos electrónicos.' },
    { id: 'Series', info: 'Series de televisión.' },
    { id: 'Películas', info: 'Películas vistas y por ver.' },
    { id: 'Libros', info: 'Libros leídos y pendientes.' },
    { id: 'Videojuegos', info: 'Videojuegos jugados y pendientes.' },
    { id: 'Fútbol', info: 'Actividades y eventos de fútbol.' },
    { id: 'Baloncesto', info: 'Actividades y eventos de baloncesto.' },
    { id: 'Gimnasio', info: 'Rutinas y sesiones de gimnasio.' },
    { id: 'Natación', info: 'Actividades y eventos de natación.' },
    { id: 'Amigos', info: 'Actividades y eventos con amigos.' },
    { id: 'Familia', info: 'Actividades y eventos familiares.' },
    { id: 'Hobbies', info: 'Pasatiempos y hobbies.' },
    { id: 'Viajes', info: 'Planes y recuerdos de viajes.' },
    { id: 'Mascotas', info: 'Cuidado y actividades con mascotas.' },
    { id: 'Cocina', info: 'Recetas y actividades culinarias.' },
    { id: 'Música', info: 'Gustos y actividades musicales.' },
    { id: 'Fotografía', info: 'Actividades y proyectos de fotografía.' },
    { id: 'Eventos Sociales', info: 'Participación en eventos sociales.' },
    // Nodos finales con datos específicos
    { id: 'Emails-Detalles', info: 'Detalles de correos electrónicos', registros: ['Email de confirmación de reserva', 'Email de trabajo', 'Email personal'] },
    { id: 'Series-Detalles', info: 'Detalles de series de televisión', registros: ['Breaking Bad', 'Stranger Things', 'Game of Thrones'] },
    { id: 'Películas-Detalles', info: 'Detalles de películas vistas y por ver', registros: ['Inception', 'The Matrix', 'Interstellar'] },
    { id: 'Libros-Detalles', info: 'Detalles de libros leídos y pendientes', registros: ['1984', 'Brave New World', 'Sapiens'] },
    { id: 'Videojuegos-Detalles', info: 'Detalles de videojuegos jugados y pendientes', registros: ['The Legend of Zelda', 'Super Mario', 'The Witcher 3'] },
    { id: 'Fútbol-Detalles', info: 'Detalles de actividades y eventos de fútbol', registros: ['Partido del fin de semana', 'Entrenamiento del martes'] },
    { id: 'Baloncesto-Detalles', info: 'Detalles de actividades y eventos de baloncesto', registros: ['Juego del miércoles', 'Entrenamiento del viernes'] },
    { id: 'Gimnasio-Detalles', info: 'Detalles de rutinas y sesiones de gimnasio', registros: ['Rutina de fuerza', 'Sesión de cardio'] },
    { id: 'Natación-Detalles', info: 'Detalles de actividades y eventos de natación', registros: ['Clase de natación', 'Competencia local'] },
    { id: 'Amigos-Detalles', info: 'Detalles de actividades y eventos con amigos', registros: ['Salida al cine', 'Cena en casa de Ana'] },
    { id: 'Familia-Detalles', info: 'Detalles de actividades y eventos familiares', registros: ['Reunión familiar', 'Cumpleaños de mamá'] },
    { id: 'Hobbies-Detalles', info: 'Detalles de pasatiempos y hobbies', registros: ['Pintura', 'Jardinería', 'Modelismo'] },
    { id: 'Viajes-Detalles', info: 'Detalles de planes y recuerdos de viajes', registros: ['Viaje a París', 'Vacaciones en la playa'] },
    { id: 'Mascotas-Detalles', info: 'Detalles de cuidado y actividades con mascotas', registros: ['Visita al veterinario', 'Paseo en el parque'] },
    { id: 'Cocina-Detalles', info: 'Detalles de recetas y actividades culinarias', registros: ['Receta de lasaña', 'Cena especial de Navidad'] },
    { id: 'Música-Detalles', info: 'Detalles de gustos y actividades musicales', registros: ['Concierto de rock', 'Playlist favorita'] },
    { id: 'Fotografía-Detalles', info: 'Detalles de actividades y proyectos de fotografía', registros: ['Sesión de fotos en el parque', 'Curso de fotografía'] },
    { id: 'Eventos Sociales-Detalles', info: 'Detalles de participación en eventos sociales', registros: ['Fiesta de Año Nuevo', 'Boda de un amigo'] }
]

const links = [
    { source: 'Educación', target: 'Matemáticas' },
    { source: 'Educación', target: 'Literatura' },
    { source: 'Educación', target: 'Historia' },
    { source: 'Educación', target: 'Ciencias' },
    { source: 'Educación', target: 'Libros' },
    { source: 'Trabajo', target: 'Proyectos' },
    { source: 'Trabajo', target: 'Reuniones' },
    { source: 'Trabajo', target: 'Emails' },
    { source: 'Ocio', target: 'Series' },
    { source: 'Ocio', target: 'Películas' },
    { source: 'Ocio', target: 'Libros' },
    { source: 'Ocio', target: 'Videojuegos' },
    { source: 'Deportes', target: 'Fútbol' },
    { source: 'Deportes', target: 'Baloncesto' },
    { source: 'Deportes', target: 'Gimnasio' },
    { source: 'Deportes', target: 'Natación' },
    // Enlaces cruzados
    { source: 'Matemáticas', target: 'Ciencias' },
    { source: 'Literatura', target: 'Historia' },
    { source: 'Ciencias', target: 'Gimnasio' },
    { source: 'Proyectos', target: 'Viajes' },
    { source: 'Reuniones', target: 'Eventos Sociales' },
    { source: 'Emails', target: 'Familia' },
    { source: 'Series', target: 'Películas' },
    { source: 'Películas', target: 'Libros' },
    { source: 'Libros', target: 'Videojuegos' },
    { source: 'Videojuegos', target: 'Mascotas' },
    { source: 'Fútbol', target: 'Amigos' },
    { source: 'Baloncesto', target: 'Amigos' },
    { source: 'Gimnasio', target: 'Natación' },
    { source: 'Amigos', target: 'Hobbies' },
    { source: 'Familia', target: 'Cocina' },
    { source: 'Hobbies', target: 'Música' },
    { source: 'Viajes', target: 'Fotografía' },
    { source: 'Mascotas', target: 'Fotografía' },
    { source: 'Cocina', target: 'Eventos Sociales' },
    { source: 'Música', target: 'Eventos Sociales' },
    { source: 'Fotografía', target: 'Eventos Sociales' },
    // Enlaces a nodos de detalles
    { source: 'Emails', target: 'Emails-Detalles' },
    { source: 'Series', target: 'Series-Detalles' },
    { source: 'Películas', target: 'Películas-Detalles' },
    { source: 'Libros', target: 'Libros-Detalles' },
    { source: 'Videojuegos', target: 'Videojuegos-Detalles' },
    { source: 'Fútbol', target: 'Fútbol-Detalles' },
    { source: 'Baloncesto', target: 'Baloncesto-Detalles' },
    { source: 'Gimnasio', target: 'Gimnasio-Detalles' },
    { source: 'Natación', target: 'Natación-Detalles' },
    { source: 'Amigos', target: 'Amigos-Detalles' },
    { source: 'Familia', target: 'Familia-Detalles' },
    { source: 'Hobbies', target: 'Hobbies-Detalles' },
    { source: 'Viajes', target: 'Viajes-Detalles' },
    { source: 'Mascotas', target: 'Mascotas-Detalles' },
    { source: 'Cocina', target: 'Cocina-Detalles' },
    { source: 'Música', target: 'Música-Detalles' },
    { source: 'Fotografía', target: 'Fotografía-Detalles' },
    { source: 'Eventos Sociales', target: 'Eventos Sociales-Detalles' }
]

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