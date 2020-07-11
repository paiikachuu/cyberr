<template>
  <div>
    <SearchBar />
    <Banner />
    <FlashSaleTeaser />
    <Latest />
  </div>
</template>

<script>
export default {
  components: {
    SearchBar: () => import("../components/Index/SearchBar"),
    Banner: () => import("../components/Index/Banner"),
    FlashSaleTeaser: () => import("../components/Index/FlashSaleTeaser"),
    Latest: () => import("../components/Index/Latest")
  }
};
</script>
