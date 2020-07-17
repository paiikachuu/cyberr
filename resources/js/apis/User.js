import Api from "./Api"
import Http from "./Http"
import Csrf from "./Csrf"

export default {
    async register(form) {
        await Csrf.getCookie();
        return Http.post("/register", form)
    },
    async login(form) {
        await Csrf.getCookie();
        return Http.post("/login", form)
    },
    async logout(form) {
        await Csrf.getCookie();
        return Http.post("/logout", form)
    },
    auth() {
        return Api.get('/user')
    }
}   