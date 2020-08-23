<template>
    <section class="row flexbox-container">
        <div class="col-xl-8 col-11 d-flex justify-content-center">
            <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                    <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                        <img src="/app-assets/images/pages/login.png" alt="branding logo">
                    </div>
                    <div class="col-lg-6 col-12 p-0">
                        <div class="card rounded-0 mb-0 px-2">
                            <div class="card-header pb-1">
                                <div class="card-title">
                                    <h4 class="mb-0">Login</h4>
                                </div>
                            </div>
                            <p class="px-2">Welcome back, please login to your account.</p>
                            <div class="card-content">
                                <div class="card-body pt-1">
                                    <form action="index.html">
                                        <fieldset class="form-label-group form-group position-relative has-icon-left">
                                            <input id="user-name" placeholder="Username" required
                                                v-model="form.email"
                                                type="email"
                                                class="form-control"
                                                aria-describedby="emailHelp"
                                            >
                                            <small v-if="errors.email" class="text-danger cbrp-form-error-link">
                                                {{ errors.email[0] }}
                                            </small>
                                            <small
                                                v-else
                                                id="emailHelp"
                                                class="form-text text-muted"
                                            >We'll never share your email with anyone else.</small>
                                            <div class="form-control-position">
                                                <i class="feather icon-user"></i>
                                            </div>
                                            <label for="user-name">Username</label>
                                        </fieldset>

                                        <fieldset class="form-label-group position-relative has-icon-left">
                                            <input type="password" class="form-control" id="user-password" placeholder="Password" required
                                                v-model="form.password"
                                            >
                                            <div class="form-control-position">
                                                <i class="feather icon-lock"></i>
                                            </div>
                                            <label for="user-password">Password</label>
                                            <small v-if="errors.password" class="text-danger cbrp-form-error-link">
                                                {{ errors.password[0] }}
                                            </small>
                                        </fieldset>
                                        <div class="form-group d-flex justify-content-between align-items-center">
                                            <div class="text-left">
                                                <fieldset class="checkbox">
                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                        <input type="checkbox">
                                                        <span class="vs-checkbox">
                                                            <span class="vs-checkbox--check">
                                                                <i class="vs-icon feather icon-check"></i>
                                                            </span>
                                                        </span>
                                                        <span class="">Remember me</span>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="text-right"><a href="auth-forgot-password.html" class="card-link">Forgot Password?</a></div>
                                        </div>
                                        <router-link :to="{name:'app'}" class="btn btn-outline-primary float-left btn-inline">Cancel</router-link>
                                        <button @click.prevent="login()" class="btn btn-primary float-right btn-inline">Login</button>
                                    </form>
                                </div>
                            </div>
                            <div class="login-footer">
                                <div class="divider">
                                    <div class="divider-text">OR</div>
                                </div>
                                <div class="footer-btn d-inline">
                                    <a href="#" class="btn btn-facebook"><span class="fa fa-facebook"></span></a>
                                    <a href="#" class="btn btn-twitter white"><span class="fa fa-twitter"></span></a>
                                    <a href="#" class="btn btn-google"><span class="fa fa-google"></span></a>
                                    <a href="#" class="btn btn-github"><span class="fa fa-github-alt"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import html_mixins from '../../mixins/html';
    import User from "../../apis/User"
    export default {  
        mixins: [html_mixins],
        data() {
        return {
            form : {
            email : null,
            password : null,
            },

            errors : [],
        }
        },
        mounted() {
            this.appendCss("/app-assets/css/pages/authentication.css")
        },
        methods : {
        login() {
            User.login(this.form)
            .then((res)=> {
                User.auth().then((res)=>{
                this.$store.commit('currentUser/setUser', res.data)
                this.$store.commit('currentUser/setIsAuth', true)
                //   this.$router.push({ name: 'dashboard' })
                    window.location.replace(window.config.appUrl + '/admin/dashboard')
                })
            })
            .catch((err)=> {
                if(err.response.status) {
                this.errors = err.response.data.errors;
                }
            })
        },
        }
    }
</script>
