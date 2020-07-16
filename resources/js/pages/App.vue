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

import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'

export default {
  components: {
    Footer,
    Navigation
  },
};
</script>
