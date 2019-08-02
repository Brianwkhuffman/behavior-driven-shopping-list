describe("ShoppingList", function() {
  it("should be a function", function() {
    expect(ShoppingList).to.be.a("function");
  });
  it("should have property name of items", function() {
    let newShoppingList = new ShoppingList();
    expect(newShoppingList.items).to.exist;
  });
  it("should be an empty array", function() {
    let newShoppingList = new ShoppingList();
    expect(newShoppingList.items).to.be.empty;
  });
});
