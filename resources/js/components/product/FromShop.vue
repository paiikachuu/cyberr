<template>
  <div class="pt-4">
    <div class="card">
      <div class="card-header">
        <b>Other Products From Shop</b>
        <div class="float-right text-danger">
          <router-link :to="'register'">Go to shop</router-link>
        </div>
      </div>
      <div class="card-body">
        <h5 class="text-danger">No records found.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
</style>
