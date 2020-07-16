<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="card">
      <div class="row">
        <Images></Images>
        <aside class="col-sm-7">
          <article class="card-body p-5">
            <h3 class="title mb-3">ACER NITRO 5</h3>

            <p class="price-detail-wrap">
              <span class="price h3 text-warning">
                <span class="currency">US $</span>
                <span class="num">1299</span>
              </span>
              <span>/per kg</span>
            </p>
            <dl class="param param-feature">
              <dt>Shipping</dt>
              <dd>
                <i class="fa fa-truck" aria-hidden="true"></i> Free Shipping
              </dd>
            </dl>
            <dl class="param param-feature">
              <dt>Delivery</dt>
              <dd>Manila, Cebu</dd>
            </dl>
            <dl class="param param-feature">
              <dt>Courier</dt>
              <dd>Russia, USA, and Europe</dd>
            </dl>

            <hr />
            <div class="row">
              <div class="col-sm-5">
                <dl class="param param-inline">
                  <dt>Quantity:</dt>
                  <dd>
                    <select class="form-control form-control-sm" style="width:70px;">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </dd>
                </dl>
                <!-- item-property .// -->
              </div>
              <div class="col-sm-7"></div>
            </div>
            <hr />
            <router-link class="btn btn-outline-primary text-uppercase" :to="'cart'">
              <i class="fas fa-shopping-cart"></i>Add to Cart
            </router-link>
            <a href="#" class="btn btn-primary text-uppercase">Buy now</a>
          </article>
          <!-- card-body.// -->
        </aside>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <Store></Store>
    <Specification></Specification>
    <Ratings></Ratings>
    <FromShop></FromShop>
    <SimilarProducts></SimilarProducts>
    <AlsoLike></AlsoLike>
  </div>
  <!--container.//-->
</template>

<script>

import BreadCrumb from '../components/product/BreadCrumb'
import Images from '../components/product/Images'
import Store from '../components/product/Store'
import Specification from '../components/product/Specification'
import Ratings from '../components/product/Ratings'
import FromShop from '../components/product/FromShop'
import SimilarProducts from '../components/product/SimilarProducts'
import AlsoLike from '../components/product/AlsoLike'

export default {
  components: {
    BreadCrumb,
    Images,
    Store,
    Specification,
    Ratings,
    FromShop,
    SimilarProducts,
    AlsoLike
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.override-jumbotron {
  padding-top: 5px;
}
</style>
