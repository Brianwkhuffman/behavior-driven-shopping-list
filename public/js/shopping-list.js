class ShoppingList {
  constructor() {
    this.items = [];
  }
  addItem(itemToAdd) {
    if (itemToAdd instanceof ShoppingListItem) {
      this.items.push(itemToAdd);
    } else {
      throw new Error();
    }
  }
  removeItem(itemToRemove) {
    let itemIndex = this.items.indexOf(itemToRemove);
    if (!itemToRemove) {
      this.items.pop();
    } else if (itemToRemove instanceof ShoppingListItem) {
      this.items.splice(itemIndex, 1);
    } else {
      throw new Error();
    }
  }
}
