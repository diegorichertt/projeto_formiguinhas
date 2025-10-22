// Firebase Authentication Service for React
import { 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import { auth } from './config';

export const authService = {
    // Sign in with email and password
    async signIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Erro no login:', error);
            return { 
                success: false, 
                error: getErrorMessage(error.code) 
            };
        }
    },

    // Sign out
    async signOut() {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            console.error('Erro no logout:', error);
            return { success: false, error: error.message };
        }
    },

    // Create admin user (for initial setup)
    async createAdminUser(email, password, displayName) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName });
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Erro ao criar usuário admin:', error);
            return { 
                success: false, 
                error: getErrorMessage(error.code) 
            };
        }
    },

    // Get user-friendly error messages
    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/user-not-found': 'Usuário não encontrado.',
            'auth/wrong-password': 'Senha incorreta.',
            'auth/invalid-email': 'Email inválido.',
            'auth/user-disabled': 'Usuário desabilitado.',
            'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
            'auth/network-request-failed': 'Erro de conexão. Verifique sua internet.',
            'auth/email-already-in-use': 'Este email já está em uso.',
            'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.'
        };
        return errorMessages[errorCode] || 'Erro desconhecido. Tente novamente.';
    }
};

// Helper function to get error messages
function getErrorMessage(errorCode) {
    return authService.getErrorMessage(errorCode);
}
