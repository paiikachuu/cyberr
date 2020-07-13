<template>
  <div class="container">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h3>Login</h3>
          <br />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                v-model="form.email"
                type="email"
                class="form-control"
                id="exampleInputEmails1"
                aria-describedby="emailHelp"
              />
              <small v-if="errors.email" class="text-danger cbrp-form-error-link">
                  {{ errors.email[0] }}
              </small>
              <small
                v-else
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
              <input v-model="form.password" type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button @click.prevent="login()" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import User from "../../apis/User"
  export default {  
    data() {
      return {
        form : {
          email : null,
          password : null,
        },

        errors : [],
      }
    },
    methods : {
      login() {
        User.login(this.form)
          .then((res)=> {
            this.$root.$emit('login', true);
            localStorage.setItem('auth', 'true')
            this.$router.push({ name: 'app' })
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
