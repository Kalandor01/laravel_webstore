
class ItemModel {
    #token
    #itemsList;

    constructor(token) {
        this.#token = token;
        this.#itemsList = [];
    }

    getData(endPoint, callback) {
        fetch(endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.#token,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#itemsList = data;
                callback(this.#itemsList);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    newData(endPoint, item) {
        fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.#token,
        },
        body: JSON.stringify({"name": item.name, "brand": item.brand, "price": item.price}),
        })
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    modData(endPoint, item) {
        fetch(endPoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.#token,
        },
        body: JSON.stringify({"name": item.name, "brand": item.brand, "price": item.prce}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    delData(endPoint) {
        fetch(endPoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.#token,
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    #findItem(itemId) {
        let itemIndex = -1;
        for (let x = 0; x < this.#itemsList.length; x++)
        {
            if (this.#itemsList[x].id == itemId) {
                itemIndex = x;
                break;
            }
        }
        return itemIndex;
    }

    getItems() {
        return this.#itemsList;
    }

    newItem(item) {
        let itemIndex = this.#findItem(item.id);
        if (itemIndex == -1)
        {
            this.#itemsList.push(item);

            console.log("new " + item.id);
            console.log(item);
        }
        else
        {
            console.log("id already exists");
        }
    }

    modItem(item) {
        let itemIndex = this.#findItem(item.id);
        if (itemIndex != -1)
        {
            this.#itemsList[itemIndex] = item;
        }
        console.log("mod " + item.id);
        console.log(item);
    }

    cancel() {
        console.log("cancel");
    }

    delItem(item) {
        console.log("del " + item.id);
        console.log(this.#itemsList.splice(this.#findItem(item.id), 1));
    }

    buyItem(item) {
        console.log("buy " + item.id);
    }

    decreaseItem(item) {
        console.log("decrease " + item.id);
    }

    unbuyItem(item) {
        console.log("unbuy " + item.id);
    }
}

export default ItemModel;