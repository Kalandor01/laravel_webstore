import ItemsAdminView from "../View/ItemsAdminView.js";
import ItemsUserView from "../View/ItemsUserView.js";
import ItemModel from "../Model/ItemModel.js";

class ItemController {
    #endpoint
    #itemModel

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        console.log(token);
        this.#endpoint = "/items";
        this.#itemModel = new ItemModel(token);

        $("#admin").on("click", ()=>{
            this.#itemModel.getData(this.#endpoint, this.getItemssAdminData);
        });
        $("#public").on("click", ()=>{
            this.#itemModel.getData(this.#endpoint, this.getItemssUserData);
            // this.getItemssUserData(this.#itemModel.getBooks());
        });


        $(window).on("new", (evt) => {
            this.#itemModel.newItem(evt.detail);
            this.#itemModel.newData(this.#endpoint, evt.detail);
            let items = this.#itemModel.getItems();
            let view = new ItemsAdminView(items, "main");
        })

        $(window).on("buy", (evt) => {
            this.#itemModel.buyItem(evt.detail);
            let items = this.#itemModel.getItems();
            let view = new ItemsUserView(items, "main");
        })

        $(window).on("del", (evt) => {
            this.#itemModel.delItem(evt.detail);
            this.#itemModel.delData(this.#endpoint + "/" + evt.detail.id);
            let items = this.#itemModel.getItems();
            let view = new ItemsAdminView(items, "main");
        })
    }

    getItemssAdminData(itemList) {
        console.log(itemList);
        new ItemsAdminView(itemList, "main");
    }

    getItemssUserData(itemList) {
        console.log(itemList);
        new ItemsUserView(itemList, "main");
    }
}

export default ItemController;