import '../styles/components/pages/ContactoPage.css';
import '../App.css';

const ContactoPages = () => {
    return (
        <main className="holder contacto">
            <div className="contacto-form">
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Tu email" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" id="telefono" name="telefono" placeholder="Tu teléfono" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>

            <div className="contacto-datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 43242388</li>
                    <li>Email: contacto@theredbeat.com.ar</li>
                    <li>Facebook: The Read Beat</li>
                    <li>Twitter: The Read Beat</li>
                    <li>Skype: The Read Beat</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPages;
