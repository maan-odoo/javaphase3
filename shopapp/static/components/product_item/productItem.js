import {} from "../product_list/productList.js"
const { Component,markup,useRef } = owl;

export class ProductItem extends Component {
    setup() {
        this.productRef = useRef('product');
    }

    // ---------------------------------------
    // Getters
    // ---------------------------------------

    get getMarkupValue() {
        return markup(this.props.productItem.description);
    }
    

    // ---------------------------------------
    // Handlers
    // ---------------------------------------

    /**
     * This method redirects to forum details page.
     *
     * @param {DOMEvent} ev 
     */
     _onclickProduct(ev) {
        const productID = ev.currentTarget.getAttribute('data-id');
        console.log(productID)
        const changeScreenEvent = new CustomEvent('change-screen', { bubbles: true, detail: { screenName: 'ProductDetail', params: { productID: parseInt(productID) } }}, );
        this.productRef.el.dispatchEvent(changeScreenEvent);
        // const postList = this.env.allComponents['postList'];
        // this.env.state.currentScreen = postList;
        // this.env.state.params = { forumID: parseInt(forumID) };
    }
}

ProductItem.template = "ProductItem";