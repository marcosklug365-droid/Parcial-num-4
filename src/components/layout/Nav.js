import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Botón hamburguesa */}
            <button 
    className={`menu-toggle ${isOpen ? "open" : ""}`} 
    onClick={toggleMenu}
    aria-label="Abrir menú"
    aria-expanded={isOpen}
>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Links */}
            <div className={`nav-links ${isOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined }>
                            Planes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
