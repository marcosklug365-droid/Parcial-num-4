import '../styles/components/pages/HomePage.css';
import '../App.css';

const HomePages = () => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="/imges/home/img01.jpg" alt="Interior del gimnasio The Red Beat" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Transformá tu vida.</h2>
                    <p>
                        Entrená con coaches certificados, equipamiento de última generación y una comunidad que te inspira a dar lo mejor de vos.
                        En nuestro gimnasio vas a encontrar un espacio diseñado para que alcances tus objetivos, ya sea mejorar tu rendimiento, ganar fuerza, perder peso o simplemente sentirte mejor cada día.
                        Combinamos entrenamientos funcionales, HIIT, fuerza y movilidad con planes adaptados a todos los niveles, desde principiantes hasta atletas experimentados.
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>+30 clases</h2>
                    <div className="testimonio">
                        <span className="cita">
                            Funcional, HIIT, movilidad y más todas las semanas.
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePages;
