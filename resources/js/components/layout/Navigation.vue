<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" :to="'/'">Cyberr Shopping</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto"></ul>

        <!-- Right Side Of Navbar -->

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              v-if="!$store.state.currentUser.is_auth"
              class="nav-link"
              :to="'login'"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="!$store.state.currentUser.is_auth"
              class="nav-link"
              :to="'register'"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="$store.state.currentUser.is_auth"
              class="nav-link"
              :to="'notification'"
            >
              Notifications
              <span class="badge badge-light bg-danger text-light">4</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="$store.state.currentUser.is_auth"
              class="nav-link"
              :to="'dashboard'"
              >Dashboard</router-link
            >
          </li>
          <li
            v-if="$store.state.currentUser.is_auth"
            class="nav-item dropdown inline"
          >
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $store.state.currentUser.user.first_name }}
              <span>Settings</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <router-link
                v-if="$store.state.currentUser.is_auth"
                class="dropdown-item"
                :to="'dashboard'"
                >My Profile</router-link
              >
              <a
                @click="logout()"
                onclick="event.preventDefault();"
                class="dropdown-item"
                href="#"
                >Logout</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import User from "../../apis/User";
export default {
  data: function () {
    return {
      app_user: null,
    };
  },
  mounted() {},
  methods: {
    logout() {
      User.logout().then(() => {
        this.app_user = null;
        this.$store.commit("currentUser/setIsAuth", false);
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>
