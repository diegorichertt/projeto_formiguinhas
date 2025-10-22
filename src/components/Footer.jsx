import React from 'react';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer-modern">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">As Formiguinhas</h3>
                        <p className="footer-description">
                            Transformando pequenas atitudes em grandes mudanças. 
                            Juntos, construímos um mundo mais solidário.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">Navegação</h4>
                            <ul className="footer-list">
                                <li>
                                    <button 
                                        className="footer-link"
                                        onClick={() => scrollToSection('inicio')}
                                    >
                                        Início
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="footer-link"
                                        onClick={() => scrollToSection('sobre')}
                                    >
                                        Sobre Nós
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="footer-link"
                                        onClick={() => scrollToSection('eventos')}
                                    >
                                        Eventos
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="footer-link"
                                        onClick={() => scrollToSection('ajudar')}
                                    >
                                        Como Ajudar
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Contato</h4>
                            <ul className="footer-list">
                                <li>
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <span>asformiguinhas@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-item">
                                        <i className="fas fa-phone"></i>
                                        <span>(00) 00000-0000</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Cidade - Estado</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Como Ajudar</h4>
                            <ul className="footer-list">
                                <li>
                                    <span className="help-option">
                                        <i className="fas fa-hand-holding-heart"></i>
                                        Doação Mensal
                                    </span>
                                </li>
                                <li>
                                    <span className="help-option">
                                        <i className="fas fa-gift"></i>
                                        Doação de Itens
                                    </span>
                                </li>
                                <li>
                                    <span className="help-option">
                                        <i className="fas fa-users"></i>
                                        Voluntariado
                                    </span>
                                </li>
                                <li>
                                    <span className="help-option">
                                        <i className="fas fa-share-alt"></i>
                                        Compartilhar
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © 2024 As Formiguinhas. Todos os direitos reservados.
                        </p>
                        <p className="footer-mission">
                            Feito com <i className="fas fa-heart" style={{ color: 'var(--cor-primaria)' }}></i> para ajudar quem mais precisa
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
