<template>
  <div class="pt-4">
    <div class="card">
      <div class="card-header">
        <b>Recently Viewed</b>
        <div class="float-right text-danger">
          <router-link :to="'register'">See All</router-link>
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
