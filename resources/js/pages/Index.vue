<template>
  <div>
    <SearchBar />
    <Banner />
    <FlashSaleTeaser />
    <Latest />
  </div>
</template>

<script>
import User from "../apis/User"
export default {
  components: {
    SearchBar: () => import("../components/Index/SearchBar"),
    Banner: () => import("../components/Index/Banner"),
    FlashSaleTeaser: () => import("../components/Index/FlashSaleTeaser"),
    Latest: () => import("../components/Index/Latest")
  },
  mounted() {
    User.auth().then((res)=>{
      //console.log(res)
    }).catch((err)=>{console.log(err)})
  },
  data() {
    return {
      user: null,
    }
  }
};
</script>
