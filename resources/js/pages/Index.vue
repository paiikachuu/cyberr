<template>
  <div class="content-body" id="postscribe-id">
    <!-- Knowledge base Jumbotron -->
    <section id="knowledge-base-search">
      <div class="row">
        <div class="col-12">
          <div class="card knowledge-base-bg white">
            <div class="card-content">
              <div class="card-body p-sm-4 p-2">
                <h1 class="white">SEARCH</h1>
                <p class="card-text mb-2">Affordable gadgets on demand</p>
                <form>
                  <fieldset
                    class="form-group position-relative has-icon-left mb-0"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="searchbar"
                      placeholder="Enter keyword"
                    />
                    <div class="form-control-position">
                      <i class="feather icon-search px-1"></i>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Knowledge base Jumbotron ends -->
    <!-- Knowledge base -->
    <section id="knowledge-base-content">
      <div class="row search-content-info">
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-1.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>MOBILE PHONES</h4>
                <small class="text-dark"
                  >Muffin lemon drops chocolate carrot cake chocolate bar sweet
                  roll.</small
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-2.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>LAPTOPS</h4>
                <small class="text-dark"
                  >Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice
                  cream</small
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-3.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>TABLETS</h4>
                <small class="text-dark"
                  >cotton candy caramels danish chocolate cake pie candy. Lemon
                  drops tart.</small
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-4.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>DESKTOP PC</h4>
                <small class="text-dark"
                  >Pudding oat cake carrot cake lemon drops gummies
                  marshmallow.</small
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-5.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>PHERIPERAL DEVICES</h4>
                <small class="text-dark"
                  >Gummi bears pudding icing sweet caramels chocolate.Muffin
                  croissant</small
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 search-content">
          <div class="card">
            <div class="card-body text-center">
              <router-link :to="{ name: 'search' }">
                <img
                  src="/app-assets/images/pages/graphic-6.png"
                  class="mx-auto mb-2"
                  width="180"
                  alt="knowledge-base-image"
                />
                <h4>SPEAKERS</h4>
                <small class="text-dark"
                  >Dragée jelly beans candy canes pudding cake wafer. Muffin
                  croissant.</small
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Knowledge base ends -->
  </div>
</template>

<script>
import postscribe from "postscribe";
export default {
  mounted() {
    postscribe(
      "#postscribe-id",
      `<link rel="stylesheet" type="text/css" href="/app-assets/css/core/menu/menu-types/vertical-menu.css">`
    );
    postscribe(
      "#postscribe-id",
      `<link rel="stylesheet" type="text/css" href="/app-assets/css/core/colors/palette-gradient.css">`
    );
    postscribe(
      "#postscribe-id",
      `<link rel="stylesheet" type="text/css" href="/app-assets/css/pages/knowledge-base.css">`
    );

    postscribe(
      "#postscribe-id",
      `<script src="/app-assets/js/scripts/pages/faq-kb.js"><\/script>`
    );
  },
};
</script>
