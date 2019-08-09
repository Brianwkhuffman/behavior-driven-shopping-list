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
  if (shopList.getItems()[idx].isDone === false) {
    checkbox.style.textDecoration = "line-through";
    shopList.getItems()[idx].check();
    checkbox.className = `completed_${shopList.getItems()[idx].isDone}`;
  } else {
    checkbox.style.textDecoration = "none";
    shopList.getItems()[idx].uncheck();
    checkbox.className = `completed_${shopList.getItems()[idx].isDone}`;
  }
}

function removeItemButtonClicked(idx) {}
