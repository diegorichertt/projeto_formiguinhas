import React from 'react';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero */}
            <section id="inicio" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Juntos somos <span className="destaque">mais fortes</span></h1>
                    <p className="hero-subtitle">As Formiguinhas – Solidariedade em ação</p>
                    <p className="hero-description">
                        Arrecadamos roupas, alimentos, brinquedos e muito mais para levar esperança e carinho
                        a quem mais precisa.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-first"
                            onClick={() => scrollToSection('eventos')}
                        >
                            Nossos Eventos
                        </button>
                        <button 
                            className="btn btn-second"
                            onClick={() => scrollToSection('contato')}
                        >
                            Seja Voluntário
                        </button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/Formiguinhas.png" alt="Logo As Formiguinhas" />
                </div>
            </section>

            {/* Sobre */}
            <section id="sobre" className="about">
                <div className="container">
                    <h2 className="section-title">Quem Somos</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                O grupo <strong>As Formiguinhas</strong> nasceu com o propósito de transformar pequenas
                                atitudes em grandes mudanças. Unidos, arrecadamos roupas, alimentos, brinquedos e também
                                produzimos itens para venda, revertendo todo o valor em solidariedade.
                            </p>
                            <p>
                                Nossa missão é levar apoio, dignidade e esperança para famílias em situação de vulnerabilidade.
                                Cada evento, cada doação e cada gesto de carinho faz parte dessa corrente do bem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eventos */}
            <section id="eventos" className="projects">
                <div className="container">
                    <h2 className="section-title">Nossos Eventos</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fa-solid fa-shirt"></i>
                            </div>
                            <div className="project-content">
                                <h3>Campanha do Agasalho</h3>
                                <p>Recolhimento de roupas e cobertores para aquecer famílias neste inverno.</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <i className="fa-solid fa-utensils"></i>
                            </div>
                            <div className="project-content">
                                <h3>Arrecadação de Alimentos</h3>
                                <p>Montamos cestas básicas para distribuir às comunidades carentes.</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <i className="fa-solid fa-gift"></i>
                            </div>
                            <div className="project-content">
                                <h3>Doe um Brinquedo</h3>
                                <p>Campanha de Natal para levar alegria às crianças.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato */}
            <section id="contato" className="contact">
                <div className="container">
                    <h2 className="section-title">Entre em Contato</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Faça parte dessa corrente</h3>
                            <p>Seja voluntário, participe dos eventos ou entre em contato para doar.</p>
                            <div className="contact-items">
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>asformiguinhas@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span>(00) 00000-0000</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Cidade - Estado</span>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
