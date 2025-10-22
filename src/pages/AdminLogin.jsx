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
        <section className="login-section">
            <div className="container">
                <div className="login-box">
                    <h2>Área Administrativa</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div style={{ 
                                color: 'var(--cor-primaria)', 
                                textAlign: 'center', 
                                marginBottom: '10px' 
                            }}>
                                {error}
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">
                                <i className="fas fa-envelope"></i> Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="fas fa-lock"></i> Senha
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-first"
                            disabled={loading}
                        >
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;
