import React from 'react';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2025 As Formiguinhas. Todos os direitos reservados.</p>
                    <div className="footer-links">
                        <button 
                            onClick={() => scrollToSection('inicio')}
                            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Início
                        </button>
                        <button 
                            onClick={() => scrollToSection('sobre')}
                            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Sobre
                        </button>
                        <button 
                            onClick={() => scrollToSection('eventos')}
                            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Eventos
                        </button>
                        <button 
                            onClick={() => scrollToSection('contato')}
                            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Contato
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
