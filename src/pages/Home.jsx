import React from 'react';
import DonationSignupForm from '../components/DonationSignupForm';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section id="inicio" className="hero-modern">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <i className="fas fa-heart"></i>
                            <span>Solidariedade em Ação</span>
                        </div>
                        <h1 className="hero-title">
                            Juntos somos <span className="highlight">mais fortes</span>
                        </h1>
                        <p className="hero-description">
                            Transformamos pequenas atitudes em grandes mudanças. Arrecadamos roupas, 
                            alimentos, brinquedos e muito mais para levar esperança e carinho a quem mais precisa.
                        </p>
                        <div className="hero-actions">
                            <button 
                                className="btn btn-primary btn-large"
                                onClick={() => scrollToSection('ajudar')}
                            >
                                <i className="fas fa-hand-holding-heart"></i>
                                Quero Ajudar
                            </button>
                            <button 
                                className="btn btn-secondary btn-large"
                                onClick={() => scrollToSection('eventos')}
                            >
                                <i className="fas fa-calendar-alt"></i>
                                Nossos Eventos
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Famílias Ajudadas</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Eventos Realizados</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Voluntários</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <img src="/Formiguinhas.png" alt="As Formiguinhas - Grupo de Solidariedade" />
                            <div className="hero-floating-card">
                                <div className="floating-card-content">
                                    <i className="fas fa-gift"></i>
                                    <span>Doe amor, receba gratidão</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre" className="about-modern">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Sobre Nós</span>
                        <h2 className="section-title">Quem Somos</h2>
                        <p className="section-subtitle">
                            Uma história de solidariedade que transforma vidas
                        </p>
                    </div>
                    <div className="about-grid">
                        <div className="about-content">
                            <div className="about-text">
                                <p className="lead">
                                    O grupo <strong>As Formiguinhas</strong> nasceu com o propósito de transformar 
                                    pequenas atitudes em grandes mudanças.
                                </p>
                                <p>
                                    Unidos, arrecadamos roupas, alimentos, brinquedos e também produzimos itens para 
                                    venda, revertendo todo o valor em solidariedade. Nossa missão é levar apoio, 
                                    dignidade e esperança para famílias em situação de vulnerabilidade.
                                </p>
                                <div className="about-features">
                                    <div className="feature-item">
                                        <i className="fas fa-heart"></i>
                                        <span>Solidariedade</span>
                                    </div>
                                    <div className="feature-item">
                                        <i className="fas fa-users"></i>
                                        <span>Comunidade</span>
                                    </div>
                                    <div className="feature-item">
                                        <i className="fas fa-hands-helping"></i>
                                        <span>Suporte</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-visual">
                            <div className="about-image-placeholder">
                                <i className="fas fa-image"></i>
                                <span>Imagem do grupo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section id="eventos" className="events-modern">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Nossos Eventos</span>
                        <h2 className="section-title">Como Atuamos</h2>
                        <p className="section-subtitle">
                            Diversas formas de ajudar e fazer a diferença na comunidade
                        </p>
                    </div>
                    <div className="events-grid">
                        <div className="event-card">
                            <div className="event-image">
                                <div className="event-image-placeholder">
                                    <i className="fas fa-shirt"></i>
                                </div>
                                <div className="event-badge">Campanha</div>
                            </div>
                            <div className="event-content">
                                <h3>Campanha do Agasalho</h3>
                                <p>Recolhimento de roupas e cobertores para aquecer famílias durante o inverno.</p>
                                <div className="event-meta">
                                    <span className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        Todo o ano
                                    </span>
                                    <span className="event-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Diversos locais
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="event-image">
                                <div className="event-image-placeholder">
                                    <i className="fas fa-utensils"></i>
                                </div>
                                <div className="event-badge">Arrecadação</div>
                            </div>
                            <div className="event-content">
                                <h3>Arrecadação de Alimentos</h3>
                                <p>Montamos cestas básicas nutritivas para distribuir às comunidades carentes.</p>
                                <div className="event-meta">
                                    <span className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        Mensal
                                    </span>
                                    <span className="event-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Comunidades locais
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="event-image">
                                <div className="event-image-placeholder">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <div className="event-badge">Especial</div>
                            </div>
                            <div className="event-content">
                                <h3>Doe um Brinquedo</h3>
                                <p>Campanha de Natal para levar alegria e esperança às crianças carentes.</p>
                                <div className="event-meta">
                                    <span className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        Dezembro
                                    </span>
                                    <span className="event-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Orfanatos e comunidades
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="event-image">
                                <div className="event-image-placeholder">
                                    <i className="fas fa-baby"></i>
                                </div>
                                <div className="event-badge">Contínuo</div>
                            </div>
                            <div className="event-content">
                                <h3>Kit Bebê</h3>
                                <p>Fornecemos enxovais e itens essenciais para bebês de famílias em situação de vulnerabilidade.</p>
                                <div className="event-meta">
                                    <span className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        Contínuo
                                    </span>
                                    <span className="event-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Hospitais e comunidades
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section id="ajudar" className="help-modern">
                <div className="container">
                    <div className="help-container">
                        <div className="help-content">
                            <div className="help-header">
                                <span className="section-badge">Como Ajudar</span>
                                <h2 className="section-title">Faça Parte da Mudança</h2>
                                <p className="section-subtitle">
                                    Sua contribuição faz a diferença na vida de muitas famílias
                                </p>
                            </div>
                            <div className="help-benefits">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-baby"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Kit de Higiene</h4>
                                        <p>Para bebês e crianças</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-tshirt"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Roupas</h4>
                                        <p>Para toda a família</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-shopping-basket"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Cesta Básica</h4>
                                        <p>Alimentos nutritivos</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-puzzle-piece"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Brinquedos</h4>
                                        <p>Educativos e seguros</p>
                                    </div>
                                </div>
                            </div>
                            <div className="help-impact">
                                <div className="impact-card">
                                    <div className="impact-number">R$ 25</div>
                                    <div className="impact-text">por mês</div>
                                </div>
                                <div className="impact-arrow">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                                <div className="impact-card">
                                    <div className="impact-number">1</div>
                                    <div className="impact-text">família ajudada</div>
                                </div>
                            </div>
                        </div>
                        <div className="help-form-container">
                            <DonationSignupForm onSubmit={(data) => {
                                console.log('Donation signup:', data);
                                alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
                            }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section - Moved to Footer */}
            <section id="contato" className="contact-modern">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-header">
                            <h2 className="section-title">Entre em Contato</h2>
                            <p className="section-subtitle">
                                Faça parte dessa corrente do bem. Seja voluntário, participe dos eventos ou entre em contato para doar.
                            </p>
                        </div>
                        <div className="contact-grid">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Email</h4>
                                    <p>asformiguinhas@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Telefone</h4>
                                    <p>(00) 00000-0000</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Localização</h4>
                                    <p>Cidade - Estado</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-social">
                            <h4>Nos siga nas redes sociais</h4>
                            <div className="social-links">
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
