import React, { useState } from 'react';

const VolunteerForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        skills: '',
        availability: 'finais-semana'
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
                <label htmlFor="name">Nome Completo</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="skills">Habilidades/Interesses</label>
                <textarea 
                    id="skills" 
                    name="skills"
                    rows="3"
                    placeholder="Ex: Organização de eventos, cozinha, transporte..."
                    value={formData.skills}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="availability">Disponibilidade</label>
                <select 
                    id="availability" 
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                >
                    <option value="finais-semana">Finais de semana</option>
                    <option value="dias-uteis">Dias úteis</option>
                    <option value="feriados">Feriados</option>
                    <option value="flexivel">Flexível</option>
                </select>
            </div>
            <button type="submit" className="btn btn-first">Cadastrar Voluntário</button>
        </form>
    );
};

export default VolunteerForm;
