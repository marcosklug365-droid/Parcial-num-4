import '../styles/components/pages/NosotrosPage.css';
import '../App.css';
const NosotrosPages = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Sobre Nosotros</h2>
                <p>Somos un gimnasio enfocado en ayudarte a alcanzar tus objetivos con entrenadores certificados, tecnología de punta y un ambiente motivador.</p>
                <p>Diseñamos programas personalizados según tus metas: rendimiento, pérdida de peso, ganancia muscular o bienestar general.</p>
                <ul className="features">
              <li>Entrenadores certificados y atención cercana</li>
              <li>Planes y rutinas a medida</li>
              <li>Equipamiento de última generación</li>
              <li>Comunidad activa y motivadora</li>
            </ul>
            </div>
            <div className="staff">
                <h2>Nuestro Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/imges/nosotros/nosotros1.jpeg" alt="Juan Gomez" />
                        <h5>Luca Álvarez</h5>
                        <h6>Fuerza e hipertrofia</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="/imges/nosotros/nosotros2.jpeg" alt="Juan Gomez" />
                        <h5>María Vega</h5>
                        <h6>Funcional y HIIT</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="/imges/nosotros/nosotros3.jpg" alt="Juan Gomez" />
                        <h5>Nico Suárez</h5>
                        <h6>Running y movilidad</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="/imges/nosotros/nosotros4.jpg" alt="Juan Gomez" />
                        <h5>Sofía Ramírez</h5>
                        <h6>Yoga y pilates</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPages;