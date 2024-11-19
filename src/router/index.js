import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/auth/LoginView.vue';

const routes = [
    {
        path: '/', // Caminho da raiz
        redirect: '/login', // Redireciona para /login
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    // Adicione outras rotas aqui, se necessário
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Adicionando o `beforeEach` para verificar autenticação
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Verifica se há um token armazenado no localStorage

    // Redireciona para login se tentar acessar a raiz sem estar autenticado
    if (to.path === '/' && !isAuthenticated) {
        next('/login');
    } else {
        next(); // Continua para a rota desejada
    }
});

export default router;
