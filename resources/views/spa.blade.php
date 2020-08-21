@php
$config = [
    'appUrl' => config('app.url'),
];
@endphp
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Cyberr Philippines | Buy and Sell Gadgets</title>
    <link rel="apple-touch-icon" href="{{ asset('/app-assets/images/ico/apple-icon-120.png') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/app-assets/images/ico/favicon.ico') }}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/vendors.min.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/extensions/nouislider.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/ui/prism.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/forms/select/select2.min.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap-extended.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/colors.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/components.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/dark-layout.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/semi-dark-layout.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/core/menu/menu-types/vertical-menu.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/core/colors/palette-gradient.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/authentication.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/knowledge-base.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/plugins/extensions/noui-slider.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/app-ecommerce-shop.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/data-list-view.css') }}">

    <!-- Styles -->
    {{-- <link href="{{ mix('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body class="vertical-layout vertical-menu-modern 1-column content-detached-left-sidebar ecommerce-application navbar-sticky footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
    <div id="app">  
        <app />
    </div>
    <!-- BEGIN: Vendor JS-->
    <script src="{{ asset('/app-assets/vendors/js/vendors.min.js') }}"></script>
    {{-- <script src="{{ asset('/app-assets/vendors/js/extensions/toastr.min.js') }}"></script> --}}
    <script src="{{ asset('/app-assets/vendors/js/extensions/sweetalert2.all.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/pagination/jquery.bootpag.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/pagination/jquery.twbsPagination.min.js') }}"></script>
    <!-- BEGIN Vendor JS-->

    <script src="{{ asset('/app-assets/vendors/js/ui/prism.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/wNumb.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/nouislider.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/forms/select/select2.full.min.js') }}"></script>

    <!-- BEGIN: Theme JS-->
    <script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
    <script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
    <script src="{{ asset('/app-assets/js/scripts/components.js') }}"></script>
    
    <!-- END: Theme JS-->

    <!-- MUST TRANSFER TO LOGGEIN USERS-->
    <script src="{{ asset('/app-assets/vendors/js/charts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/tether.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/shepherd.min.js') }}"></script>
    <script src="{{ asset('/app-assets/js/scripts/pages/faq-kb.js') }}"></script>
    <!-- END-->

    <!-- INDIVIDUAL PAGE START -->
    {{-- <script src="{{ asset('/app-assets/js/scripts/pages/app-ecommerce-shop.js') }}"></script> --}}
    <!-- INDIVIDUAL PAGE END -->
    <script>
        window.config = @json($config);
    </script>
</body>
</html>
