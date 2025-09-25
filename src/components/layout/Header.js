import '../../styles/components/layout/Header.css';
import { useState, useEffect } from "react";

const Header = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <div 
                className="header-holder"
                style={{ transform: `translateY(${offset * 0.3}px)` }}
            >
                <img src="/imges/logo.png" alt="Transportes X" className="header-logo" />
                <div className="header-text">
                    <h1>The Red Beat</h1>
                    <p>Tranformá tu cuerpo.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
