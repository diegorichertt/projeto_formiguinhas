import React, { useState } from 'react';

const DonationSignupForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        donationAmount: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h3 style={{ 
                color: 'var(--cor-primaria)', 
                marginBottom: '20px',
                fontSize: '1.5rem',
                fontWeight: '700',
                textAlign: 'center'
            }}>
                Quero Ajudar As Formiguinhas
            </h3>
            
            <div className="form-group">
                <label htmlFor="name" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Nome Completo *
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1.1rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Email *
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1.1rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Telefone
                </label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1.1rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="donationAmount" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Valor da Doação Mensal (R$) *
                </label>
                <select 
                    id="donationAmount" 
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1.1rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontFamily: 'inherit'
                    }}
                >
                    <option value="">Selecione um valor</option>
                    <option value="25">R$ 25,00</option>
                    <option value="50">R$ 50,00</option>
                    <option value="100">R$ 100,00</option>
                    <option value="200">R$ 200,00</option>
                    <option value="outro">Outro valor</option>
                </select>
            </div>

            <button 
                type="submit" 
                className="btn btn-first"
                style={{ 
                    width: '100%',
                    marginTop: '20px',
                    fontSize: '1.2rem',
                    padding: '18px'
                }}
            >
                Quero Ser um Doador Mensal
            </button>

            <p style={{ 
                textAlign: 'center', 
                marginTop: '15px',
                fontSize: '0.9rem',
                color: '#666'
            }}>
                * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
        </form>
    );
};

export default DonationSignupForm;
