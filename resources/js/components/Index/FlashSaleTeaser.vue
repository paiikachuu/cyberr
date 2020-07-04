<template>
  <div class="container">
    <h4>Flash Sale</h4>
    <div class="jumbotron override-jumbotron">
      <div class="col-12">
        <div class="float-left">Ending in: 00:07:56</div>
        <div class="float-right text-danger"><a href="/all-flash-sale"> Shop now</a></div>
      </div>
      <div class="row col-12">
        <div class="card m-1 product" v-for="(product, i) in products" :key="i">
          <img class="card-img-top" src="/images/laptop-nitro5.png" />
          <div class="card-body">
            <p class="card-title">{{ product.name }}</p>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
          <div><a class="btn btn-sm btn-primary" href="/product-detail">View details</a></div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <hr />
        <button class="btn btn-sm btn-outline-primary">Best Seller</button>
        <button class="btn btn-sm btn-outline-primary">High Specs</button>
        <button class="btn btn-sm btn-outline-primary">Cheap Price</button>
        <button class="btn btn-sm btn-outline-primary">Limited Items</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadProducts();
  },

  data: function() {
    return {
      products: []
    };
  },

  methods: {
    loadProducts() {
      axios({
        method: "get",
        url: "/api/products"
      })
        .then(res => {
          console.log(res.data)
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.override-jumbotron {
  padding-top: 15px;
  padding-bottom: 15px;
}
.product {
  width: 10rem;
}
</style>