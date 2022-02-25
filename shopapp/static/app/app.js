import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ProductList } from "../components/product_list/productList.js";


const { Component, mount, whenReady } = owl;

class Shop extends Component {

}

Shop.template = "Shop";
Shop.components = { Header, ProductList};

async function setup() {
    const templates = await rpc("/load-qweb", {});
    const env = {};
    mount(Shop, document.body, { templates, env });
}

whenReady(setup);
