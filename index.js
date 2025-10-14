document.addEventListener('DOMContentLoaded', () => {
    // Funções de gerenciamento de sessão
    const login = async (email, password) => {
        const { data, error } = await _supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Error signing in:', error.message);
            return false;
        }

        console.log('Signed in successfully:', data);
        return true;
    };

    const logout = async () => {
        const { error } = await _supabase.auth.signOut();
        if (error) {
            console.error('Error signing out:', error.message);
        }
        localStorage.removeItem('username'); // Clear any old session data
        window.location.href = 'index.html';
    };

    // Verificar autenticação em páginas restritas
    const checkAuth = async () => {
        const isAdminPage = window.location.pathname.includes('admin-panel.html');
        if (isAdminPage) {
            const { data: { session } } = await _supabase.auth.getSession();
            if (!session) {
                window.location.href = 'admin-login.html';
            }
        }
    };

    // Atualizar interface baseado no estado de autenticação
    const updateInterface = async () => {
        const loginLink = document.querySelector('.nav-login');
        if (loginLink) {
            const { data: { user } } = await _supabase.auth.getUser();

            if (user) {
                loginLink.innerHTML = `
                    <i class="fas fa-user"></i> 
                    ${user.email} 
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
    // Verificar autenticação em páginas restritas
    checkAuth();
    
    // Atualizar interface
    updateInterface();
    
    // Gerenciar formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email.trim() === '' || password.trim() === '') {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            const success = await login(email, password);
            
            if (success) {
                alert('Login realizado com sucesso!');
                window.location.href = 'admin-panel.html';
            } else {
                alert('Email ou senha inválidos!');
            }
        });
    }
});