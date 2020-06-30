<template>
  <div>
    <SearchBar />
    <Banner />
    <CyberrSale />
    <Latest />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    SearchBar: () => import("../components/Index/SearchBar"),
    Banner: () => import("../components/Index/Banner"),
    CyberrSale: () => import("../components/Index/CyberrSale"),
    Latest: () => import("../components/Index/Latest"),
    Footer: () => import("../components/Index/Footer"),
  }
};
</script>
