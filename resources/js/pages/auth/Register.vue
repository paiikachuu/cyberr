<template>
  <div class="container">
    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <h3>Registration</h3>
          <br>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input v-model="form.first_name" name="first_name" type="first_name" class="form-control" id="first_name" required/>
                <small v-if="errors.first_name" class="text-danger cbrp-form-error-link">
                    {{ errors.first_name[0] }}
                </small>
              </div>
               <div class="form-group col-md-6">
                <label for="inputEmail4">Last Name</label>
                <input v-model="form.last_name"  name="last_name" type="last_name" class="form-control" id="last_name" required/>
                <small v-if="errors.last_name" class="text-danger cbrp-form-error-link">
                    {{ errors.last_name[0] }}
                </small>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Email</label>
              <input v-model="form.email"  name="email" type="email" class="form-control" id="inputEmail" required/>
              <small v-if="errors.email" class="text-danger cbrp-form-error-link">
                  {{ errors.email[0] }}
              </small>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input v-model="form.password"  name="password" type="password" class="form-control" id="inputPassword4" required/>
                <small v-if="errors.password" class="text-danger cbrp-form-error-link">
                    {{ errors.password[0] }}
                </small>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Confirm Password</label>
                <input v-model="form.password_confirmation"  name="password_confirmation" type="password" class="form-control" id="inputPassword4" required/>
                <small v-if="errors.password_confirmation" class="text-danger cbrp-form-error-link">
                    {{ errors.password_confirmation[0] }}
                </small>
              </div>
            </div>
            <!-- <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">Check me out</label>
              </div>
            </div> -->
            <button @click.prevent="formSubmit()" class="btn btn-primary">Submit</button>
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
            this.$router.push({ name: 'login' })
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
