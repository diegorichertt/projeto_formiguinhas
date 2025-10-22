import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../firebase/auth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!email.trim() || !password.trim()) {
            setError('Por favor, preencha todos os campos!');
            setLoading(false);
            return;
        }

        const result = await authService.signIn(email, password);
        
        if (result.success) {
            navigate('/admin');
        } else {
            setError(result.error || 'Erro no login. Tente novamente.');
        }
        
        setLoading(false);
    };

    return (
        <div className="login-modern">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="login-icon">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h1 className="login-title">Área Administrativa</h1>
                        <p className="login-subtitle">Acesso restrito para administradores</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div className="error-message">
                                <i className="fas fa-exclamation-triangle"></i>
                                {error}
                            </div>
                        )}
                        
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                <i className="fas fa-envelope"></i>
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                placeholder="Digite seu email"
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                <i className="fas fa-lock"></i>
                                Senha
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="Digite sua senha"
                                required 
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-large"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Entrando...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-sign-in-alt"></i>
                                    Entrar
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
