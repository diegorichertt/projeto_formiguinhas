// Funções de gerenciamento de sessão
const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const login = (username, password) => {
    // Simulação de validação (em um cenário real, isso seria feito no backend)
    if (username === 'admin' && password === 'admin123') {
        const authToken = 'token-simulado-' + Date.now();
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('username', username);
        return true;
    }
    return false;
};

const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
};

// Verificar autenticação em páginas restritas
const checkAuth = () => {
    const isAdminPage = window.location.pathname.includes('admin-panel.html');
    if (isAdminPage && !isAuthenticated()) {
        window.location.href = 'admin-login.html';
    }
};

// Atualizar interface baseado no estado de autenticação
const updateInterface = () => {
    const loginLink = document.querySelector('.nav-login');
    if (loginLink) {
        if (isAuthenticated()) {
            loginLink.innerHTML = `
                <i class="fas fa-user"></i> 
                ${localStorage.getItem('username')} 
                <a href="#" onclick="logout()" style="margin-left: 10px; font-size: 0.8em;">(Sair)</a>
            `;
            loginLink.href = 'admin-panel.html';
        } else {
            loginLink.innerHTML = '<i class="fas fa-user"></i> Login';
            loginLink.href = 'admin-login.html';
        }
    }
};

// Inicialização e listeners
document.addEventListener('DOMContentLoaded', () => {
    // Verificar autenticação em páginas restritas
    checkAuth();
    
    // Atualizar interface
    updateInterface();
    
    // Gerenciar formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            if (login(username, password)) {
                alert('Login realizado com sucesso!');
                window.location.href = 'admin-panel.html';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        });
    }
});