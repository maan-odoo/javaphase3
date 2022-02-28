import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ProductList } from "../components/product_list/productList.js";
import { ProductDetail } from "../components/product_detail/productDetail.js";


const { Component, mount, whenReady, useState } = owl;

class Shop extends Component {

    setup(){
        this.state = useState({currentScreen: 'productList', params: {} });
    }
    // ---------------------------------------
    // Handlers
    // ---------------------------------------

    /**
     * Changes current screen to given screen name.
     *
     * @param {DOMEvent} ev 
     */
     _onChangeScreen(ev) {
        const screenName = ev.detail.screenName;
        const params = ev.detail.params;
        this.state.currentScreen = screenName;
        this.state.params = params;
    }

}

Shop.template = "Shop";
Shop.components = { Header, ProductList, ProductDetail };

async function setup() {
    const templates = await rpc("/load-qweb", {});
    const env = {};
    mount(Shop, document.body, { templates, env });
}

whenReady(setup);
