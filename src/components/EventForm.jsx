import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        type: 'arrecadacao'
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
                <label htmlFor="title" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                }}>
                    Título do Evento *
                </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={formData.title}
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
                <label htmlFor="description">Descrição</label>
                <textarea 
                    id="description" 
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Data do Evento</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Local</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="type">Tipo de Evento</label>
                <select 
                    id="type" 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="arrecadacao">Arrecadação</option>
                    <option value="distribuicao">Distribuição</option>
                    <option value="evento">Evento</option>
                    <option value="campanha">Campanha</option>
                </select>
            </div>
            <button type="submit" className="btn btn-first">Salvar Evento</button>
        </form>
    );
};

export default EventForm;
