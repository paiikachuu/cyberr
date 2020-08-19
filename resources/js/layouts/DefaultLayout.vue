<template>
  <div>
    <Navigation/>
    <main>
      <router-view></router-view>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
export default {
  components: {
    Footer,
    Navigation
  },
  mounted() {
    // Vendor CSS
    this.appendCss("/app-assets/vendors/css/vendors.min.css")
    this.appendCss("/app-assets/vendors/css/extensions/nouislider.min.css")
    this.appendCss("/app-assets/vendors/css/ui/prism.min.css")
    this.appendCss("/app-assets/vendors/css/forms/select/select2.min.css")

    // Theme CSS
    this.appendCss("/app-assets/css/bootstrap.css")
    this.appendCss("/app-assets/css/bootstrap-extended.css")
    this.appendCss("/app-assets/css/colors.css")
    this.appendCss("/app-assets/css/components.css")
    this.appendCss("/app-assets/css/themes/dark-layout.css")
    this.appendCss("/app-assets/css/themes/semi-dark-layout.css")

    // Page CSS
    this.appendCss("/app-assets/css/core/menu/menu-types/horizontal-menu.css")
    this.appendCss("/app-assets/css/core/colors/palette-gradient.css")
    this.appendCss("/app-assets/css/plugins/extensions/noui-slider.min.css")
    this.appendCss("/app-assets/css/pages/app-ecommerce-shop.css")

    // Custom CSS
    this.appendCss("/assets/css/style.css")

    // Vendor JS
    this.appendJavascript("/app-assets/vendors/js/vendors.min.js")

    // Page Vendor JS
    this.appendJavascript("/app-assets/vendors/js/ui/jquery.sticky.js")
    this.appendJavascript("/app-assets/vendors/js/ui/prism.min.js")
    this.appendJavascript("/app-assets/vendors/js/extensions/wNumb.js")
    this.appendJavascript("/app-assets/vendors/js/extensions/nouislider.min.js")
    this.appendJavascript("/app-assets/vendors/js/forms/select/select2.full.min.js")

    // Theme JS
    this.appendJavascript("/app-assets/js/core/app-menu.js")
    this.appendJavascript("/app-assets/js/core/app.js")
    this.appendJavascript("/app-assets/js/scripts/components.js")

    // Page JS
    this.appendJavascript("/app-assets/js/scripts/pages/app-ecommerce-shop.js")
  }
};
</script>