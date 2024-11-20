<template>
  <div class="dashboard">
    <!-- Barra lateral -->
    <AppSidebar :user="user" currentSection="Certificados" />

    <!-- Área principal -->
    <main class="main-content">
      <div class="header">
        <h1>Certificados</h1>
        <button class="create-button" @click="handleCreate">Cadastrar Novo</button>
      </div>
      <table class="data-table" v-if="items.length">
        <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.status }}</td>
          <td>
            <button class="edit-button" @click="handleEdit(item.id)">Editar</button>
            <button class="delete-button" @click="handleDelete(item.id)">Excluir</button>
          </td>
        </tr>
        </tbody>
      </table>
      <p v-else>Nenhum certificado encontrado.</p>
    </main>
  </div>
</template>

<script>
import AppSidebar from "@/components/Sidebar.vue";
import axios from "axios";

export default {
  components: { AppSidebar },
  data() {
    return {
      user: {
        name: "Guilherme Alexandre Naumann",
        photo: "/path-to-user-image.jpg",
      },
      items: [], // Lista de itens para exibir na tabela
    };
  },
  methods: {
    // Busca os itens do endpoint
    async fetchItems() {
      try {
        const response = await axios.get("http://seu-endpoint/api/certificados");
        this.items = response.data; // Preenche a lista de itens com os dados da API
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    },
    // Lógica para criar um novo item
    async handleCreate() {
      console.log("Cadastrar novo item");
    },
    // Lógica para editar um item
    async handleEdit(id) {
      console.log("Editar item:", id);
    },
    // Lógica para excluir um item
    async handleDelete(id) {
      const confirmDelete = confirm("Deseja realmente excluir este item?");
      if (confirmDelete) {
        try {
          await axios.delete(`http://seu-endpoint/api/certificados/${id}`);
          this.items = this.items.filter((item) => item.id !== id); // Remove o item da lista local
        } catch (error) {
          console.error("Erro ao excluir item:", error);
        }
      }
    },
  },
  mounted() {
    this.fetchItems(); // Chama o método de buscar itens ao montar o componente
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background: #f8f9fa;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.create-button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.create-button:hover {
  background: #0056b3;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.data-table th {
  background: #f1f1f1;
  font-weight: bold;
}

.data-table tr:hover {
  background: #f9f9f9;
}

.edit-button {
  padding: 5px 10px;
  background: #ffc107;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.edit-button:hover {
  background: #e0a800;
}

.delete-button {
  padding: 5px 10px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background: #c82333;
}
</style>
