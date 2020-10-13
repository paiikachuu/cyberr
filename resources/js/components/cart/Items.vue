<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-light">
              <div class="p-2 px-3 text-uppercase">Product</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Unit Price</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Total Price</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="border-0">
              <div>
                <img
                  src="/images/laptop-nitro5.png"
                  alt
                  width="70"
                  class="img-fluid shadow-sm"
                />
                <div class="d-inline-block align-middle">
                  <h5 class="mb-0">
                    <a href="#" class="text-dark d-inline-block align-middle"
                      >Acer Nitro 5</a
                    >
                  </h5>
                  <span
                    class="text-muted font-weight-normal font-italic d-block"
                    >Category: Laptops</span
                  >
                </div>
              </div>
            </th>
            <td class="border-0 align-middle">
              <strong>₱40,000</strong>
            </td>
            <td class="border-0 align-middle">
              <strong>3</strong>
            </td>
            <td class="border-0 align-middle">
              <strong>₱120,000</strong>
            </td>
            <td class="border-0 align-middle">
              <a class="text-danger" href="#">Remove</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>
