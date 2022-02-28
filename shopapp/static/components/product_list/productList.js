import { rpc } from "../../core/rpc.js";
import { ProductItem } from "../../components/product_item/productItem.js";

const { Component, onWillStart } = owl;

export class ProductList extends Component {
    async setup() {
        onWillStart(async () => {
            this.products = await rpc("/get_products", {});
        });
    }
}

ProductList.template = "ProductList";
ProductList.components = { ProductItem };