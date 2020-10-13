<template>
  <div class="container">
    <div>
      <div class="pb-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-2 bg-white shadow-sm mb-5">
              <!-- Shopping cart table -->
              <Items></Items>
              <!-- End -->
            </div>
          </div>

          <div class="row py-5 p-2 bg-white shadow-sm">
            <div class="col-lg-6">
              <div class="bg-light px-4 py-2 text-uppercase font-weight-bold">
                Coupon code
              </div>
              <div class="p-2">
                <p class="font-italic mb-4">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div class="input-group mb-4 border p-2">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    aria-describedby="button-addon3"
                    class="form-control border-0"
                  />
                  <div class="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      class="btn btn-primary px-4"
                    >
                      <i class="fa fa-gift mr-2"></i>Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-light px-4 py-3 text-uppercase font-weight-bold">
                Instructions for seller
              </div>
              <div class="p-4">
                <p class="font-italic mb-4">
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea
                  name
                  cols="30"
                  rows="2"
                  class="form-control"
                ></textarea>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="bg-light px-4 py-3 text-uppercase font-weight-bold">
                Order summary
              </div>
              <div class="p-4">
                <p class="font-italic mb-4">
                  Shipping and additional costs are calculated based on values
                  you have entered.
                </p>
                <ul class="list-unstyled mb-4">
                  <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Order Subtotal</strong>
                    <strong>$390.00</strong>
                  </li>
                  <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Shipping and handling</strong>
                    <strong>$10.00</strong>
                  </li>
                  <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="text-muted">Total</strong>
                    <h5 class="font-weight-bold">$400.00</h5>
                  </li>
                </ul>
                <router-link
                  class="btn btn-success py-2 btn-block"
                  :to="'checkout'"
                >
                  <i class="fas fa-shopping-cart"></i>Proceed to Checkout
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AlsoLike></AlsoLike>
  </div>
</template>

<script>
import Items from "../components/cart/Items";
import AlsoLike from "../components/product/AlsoLike";

export default {
  components: {
    Items,
    AlsoLike,
  },
};
</script>

<style>
</style>
