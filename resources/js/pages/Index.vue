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
import SearchBar from '../components/Index/SearchBar'
import Banner from '../components/Index/Banner'
import FlashSaleTeaser from '../components/Index/FlashSaleTeaser'
import Latest from '../components/Index/Latest'

export default {
  components: {
    SearchBar,
    Banner,
    FlashSaleTeaser,
    Latest,
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
