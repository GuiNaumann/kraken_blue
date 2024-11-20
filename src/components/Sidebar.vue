<template>
  <aside class="sidebar">
    <!-- Informações do usuários -->
    <div class="user-info">
      <img :src="user.photo" alt="Foto do Usuários" class="user-photo" />
      <h2 class="user-name">{{ user.name }}</h2>
      <p class="user-role">{{ user.role }}</p>
    </div>

    <!-- Navegação lateral -->
    <nav class="menu">
      <ul>
        <li>
          <router-link :to="{ name: 'Certificados' }" class="menu-link" :class="{ active: currentSection === 'Certificados' }">
            Certificados
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Usuario' }" class="menu-link" :class="{ active: currentSection === 'Usuario' }">
            Usuários
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar", // Nome do componente atualizado
  props: {
    user: {
      type: Object,
      required: true,
    },
    currentSection: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.user-info {
  text-align: center;
  margin-bottom: 30px;
}

.user-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.user-role {
  font-size: 14px;
  color: #dcdcdc;
}

.menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.menu ul li {
  margin: 10px 0;
}

.menu-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.menu-link:hover {
  background: #0056b3;
}

.menu-link.active {
  background: #0056b3;
  font-weight: bold;
}
</style>
