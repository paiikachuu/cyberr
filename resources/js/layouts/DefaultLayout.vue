<template>
  <div>
    <nav
      class="header-navbar navbar-expand-lg navbar navbar-with-menu fix-top navbar-light navbar-shadow"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="navbar-collapse" id="navbar-mobile">
            <div  class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
              <ul class="nav navbar-nav">
                <li v-if="$store.state.currentUser.is_auth" class="nav-item mobile-menu d-xl-none mr-auto">
                  <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                    <i class="ficon feather icon-menu"></i>
                  </a>
                </li>
                 <li v-if="!$store.state.currentUser.is_auth">
                  Cyberr Gadget Shopping
                </li>
              </ul>
              <ul v-if="$store.state.currentUser.is_auth" class="nav navbar-nav bookmark-icons">
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    href="app-chat.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chat"
                  >
                    <i class="ficon feather icon-message-square"></i>
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    href="app-email.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Email"
                  >
                    <i class="ficon feather icon-mail"></i>
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    href="app-calender.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Calendar"
                  >
                    <i class="ficon feather icon-calendar"></i>
                  </a>
                </li>
              </ul>
              <ul v-if="$store.state.currentUser.is_auth" class="nav navbar-nav">
                <li class="nav-item d-none d-lg-block">
                  <a class="nav-link bookmark-star">
                    <i class="ficon feather icon-star warning"></i>
                  </a>
                  <div class="bookmark-input search-input">
                    <div class="bookmark-input-icon">
                      <i class="feather icon-search primary"></i>
                    </div>
                    <input
                      class="form-control input"
                      type="text"
                      placeholder="Explore Vuexy..."
                      tabindex="0"
                      data-search="template-list"
                    />
                    <ul class="search-list search-list-bookmark"></ul>
                  </div>
                </li>
              </ul>
            </div>
            <ul class="nav navbar-nav float-right">
              <li class="dropdown dropdown-language nav-item">
                <a
                  class="dropdown-toggle nav-link"
                  id="dropdown-flag"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="flag-icon flag-icon-us"></i>
                  <span class="selected-language">English</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown-flag">
                  <a class="dropdown-item" href="#" data-language="en">
                    <i class="flag-icon flag-icon-us"></i> English
                  </a>
                  <a class="dropdown-item" href="#" data-language="fr">
                    <i class="flag-icon flag-icon-fr"></i> French
                  </a>
                  <a class="dropdown-item" href="#" data-language="de">
                    <i class="flag-icon flag-icon-de"></i> German
                  </a>
                  <a class="dropdown-item" href="#" data-language="pt">
                    <i class="flag-icon flag-icon-pt"></i> Portuguese
                  </a>
                </div>
              </li>

              <!-- Notification here -->
              <Notification></Notification>
              <li v-if="$store.state.currentUser.is_auth" class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name text-bold-600">John Doe</span>
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
                  <a class="dropdown-item" href="page-user-profile.html">
                    <i class="feather icon-user"></i> Edit Profile
                  </a>
                  <a class="dropdown-item" href="app-email.html">
                    <i class="feather icon-mail"></i> My Inbox
                  </a>
                  <a class="dropdown-item" href="app-todo.html">
                    <i class="feather icon-check-square"></i> Task
                  </a>
                  <a class="dropdown-item" href="app-chat.html">
                    <i class="feather icon-message-square"></i> Chats
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="auth-login.html">
                    <i class="feather icon-power"></i> Logout
                  </a>
                </div>
              </li>
              <li v-if="!$store.state.currentUser.is_auth" class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div>
                    <router-link class="btn btn-default" :to="'login'">Login</router-link>
                  </div>
                  <div>
                    <router-link class="btn btn-default" :to="'register'">Sign Up</router-link>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- END: Header-->

    <!-- BEGIN: Content-->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper" style="padding:padding:0rem; margin-top:0rem;">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0">Shop</h2>
                <div class="breadcrumb-wrapper col-12">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link :to="{name:'app'}">Home</router-link>
                    </li>
                    <li class="breadcrumb-item active">Shop</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
            <div class="form-group breadcrum-right">
              <div class="dropdown">
                <button
                  class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="feather icon-settings"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Chat</a>
                  <a class="dropdown-item" href="#">Email</a>
                  <a class="dropdown-item" href="#">Calendar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-view />
      </div>
    </div>
    <!-- END: Content-->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <!-- BEGIN: Footer-->
    <footer class="footer footer-static footer-light">
      <p class="clearfix blue-grey lighten-2 mb-0">
        <span class="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT &copy; 2019
          <a
            class="text-bold-800 grey darken-2"
            href="https://1.envato.market/pixinvent_portfolio"
            target="_blank"
          >Pixinvent,</a>All rights Reserved
        </span>
        <span class="float-md-right d-none d-md-block">
          Hand-crafted & Made with
          <i class="feather icon-heart pink"></i>
        </span>
        <button class="btn btn-primary btn-icon scroll-top" type="button">
          <i class="feather icon-arrow-up"></i>
        </button>
      </p>
    </footer>
    <!-- END: Footer-->
  </div>
</template>

<script>
import Notification from "../components/layout/Notification";

export default {
    components: {
        Notification,
    },
    mounted() {
        $('body').removeClass()
        $('body').addClass('vertical-layout vertical-menu-modern 1-column content-detached-left-sidebar ecommerce-application navbar-sticky footer-static')
        $('body').attr('data-col', '1-column')
    },
};
</script>