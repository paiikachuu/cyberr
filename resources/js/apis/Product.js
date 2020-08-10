import Api from "./Api"
import Http from "./Http"
import Csrf from "./Csrf"

export default {
    async getProducts() {
        await Csrf.getCookie();
        return Http.get("/products")
    }
}   