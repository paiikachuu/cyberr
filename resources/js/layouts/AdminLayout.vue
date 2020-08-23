<template>
    <div>
        <Header />
        <Sidebar />

        <!-- BEGIN: Content-->
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <router-view />
                </div>
            </div>
        </div>
        <!-- END: Content-->

        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>

        <Footer />

    </div>
    <!-- <div class="container pt-4">
        <Navigation/>
        <main class="py-4">
            <router-view />
            <Footer />
        </main>
    </div> -->
</template>

<script>
// import Footer from '../components/layout/Footer'
// import Navigation from '../components/layout/Navigation'
import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'
import Footer from '../components/admin/Footer'

import User from "../apis/User";

export default {
    components: {
        Header,
        Sidebar,
        Footer,
        // Footer,
        // Navigation
    },
    created() {
    },
    mounted() {

        $('body').removeClass()
        $('body').addClass('vertical-layout vertical-menu-modern 2-columns  navbar-sticky footer-static')
        $('body').attr('data-col', '2-columns')
    },
    methods: {
        logout() {
            User.logout().then(() => {
                this.app_user = null;
                this.$store.commit("currentUser/setIsAuth", false);
                // this.$router.push({ name: "login" });
                window.location.replace(window.config.appUrl + '/login')
            });
        },
    },
};
</script>
