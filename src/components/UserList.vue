<template>
    <div>
      <h1>User List1</h1>
      <el-form :model="newUser" @submit.native.prevent="addUser" label-width="80px">
        <el-form-item label="Name">
          <el-input v-model="newUser.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="newUser.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item label="Age">
          <el-input v-model="newUser.age" placeholder="Age" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addUser">Add User</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="email" label="Email" width="180"></el-table-column>
        <el-table-column prop="age" label="Age" width="180"></el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        newUser: {
          name: '',
          email: '',
          age: null
        }
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            const response = await fetch('http://localhost:3000/api/users');
            const data = await response.json();
            this.users = data;
        },
        async addUser() {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.newUser)
            });
            const newUser = await response.json();
            this.users.push(newUser);
            this.newUser = { name: '', email: '', age: null };
        }
    }

  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  </style>
  