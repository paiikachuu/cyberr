<template>
    <!-- <div class="container pt-4">
        <main class="py-4">
            <router-view />
        </main>
    </div> -->
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
</template>

<script>
export default {
    components: {},
    mounted() {
        $('body').removeClass()
        $('body').addClass('vertical-layout vertical-menu-modern 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page')
        $('body').attr('data-col', '1-column')
    },
};
</script>

<style scoped>
</style>
