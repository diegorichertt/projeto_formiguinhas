import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../firebase/auth';

const Header = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await authService.signOut();
        navigate('/');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-marca">
                    <h2>As Formiguinhas</h2>
                </div>
                <ul className="nav-menu">
                    <li>
                        <button 
                            className="nav-link" 
                            onClick={() => scrollToSection('inicio')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Início
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-link" 
                            onClick={() => scrollToSection('sobre')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Sobre
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-link" 
                            onClick={() => scrollToSection('eventos')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Eventos
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-link" 
                            onClick={() => scrollToSection('contato')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Contato
                        </button>
                    </li>
                    <li className="nav-login">
                        {isAuthenticated ? (
                            <>
                                <i className="fas fa-user"></i>
                                <span>{user?.displayName || user?.email || 'Admin'}</span>
                                <button 
                                    onClick={handleLogout}
                                    style={{ 
                                        marginLeft: '10px', 
                                        fontSize: '0.8em',
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer'
                                    }}
                                >
                                    (Sair)
                                </button>
                                <Link to="/admin" className="nav-link" style={{ marginLeft: '10px' }}>
                                    Admin
                                </Link>
                            </>
                        ) : (
                            <Link to="/admin/login" className="nav-link">
                                <i className="fas fa-user"></i> Login
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
