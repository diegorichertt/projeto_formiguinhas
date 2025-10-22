// Firestore Database Service for React
import { 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    getDoc, 
    getDocs, 
    query, 
    orderBy, 
    where,
    serverTimestamp,
    onSnapshot
} from 'firebase/firestore';
import { db } from './config';

export const firestoreService = {
    collections: {
        events: 'events',
        donations: 'donations',
        volunteers: 'volunteers',
        settings: 'settings'
    },

    // Events Management
    async addEvent(eventData) {
        try {
            const event = {
                ...eventData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };
            const docRef = await addDoc(collection(db, this.collections.events), event);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Erro ao adicionar evento:', error);
            return { success: false, error: error.message };
        }
    },

    async updateEvent(eventId, eventData) {
        try {
            const eventRef = doc(db, this.collections.events, eventId);
            await updateDoc(eventRef, {
                ...eventData,
                updatedAt: serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Erro ao atualizar evento:', error);
            return { success: false, error: error.message };
        }
    },

    async deleteEvent(eventId) {
        try {
            await deleteDoc(doc(db, this.collections.events, eventId));
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar evento:', error);
            return { success: false, error: error.message };
        }
    },

    async getEvents() {
        try {
            const eventsRef = collection(db, this.collections.events);
            const q = query(eventsRef, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            const events = [];
            querySnapshot.forEach((doc) => {
                events.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, data: events };
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            return { success: false, error: error.message };
        }
    },

    // Donations Management
    async addDonation(donationData) {
        try {
            const donation = {
                ...donationData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };
            const docRef = await addDoc(collection(db, this.collections.donations), donation);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Erro ao adicionar doação:', error);
            return { success: false, error: error.message };
        }
    },

    async getDonations() {
        try {
            const donationsRef = collection(db, this.collections.donations);
            const q = query(donationsRef, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            const donations = [];
            querySnapshot.forEach((doc) => {
                donations.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, data: donations };
        } catch (error) {
            console.error('Erro ao buscar doações:', error);
            return { success: false, error: error.message };
        }
    },

    async getDonationsByType(type) {
        try {
            const donationsRef = collection(db, this.collections.donations);
            const q = query(donationsRef, where('type', '==', type), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            const donations = [];
            querySnapshot.forEach((doc) => {
                donations.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, data: donations };
        } catch (error) {
            console.error('Erro ao buscar doações por tipo:', error);
            return { success: false, error: error.message };
        }
    },

    // Volunteers Management
    async addVolunteer(volunteerData) {
        try {
            const volunteer = {
                ...volunteerData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };
            const docRef = await addDoc(collection(db, this.collections.volunteers), volunteer);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Erro ao adicionar voluntário:', error);
            return { success: false, error: error.message };
        }
    },

    async getVolunteers() {
        try {
            const volunteersRef = collection(db, this.collections.volunteers);
            const q = query(volunteersRef, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            const volunteers = [];
            querySnapshot.forEach((doc) => {
                volunteers.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, data: volunteers };
        } catch (error) {
            console.error('Erro ao buscar voluntários:', error);
            return { success: false, error: error.message };
        }
    },

    // Settings Management
    async updateSettings(settingsData) {
        try {
            const settingsRef = doc(db, this.collections.settings, 'site');
            await updateDoc(settingsRef, {
                ...settingsData,
                updatedAt: serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Erro ao atualizar configurações:', error);
            return { success: false, error: error.message };
        }
    },

    async getSettings() {
        try {
            const settingsRef = doc(db, this.collections.settings, 'site');
            const docSnap = await getDoc(settingsRef);
            
            if (docSnap.exists()) {
                return { success: true, data: docSnap.data() };
            } else {
                return { success: true, data: {} };
            }
        } catch (error) {
            console.error('Erro ao buscar configurações:', error);
            return { success: false, error: error.message };
        }
    }
};
