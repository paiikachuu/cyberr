import Api from "./Api"
import Csrf from "./Csrf"

export default {
    async register(form) {
        await Csrf.getCookie();
        return Api.post("/register", form)
    },
    async login(form) {
        await Csrf.getCookie();
        return Api.post("/login", form)
    },
    async logout(form) {
        await Csrf.getCookie();
        return Api.post("/logout", form)
    },
    auth() {
        return Api.get('/user')
    }
}   