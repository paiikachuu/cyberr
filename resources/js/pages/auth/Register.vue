<template>
    <section class="row flexbox-container">
        <div class="col-xl-8 col-10 d-flex justify-content-center">
            <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                    <div class="col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0">
                        <img src="/app-assets/images/pages/register.jpg" alt="branding logo">
                    </div>
                    <div class="col-lg-6 col-12 p-0">
                        <div class="card rounded-0 mb-0 p-2">
                            <div class="card-header pt-50 pb-1">
                                <div class="card-title">
                                    <h4 class="mb-0">Create Account</h4>
                                </div>
                            </div>
                            <p class="px-2">Fill the below form to create a new account.</p>
                            <div class="card-content">
                                <div class="card-body pt-0">
                                    <form action="index.html">
                                        <div class="form-label-group">
                                            <input v-model="form.first_name" type="text" class="form-control" id="first_name" placeholder="First Name" required/>
                                            <label for="first_name">First Name</label>
                                            <small v-if="errors.first_name" class="text-danger cbrp-form-error-link">
                                                {{ errors.first_name[0] }}
                                            </small>
                                        </div>
                                        <div class="form-label-group">
                                            <input v-model="form.last_name" type="text" class="form-control" id="last_name" placeholder="Last Name" required/>
                                            <label for="last_name">Last Name</label>
                                            <small v-if="errors.last_name" class="text-danger cbrp-form-error-link">
                                                {{ errors.last_name[0] }}
                                            </small>
                                        </div>
                                        <div class="form-label-group">
                                            <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Email" required/>
                                            <label for="email">Email</label>
                                            <small v-if="errors.email" class="text-danger cbrp-form-error-link">
                                                {{ errors.email[0] }}
                                            </small>
                                        </div>
                                        <div class="form-label-group">
                                            <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password" required/>
                                            <label for="password">Password</label>
                                            <small v-if="errors.password" class="text-danger cbrp-form-error-link">
                                                {{ errors.password[0] }}
                                            </small>
                                        </div>
                                        <div class="form-label-group">
                                            <input v-model="form.password_confirmation"  type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" required/>
                                            <label for="confirmPassword">Confirm Password</label>
                                            <small v-if="errors.password_confirmation" class="text-danger cbrp-form-error-link">
                                                {{ errors.password_confirmation[0] }}
                                            </small>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <fieldset class="checkbox">
                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                        <input type="checkbox">
                                                        <span class="vs-checkbox">
                                                            <span class="vs-checkbox--check">
                                                                <i class="vs-icon feather icon-check"></i>
                                                            </span>
                                                        </span>
                                                        <span class=""> I accept the terms & conditions.</span>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <router-link class="btn btn-outline-primary float-left btn-inline mb-50" :to="'login'">Login</router-link>
                                        <button type="submit" class="btn btn-primary float-right btn-inline mb-50">Submit</button>
                                    </form>
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
  import User from "../../apis/User"
  export default {  
    data() {
      return {
        form : {
          first_name : null,
          last_name : null,
          email : null,
          password : null,
          password_confirmation : null,
        },

        errors : [],
      }
    },
    methods : {
      formSubmit() {
        User.register(this.form)
          .then((res)=> {
            User.auth().then((res)=>{
              this.$store.commit('currentUser/setUser', res.data)
              this.$store.commit('currentUser/setIsAuth', true)
              this.$router.push({ name: 'app' })
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
