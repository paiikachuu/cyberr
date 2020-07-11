<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import("../components/layout/Footer")
  }
};
</script>
