<template>
    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto">
                    <router-link to="dashboard" class="navbar-brand" >
                        <div class="brand-logo"></div>
                        <h2 class="brand-text mb-0">Cyberr</h2>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class=" navigation-header"><span>Menu</span>
                </li>
                <li class=" nav-item">
                    <router-link to="dashboard">
                        <i class="feather icon-home"></i>
                        <span class="menu-title" data-i18n="Dashboard">
                            Dashboard
                        </span>
                    </router-link>
                </li>
                <li class=" nav-item">
                    <a href="app-email.html">
                        <i class="feather icon-user"></i>
                        <span class="menu-title" data-i18n="Users">
                            Users
                        </span>
                    </a>
                </li>
                <li class=" nav-item">
                    <router-link :to="{name:'admin_products'}">
                        <i class="feather icon-home"></i>
                        <span class="menu-title" data-i18n="Products">
                            Products
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>