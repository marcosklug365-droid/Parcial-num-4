import "../../styles/components/layout/Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cerrar menú al hacer clic fuera
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Botón hamburguesa */}
      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        ref={buttonRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <div
        className={`nav-links ${isOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/novedades"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              onClick={() => setIsOpen(false)}
            >
              Planes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
