<template>
  <div>
    <nav
      class="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-light navbar-shadow"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="navbar-collapse" id="navbar-mobile">
            <div
              class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
            ></div>
            <ul v-if="user" class="nav navbar-nav float-right">
              <li class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name text-bold-600">
                      {{ user.first_name }} {{ user.last_name }}
                    </span>
                    <span class="user-status">Available</span>
                  </div>
                  <span>
                    <img
                      class="round"
                      src="/app-assets/images/portrait/small/avatar-s-11.jpg"
                      alt="avatar"
                      height="40"
                      width="40"
                    />
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="page-user-profile.html"
                    ><i class="feather icon-user"></i> Edit Profile</a
                  ><a class="dropdown-item" href="app-email.html"
                    ><i class="feather icon-mail"></i> My Inbox</a
                  ><a class="dropdown-item" href="app-todo.html"
                    ><i class="feather icon-check-square"></i> Task</a
                  ><a class="dropdown-item" href="app-chat.html"
                    ><i class="feather icon-message-square"></i> Chats</a
                  >
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    @click="logout()"
                    onclick="event.preventDefault();"
                    href="#"
                  >
                    <i class="feather icon-power"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <ul class="main-search-list-defaultlist-other-list d-none">
      <li
        class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer"
      >
        <a
          class="d-flex align-items-center justify-content-between w-100 py-50"
        >
          <div class="d-flex justify-content-start">
            <span class="mr-75 feather icon-alert-circle"></span
            ><span>No results found.</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import User from "../../apis/User";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.currentUser.user,
    }),
  },
  methods: {
    logout() {
      User.logout().then(() => {
        this.app_user = null;
        this.$store.commit("currentUser/setIsAuth", false);
        // this.$router.push({ name: "login" });
        window.location.replace(window.config.appUrl + "/login");
      });
    },
  },
  mounted() {},
};
</script>
