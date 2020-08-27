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
    
    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/vendors.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/semi-dark-layout.css">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
</head>
<body class="vertical-layout vertical-menu-modern 1-column content-detached-left-sidebar ecommerce-application navbar-sticky footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
    
    <div id="app">  
        <app />
    </div>
    
    <!-- BEGIN: Vendor JS-->
    <script src="/app-assets/vendors/js/vendors.min.js" defer></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="/app-assets/js/core/app-menu.js" defer></script>
    <script src="/app-assets/js/core/app.js" defer></script>
    <script src="/app-assets/js/scripts/components.js" defer></script>
    <!-- END: Theme JS-->

    <script>
        window.config = @json($config);
    </script>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
