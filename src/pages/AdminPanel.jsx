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
        <section className="admin-section">
            <div className="container">
                <h1 className="admin-title">Painel Administrativo</h1>
                
                {/* Stats Cards */}
                <div className="admin-stats">
                    <StatsCard 
                        icon="fas fa-calendar" 
                        title="Eventos" 
                        count={stats.events} 
                    />
                    <StatsCard 
                        icon="fas fa-hand-holding-heart" 
                        title="Doações" 
                        count={stats.donations} 
                    />
                    <StatsCard 
                        icon="fas fa-users" 
                        title="Voluntários" 
                        count={stats.volunteers} 
                    />
                </div>
                
                <div className="admin-grid">
                    {/* Eventos */}
                    <div className="admin-card">
                        <div className="admin-card-header">
                            <i className="fas fa-calendar"></i>
                            <h2>Gerenciar Eventos</h2>
                        </div>
                        <div className="admin-card-content">
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('add-event')}
                            >
                                Adicionar Evento
                            </button>
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('list-events')}
                            >
                                Listar Eventos
                            </button>
                        </div>
                    </div>

                    {/* Doações */}
                    <div className="admin-card">
                        <div className="admin-card-header">
                            <i className="fas fa-hand-holding-heart"></i>
                            <h2>Controle de Doações</h2>
                        </div>
                        <div className="admin-card-content">
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('add-donation')}
                            >
                                Registrar Doação
                            </button>
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('list-donations')}
                            >
                                Relatório de Doações
                            </button>
                        </div>
                    </div>

                    {/* Voluntários */}
                    <div className="admin-card">
                        <div className="admin-card-header">
                            <i className="fas fa-users"></i>
                            <h2>Voluntários</h2>
                        </div>
                        <div className="admin-card-content">
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('add-volunteer')}
                            >
                                Cadastrar Voluntário
                            </button>
                            <button 
                                className="btn btn-second" 
                                onClick={() => openModal('list-volunteers')}
                            >
                                Lista de Voluntários
                            </button>
                        </div>
                    </div>

                    {/* Configurações */}
                    <div className="admin-card">
                        <div className="admin-card-header">
                            <i className="fas fa-cog"></i>
                            <h2>Configurações</h2>
                        </div>
                        <div className="admin-card-content">
                            <button className="btn btn-second">Configurações do Site</button>
                            <button className="btn btn-second">Gerenciar Usuários</button>
                        </div>
                    </div>
                </div>
            </div>

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
        </section>
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
