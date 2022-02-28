const { Component,markup,useRef } = owl;
export class ProductDetail extends Component{
    setup() {

        this.productRef = useRef('product');
    }

    // ---------------------------------------
    // Getters
    // ---------------------------------------

    // get getMarkupValue() {
    //     return markup(this.props.forumItem.description);
    // }

    // ---------------------------------------
    // Handlers
    // ---------------------------------------

    /**
     * This method redirects to forum details page.
     *
     * @param {DOMEvent} ev 
     */
    // _onClickForum(ev) {
    //     const forumID = ev.currentTarget.getAttribute('data-id');
    //     const changeScreenEvent = new CustomEvent('change-screen', { bubbles: true, detail: { screenName: 'postList', params: { forumID: parseInt(forumID) } }}, );
    //     this.forumRef.el.dispatchEvent(changeScreenEvent);
    // }
}

ProductDetail.template = "ProductDetail"