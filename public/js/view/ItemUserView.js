class ItemsUserView {
    #item
    #div
    #buyButton

    constructor(item, pElement, x) {
        this.#item = item;
        console.log(this.#item);
        pElement.append(`
        <tr class="item">
            <td>${this.#item.name}</td>
            <td>${this.#item.brand}</td><>
            <td>${this.#item.price} Ft</td>
            <td><button id="buy${this.#item.id}">Buy</button></td>
        </tr>
        `);

        this.#div = pElement.children(".item:last-child");
        this.#buyButton = $(`#buy${this.#item.id}`);


        this.#buyButton.on("click", () => {
            this.clickBuyButtonEvent();
        })
    }

    clickBuyButtonEvent() {
        window.dispatchEvent(
            new CustomEvent("buy", {detail:(this.#item)})
        );
    }
}

export default ItemsUserView;