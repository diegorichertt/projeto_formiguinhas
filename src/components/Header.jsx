import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../firebase/auth';

const Header = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authService.signOut();
        navigate('/');
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                {/* Logo */}
                <div className="navbar-brand">
                    <Link to="/" className="brand-link">
                        <h1>As Formiguinhas</h1>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-desktop">
                    <ul className="nav-links">
                        <li>
                            <button 
                                className="nav-link-btn" 
                                onClick={() => scrollToSection('inicio')}
                            >
                                Início
                            </button>
                        </li>
                        <li>
                            <button 
                                className="nav-link-btn" 
                                onClick={() => scrollToSection('sobre')}
                            >
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button 
                                className="nav-link-btn" 
                                onClick={() => scrollToSection('eventos')}
                            >
                                Eventos
                            </button>
                        </li>
                        <li>
                            <button 
                                className="nav-link-btn" 
                                onClick={() => scrollToSection('contato')}
                            >
                                Contato
                            </button>
                        </li>
                    </ul>

                    <div className="navbar-actions">
                        <button 
                            className="btn btn-primary"
                            onClick={() => scrollToSection('ajudar')}
                        >
                            Quero Ajudar
                        </button>

                        {isAuthenticated ? (
                            <div className="user-menu">
                                <div className="user-info">
                                    <i className="fas fa-user-circle"></i>
                                    <span className="user-name">
                                        {user?.displayName || user?.email?.split('@')[0] || 'Admin'}
                                    </span>
                                </div>
                                <div className="user-dropdown">
                                    <Link to="/admin" className="dropdown-link">
                                        <i className="fas fa-cog"></i>
                                        Painel Admin
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="dropdown-link logout-btn"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                        Sair
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/admin/login" className="btn btn-secondary">
                                <i className="fas fa-sign-in-alt"></i>
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li>
                            <button 
                                className="mobile-nav-link" 
                                onClick={() => scrollToSection('inicio')}
                            >
                                <i className="fas fa-home"></i>
                                Início
                            </button>
                        </li>
                        <li>
                            <button 
                                className="mobile-nav-link" 
                                onClick={() => scrollToSection('sobre')}
                            >
                                <i className="fas fa-info-circle"></i>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button 
                                className="mobile-nav-link" 
                                onClick={() => scrollToSection('eventos')}
                            >
                                <i className="fas fa-calendar-alt"></i>
                                Eventos
                            </button>
                        </li>
                        <li>
                            <button 
                                className="mobile-nav-link" 
                                onClick={() => scrollToSection('contato')}
                            >
                                <i className="fas fa-envelope"></i>
                                Contato
                            </button>
                        </li>
                        <li>
                            <button 
                                className="mobile-nav-link mobile-cta" 
                                onClick={() => scrollToSection('ajudar')}
                            >
                                <i className="fas fa-heart"></i>
                                Quero Ajudar
                            </button>
                        </li>
                    </ul>

                    <div className="mobile-auth">
                        {isAuthenticated ? (
                            <div className="mobile-user-menu">
                                <div className="mobile-user-info">
                                    <i className="fas fa-user-circle"></i>
                                    <span>{user?.displayName || user?.email?.split('@')[0] || 'Admin'}</span>
                                </div>
                                <div className="mobile-user-actions">
                                    <Link to="/admin" className="mobile-auth-link">
                                        <i className="fas fa-cog"></i>
                                        Painel Admin
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="mobile-auth-link logout"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                        Sair
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/admin/login" className="mobile-auth-link">
                                <i className="fas fa-sign-in-alt"></i>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
