import ItemUserView from "../View/ItemUserView.js";

class ItemsUserView {


    constructor(itemList, containerName) {
        let container = $(containerName);
        container.empty();
        container.append(`<table id="items">
            <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
        </table>`);
        let itemsDiv = $("#items");

        itemList.forEach(item => {
            new ItemUserView(item, itemsDiv)
        });
    }
}

export default ItemsUserView;