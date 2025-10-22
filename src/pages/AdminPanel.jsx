import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../firebase/auth';
import { firestoreService } from '../firebase/firestore';
import Modal from '../components/Modal';
import EventForm from '../components/EventForm';
import DonationForm from '../components/DonationForm';
import VolunteerForm from '../components/VolunteerForm';
import StatsCard from '../components/StatsCard';

const AdminPanel = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState({ events: 0, donations: 0, volunteers: 0 });
    const [modal, setModal] = useState({ isOpen: false, type: null, data: null });

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin/login');
            return;
        }
        loadStats();
    }, [isAuthenticated, navigate]);

    const loadStats = async () => {
        try {
            const [eventsResult, donationsResult, volunteersResult] = await Promise.all([
                firestoreService.getEvents(),
                firestoreService.getDonations(),
                firestoreService.getVolunteers()
            ]);

            setStats({
                events: eventsResult.success ? eventsResult.data.length : 0,
                donations: donationsResult.success ? donationsResult.data.length : 0,
                volunteers: volunteersResult.success ? volunteersResult.data.length : 0
            });
        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
        }
    };

    const handleLogout = async () => {
        await authService.signOut();
        navigate('/');
    };

    const openModal = (type, data = null) => {
        setModal({ isOpen: true, type, data });
    };

    const closeModal = () => {
        setModal({ isOpen: false, type: null, data: null });
    };

    const handleFormSubmit = async (formData, type) => {
        let result;
        
        switch (type) {
            case 'event':
                result = await firestoreService.addEvent(formData);
                break;
            case 'donation':
                result = await firestoreService.addDonation(formData);
                break;
            case 'volunteer':
                result = await firestoreService.addVolunteer(formData);
                break;
            default:
                return;
        }

        if (result.success) {
            alert(`${type === 'event' ? 'Evento' : type === 'donation' ? 'Doação' : 'Voluntário'} adicionado com sucesso!`);
            closeModal();
            loadStats(); // Refresh stats
        } else {
            alert(`Erro ao adicionar ${type}: ${result.error}`);
        }
    };

    const renderModalContent = () => {
        switch (modal.type) {
            case 'add-event':
                return <EventForm onSubmit={(data) => handleFormSubmit(data, 'event')} />;
            case 'add-donation':
                return <DonationForm onSubmit={(data) => handleFormSubmit(data, 'donation')} />;
            case 'add-volunteer':
                return <VolunteerForm onSubmit={(data) => handleFormSubmit(data, 'volunteer')} />;
            case 'list-events':
                return <EventList />;
            case 'list-donations':
                return <DonationList />;
            case 'list-volunteers':
                return <VolunteerList />;
            default:
                return null;
        }
    };

    return (
        <div className="admin-modern">
            {/* Admin Header */}
            <section className="admin-header">
                <div className="container">
                    <div className="admin-header-content">
                        <div className="admin-welcome">
                            <div className="admin-avatar">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <div className="admin-info">
                                <h1 className="admin-title">Painel Administrativo</h1>
                                <p className="admin-subtitle">
                                    Bem-vindo, {user?.displayName || user?.email?.split('@')[0] || 'Administrador'}
                                </p>
                            </div>
                        </div>
                        <div className="admin-actions">
                            <button 
                                className="btn btn-secondary"
                                onClick={handleLogout}
                            >
                                <i className="fas fa-sign-out-alt"></i>
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="admin-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number">{stats.events}</div>
                                <div className="stat-label">Eventos Ativos</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-hand-holding-heart"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number">{stats.donations}</div>
                                <div className="stat-label">Doações Registradas</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number">{stats.volunteers}</div>
                                <div className="stat-label">Voluntários Cadastrados</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Satisfação</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admin Actions */}
            <section className="admin-actions-section">
                <div className="container">
                    <div className="admin-grid">
                        {/* Eventos */}
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <div className="card-icon">
                                    <i className="fas fa-calendar"></i>
                                </div>
                                <div className="card-info">
                                    <h3>Gerenciar Eventos</h3>
                                    <p>Crie e gerencie eventos da organização</p>
                                </div>
                            </div>
                            <div className="admin-card-actions">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => openModal('add-event')}
                                >
                                    <i className="fas fa-plus"></i>
                                    Adicionar Evento
                                </button>
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => openModal('list-events')}
                                >
                                    <i className="fas fa-list"></i>
                                    Listar Eventos
                                </button>
                            </div>
                        </div>

                        {/* Doações */}
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <div className="card-icon">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <div className="card-info">
                                    <h3>Controle de Doações</h3>
                                    <p>Registre e acompanhe doações recebidas</p>
                                </div>
                            </div>
                            <div className="admin-card-actions">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => openModal('add-donation')}
                                >
                                    <i className="fas fa-plus"></i>
                                    Registrar Doação
                                </button>
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => openModal('list-donations')}
                                >
                                    <i className="fas fa-chart-bar"></i>
                                    Relatório de Doações
                                </button>
                            </div>
                        </div>

                        {/* Voluntários */}
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <div className="card-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="card-info">
                                    <h3>Voluntários</h3>
                                    <p>Gerencie voluntários e colaboradores</p>
                                </div>
                            </div>
                            <div className="admin-card-actions">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => openModal('add-volunteer')}
                                >
                                    <i className="fas fa-user-plus"></i>
                                    Cadastrar Voluntário
                                </button>
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => openModal('list-volunteers')}
                                >
                                    <i className="fas fa-list"></i>
                                    Lista de Voluntários
                                </button>
                            </div>
                        </div>

                        {/* Configurações */}
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <div className="card-icon">
                                    <i className="fas fa-cog"></i>
                                </div>
                                <div className="card-info">
                                    <h3>Configurações</h3>
                                    <p>Configure o sistema e gerencie usuários</p>
                                </div>
                            </div>
                            <div className="admin-card-actions">
                                <button className="btn btn-secondary">
                                    <i className="fas fa-globe"></i>
                                    Configurações do Site
                                </button>
                                <button className="btn btn-secondary">
                                    <i className="fas fa-user-cog"></i>
                                    Gerenciar Usuários
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal 
                isOpen={modal.isOpen} 
                onClose={closeModal}
                title={
                    modal.type === 'add-event' ? 'Adicionar Evento' :
                    modal.type === 'add-donation' ? 'Registrar Doação' :
                    modal.type === 'add-volunteer' ? 'Cadastrar Voluntário' :
                    modal.type === 'list-events' ? 'Lista de Eventos' :
                    modal.type === 'list-donations' ? 'Lista de Doações' :
                    modal.type === 'list-volunteers' ? 'Lista de Voluntários' :
                    'Modal'
                }
            >
                {renderModalContent()}
            </Modal>
        </div>
    );
};

// List Components
const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const result = await firestoreService.getEvents();
        if (result.success) {
            setEvents(result.data);
        }
        setLoading(false);
    };

    if (loading) return <div>Carregando...</div>;
    if (events.length === 0) return <p>Nenhum evento cadastrado.</p>;

    return (
        <div className="list-container">
            {events.map(event => (
                <div key={event.id} className="list-item">
                    <h4>{event.title}</h4>
                    <p><strong>Tipo:</strong> {event.type}</p>
                    <p><strong>Data:</strong> {event.date ? new Date(event.date).toLocaleDateString('pt-BR') : 'Não informado'}</p>
                    <p><strong>Local:</strong> {event.location}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

const DonationList = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDonations();
    }, []);

    const loadDonations = async () => {
        const result = await firestoreService.getDonations();
        if (result.success) {
            setDonations(result.data);
        }
        setLoading(false);
    };

    if (loading) return <div>Carregando...</div>;
    if (donations.length === 0) return <p>Nenhuma doação registrada.</p>;

    return (
        <div className="list-container">
            {donations.map(donation => (
                <div key={donation.id} className="list-item">
                    <h4>{donation.type}</h4>
                    <p><strong>Quantidade:</strong> {donation.quantity}</p>
                    <p><strong>Doador:</strong> {donation.donorName || 'Anônimo'}</p>
                    <p><strong>Contato:</strong> {donation.donorContact || 'Não informado'}</p>
                    <p>{donation.description}</p>
                </div>
            ))}
        </div>
    );
};

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadVolunteers();
    }, []);

    const loadVolunteers = async () => {
        const result = await firestoreService.getVolunteers();
        if (result.success) {
            setVolunteers(result.data);
        }
        setLoading(false);
    };

    if (loading) return <div>Carregando...</div>;
    if (volunteers.length === 0) return <p>Nenhum voluntário cadastrado.</p>;

    return (
        <div className="list-container">
            {volunteers.map(volunteer => (
                <div key={volunteer.id} className="list-item">
                    <h4>{volunteer.name}</h4>
                    <p><strong>Email:</strong> {volunteer.email}</p>
                    <p><strong>Telefone:</strong> {volunteer.phone}</p>
                    <p><strong>Disponibilidade:</strong> {volunteer.availability}</p>
                    <p><strong>Habilidades:</strong> {volunteer.skills || 'Não informado'}</p>
                </div>
            ))}
        </div>
    );
};

export default AdminPanel;
