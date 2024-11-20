import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import ListagemView from "@/views/ListagemView.vue";

const routes = [
    {
        path: "/", // Caminho da raiz
        redirect: "/login", // Redireciona para /login
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/certificados",
        name: "Certificados",
        component: ListagemView,
    },
    {
        path: "/usuario", // Adicione esta rota caso esteja sendo usada
        name: "Usuario",
        component: ListagemView, // Use um componente específico para Usuários
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
