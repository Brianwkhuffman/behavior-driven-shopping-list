describe("ShoppingList", function() {
  it("should be a function", function() {
    expect(ShoppingList).to.be.a("function");
  });
  it("property items should be an empty array", function() {
    let cart = new ShoppingList();
    expect(cart.items).to.be.an("array");
    expect(cart.items).to.be.empty;
  });
  describe(".addItem", function() {
    it("should be a function", function() {
      let cart = new ShoppingList();
      expect(cart.addItem).to.be.a("function");
    });
    it("should take in a single  argument", function() {
      let cart = new ShoppingList();
      let food = new ShoppingListItem("apples", "food");
      cart.addItem(food);
      expect(cart.items).to.deep.equal([food]);
    });
    it("should only take in ShoppingListItem object", function() {
      let cart = new ShoppingList();
      let trash = { calvin: "suuuuper trash" };
      let str = "calvin is trash";
      let arr = ["calvin", "is", "trash"];
      let num = 0;
      cart.addItem(trash);
      cart.addItem(str);
      cart.addItem(arr);
      cart.addItem(num);
      expect(function() {
        cart.addItem(trash);
      }).to.throw(Error);
    });
  });
});
