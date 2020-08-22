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

import html_mixins from '../mixins/html';
import User from "../apis/User";

export default {
    mixins: [html_mixins],
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
        this.appendCss("/app-assets/vendors/css/charts/apexcharts.css")
        this.appendCss("/app-assets/vendors/css/extensions/tether-theme-arrows.css")
        this.appendCss("/app-assets/vendors/css/extensions/tether.min.css")
        this.appendCss("/app-assets/vendors/css/extensions/shepherd-theme-default.css")
        this.appendCss("/app-assets/css/pages/dashboard-analytics.css")
        this.appendCss("/app-assets/css/pages/card-analytics.css")
        this.appendCss("/app-assets/css/plugins/tour/tour.css")
        this.appendCss("/app-assets/vendors/css/tables/datatable/datatables.min.css")
        this.appendCss("/app-assets/vendors/css/file-uploaders/dropzone.min.css")
        this.appendCss("/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css")
        this.appendCss("/app-assets/css/plugins/file-uploaders/dropzone.css")
        this.appendCss("/app-assets/css/pages/data-list-view.css")

        this.appendJavascript("/app-assets/vendors/js/extensions/dropzone.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/datatables.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/dataTables.select.min.js")
        this.appendJavascript("/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js")
        this.appendJavascript("/app-assets/js/scripts/ui/data-list-view.js")

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

<style scoped>
</style>
