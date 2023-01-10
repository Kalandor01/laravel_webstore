import ItemAdminView from "../View/ItemAdminView.js";

class ItemsAdminView {
    #newButton

    constructor(itemList, containerName) {
        let container = $(containerName);
        container.empty();
        container.append(`<table id="items">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
        </table>`);
        let itemsDiv = $("#items");

        itemList.forEach(item => {
            new ItemAdminView(item, itemsDiv)
        });
        itemsDiv.append(`
        <tr class="item">
            <td>Id</td>
            <td><input type="text" name="name"></td>
            <td><input type="text" name="brand"></td><>
            <td><input type="number" name="price"></td>
            <td><button id="newItem">Create</button></td>
        </tr>
        `);

        this.#newButton = $(`#newItem`);


        this.#newButton.on("click", () => {
            this.clickNewButtonEvent();
        })
    }

    clickNewButtonEvent() {
        let name = $(`input[name="name"]`).val();
        let brand = $(`input[name="brand"]`).val();
        let price = $(`input[name="price"]`).val();
        let item = {"id": "new id", "name": name, "brand": brand, "price": price};

        window.dispatchEvent(
            new CustomEvent("new", {detail:(item)})
        );
    }
}

export default ItemsAdminView;