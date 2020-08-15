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
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/extensions/toastr.css') }}"> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/datatables.min.css') }}"> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/file-uploaders/dropzone.min.css') }}"> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css') }}"> --}}

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap-extended.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/colors.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/components.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/dark-layout.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/semi-dark-layout.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/core/menu/menu-types/vertical-menu.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/core/colors/palette-gradient.css') }}">
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/plugins/extensions/toastr.css') }}"> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/plugins/file-uploaders/dropzone.css') }}"> --}}
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/authentication.css') }}">

    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/charts/apexcharts.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/extensions/tether-theme-arrows.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/extensions/tether.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/extensions/shepherd-theme-default.css') }}">

    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/data-list-view.css') }}"> --}}

    <!-- Styles -->
    {{-- <link href="{{ mix('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body data-open="click" data-menu="vertical-menu-modern">
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

    {{-- <script src="{{ asset('/app-assets/vendors/js/extensions/dropzone.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.select.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js') }}"></script> --}}

    <!-- BEGIN: Theme JS-->
    <script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
    <script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
    <script src="{{ asset('/app-assets/js/scripts/components.js') }}"></script>
    <!-- END: Theme JS-->

    <!-- MUST TRANSFER TO LOGGEIN USERS-->
    <script src="{{ asset('/app-assets/vendors/js/charts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/tether.min.js') }}"></script>
    <script src="{{ asset('/app-assets/vendors/js/extensions/shepherd.min.js') }}"></script>
    <!-- END-->

    {{-- <script src="{{ asset('/app-assets/js/scripts/ui/data-list-view.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/js/scripts/extensions/toastr.js') }}"></script> --}}
    {{-- <script src="{{ asset('/app-assets/js/scripts/extensions/sweet-alerts.js') }}"></script>
    <script src="{{ asset('/app-assets/js/scripts/pagination/pagination.js') }}"></script> --}}

    <script>
        window.config = @json($config);
    </script>
</body>
</html>
