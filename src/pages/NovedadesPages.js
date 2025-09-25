import '../App.css';
import '../styles/components/pages/NovedadesPage.css';

const NovedadesPages = () => {
    return (
        <section className="holder novedades-page">
            <div className="novedad">
                <h1>Básico</h1>
                <h2>$20/ mes</h2>
                <ul class="plan-features">
                    <li>Acceso ilimitado al gimnasio</li>
                    <li>Horarios flexibles</li>
                    <li>Locker de cortesía</li>
                </ul><hr />
            </div>
            <div className="novedad">
                <h1>Intermedio</h1>
                <h2>$35/ mes</h2>
                <ul class="plan-features">
                    <li>Todo lo del Básico</li>
                    <li>Clases grupales ilimitadas</li>
                    <li>1 invitación al mes</li>
                </ul>
                    <hr />
            </div>
            <div className="novedad">
                <h1>Premium</h1>
                <h2>$50/ mes</h2>
                <ul class="plan-features">
                    <li>Todo lo del Intermedio</li>
                    <li>Entrenador personal 2x semana</li>
                    <li>Plan nutricional</li>
                    <li>Evaluación corporal mensual</li>
                </ul><hr />
            </div>
        </section>
    );
}

export default NovedadesPages;
