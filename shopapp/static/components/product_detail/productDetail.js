import { rpc } from "../../core/rpc.js";
 const { Component,onWillStart} = owl;
export class ProductDetail extends Component{
    setup() {
        // this.params = this.props.params;
        onWillStart(async () => {
            console.log(this.props.productID)

            const x = this.props
            debugger
            this.datas = await rpc('/get_product_details', { 'product_id': this.props.params.productID });
        });
    }
}

ProductDetail.template = "ProductDetail"