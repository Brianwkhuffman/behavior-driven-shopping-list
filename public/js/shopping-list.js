class ShoppingList {
  constructor() {
    this.items = [];
  }
  addItem(itemToAdd) {
    if (itemToAdd instanceof ShoppingListItem) {
      this.items.push(itemToAdd);
    }
  }
}
