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
  components: {}
};
</script>

<style scoped>
</style>
