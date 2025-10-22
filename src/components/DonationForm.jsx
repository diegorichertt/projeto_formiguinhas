import React, { useState } from 'react';

const DonationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        type: 'roupas',
        description: '',
        quantity: '',
        donorName: '',
        donorContact: ''
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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="type" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Tipo de Doação *
                </label>
                <select 
                    id="type" 
                    name="type"
                    value={formData.type}
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
                    <option value="roupas">Roupas</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="brinquedos">Brinquedos</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="outros">Outros</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea 
                    id="description" 
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantidade</label>
                <input 
                    type="text" 
                    id="quantity" 
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="donorName">Nome do Doador</label>
                <input 
                    type="text" 
                    id="donorName" 
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="donorContact">Contato do Doador</label>
                <input 
                    type="text" 
                    id="donorContact" 
                    name="donorContact"
                    value={formData.donorContact}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-first">Registrar Doação</button>
        </form>
    );
};

export default DonationForm;
