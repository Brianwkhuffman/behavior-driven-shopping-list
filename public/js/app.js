let shopList = new ShoppingList();

document
  .getElementById("addShoppingListItemButton")
  .addEventListener("click", function() {
    addToShoppingList();
    let renderList = shopList.render();
    document.getElementById("content").innerHTML = renderList;
    function addToShoppingList() {
      let newShoppingListItem = new ShoppingListItem(
        document.getElementById("addItemForm").title.value,
        document.getElementById("addItemForm").description.value
      );
      shopList.addItem(newShoppingListItem);
    }
  });

function changeCheckedStatus(idx, checkbox) {
  checkbox.shopList.check();
}
