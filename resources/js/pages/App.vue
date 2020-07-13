<template>
  <div>
    <Navigation/>
    <main class="py-4">
      <router-view></router-view>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import("../components/layout/Footer"),
    Navigation: () => import("../components/layout/Navigation")
  },
};
</script>
