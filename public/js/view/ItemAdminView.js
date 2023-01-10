class ItemsAdminView {
    #item
    #div
    #buyButton

    constructor(item, pElement, x) {
        this.#item = item;
        console.log(this.#item);
        pElement.append(`
        <tr class="item">
            <td>${this.#item.id}</td>
            <td>${this.#item.name}</td>
            <td>${this.#item.brand}</td><>
            <td>${this.#item.price} Ft</td>
            <td><button id="del${this.#item.id}">Delete</button></td>
        </tr>
        `);

        this.#div = pElement.children(".item:last-child");
        this.#buyButton = $(`#del${this.#item.id}`);


        this.#buyButton.on("click", () => {
            this.clickDelButtonEvent();
        })
    }

    clickDelButtonEvent() {
        window.dispatchEvent(
            new CustomEvent("del", {detail:(this.#item)})
        );
    }
}

export default ItemsAdminView;