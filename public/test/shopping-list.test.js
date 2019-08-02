describe("ShoppingList", function() {
  it("should be a function", function() {
    expect(ShoppingList).to.be.a("function");
  });
  it("property items should be an empty array", function() {
    let newShoppingList = new ShoppingList();
    expect(newShoppingList.items).to.be.an("array");
    expect(newShoppingList.items).to.be.empty;
  });
  describe(".addItem", function() {
    it("should be a function", function() {
      let newShoppingList = new ShoppingList();
      expect(newShoppingList.addItem).to.be.a("function");
    });
    it("should take in a single ShoppingListItem argument", function() {
      let food = new ShoppinglistItem("apples", "food");
      let newShoppingList = new ShoppingList();
      newShoppingList.addItem(food);
      expect(newShoppingList.items).to.equal([food]);
    });
    it("should only take in ShoppingListItem object", function() {
      let trash = { calvin: "suuuuper trash" };
      let str = "calvin is trash";
      let arr = ["calvin", "is", "trash"];
      let num = 0;
      let newShoppingList = new ShoppingList();
      newShoppingList.addItem(trash);
      newShoppingList.addItem(str);
      newShoppingList.addItem(arr);
      newShoppingList.addItem(num);
      expect(newShoppingList.items).to.equal([]);
    });
  });
});
