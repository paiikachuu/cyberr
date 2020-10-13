<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <b>Flash Sale &nbsp;</b> <i class="fa fa-bolt text-danger"></i>
        <div class="float-right text-danger">
          <router-link :to="'register'">Go to shop</router-link>
        </div>
      </div>
      <div class="card-body">
        <div class="row col-12">
          <div
            class="card m-1 product"
            v-for="(product, i) in products"
            :key="i"
          >
            <img class="card-img-top" src="/images/laptop-nitro5.png" />
            <div class="card-body">
              <p class="card-title">{{ product.name }}</p>
              <p>{{ product.description }}</p>
              <p>{{ product.price }}</p>
              <div>
                <router-link
                  class="btn btn-sm btn-primary"
                  :to="'/product-detail'"
                  >View details</router-link
                >
              </div>
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
  </div>
</template>

<script>
import Product from "../../apis/Product";

export default {
  mounted() {
    this.loadProducts();
  },

  data: function () {
    return {
      products: [],
    };
  },

  methods: {
    loadProducts() {
      Product.getProducts()
        .then((res) => {
          products = res.data;
        })
        .catch((err) => {
          if (err.response) {
            this.errors = err.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.product {
  width: 10rem;
}
</style>