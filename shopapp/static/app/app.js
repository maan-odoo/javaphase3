import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
// import { ForumList } from "../components/forum_list/forumList.js";

const { Component, mount, whenReady } = owl;

class Shop extends Component {

}

Shop.template = "Shop";
Shop.components = { Header};

async function setup() {
    const templates = await rpc("/load-qweb", {});
    // // const templateFetch = await fetch("static/app/app.xml");
    // // const templates = await templateFetch.text();
    const env = {};
    mount(Header, document.body, { templates, env });
}

whenReady(setup);
