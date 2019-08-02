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
      //   cart.addItem(trash);
      expect(cart.addItem.bind(cart, trash)).to.throw(Error);
    });
  });
  describe(".removeItem", function() {
    it("should be a function", function() {
      let cart = new ShoppingList();
      expect(cart.removeItem).to.be.a("function");
    });
    it("should delete item from items array", function() {
      let cart = new ShoppingList();
      let food = new ShoppingListItem("apples", "food");
      let book = new ShoppingListItem("comics", "marvel");
      let drink = new ShoppingListItem("coke", "beverage");
      cart.addItem(food);
      cart.addItem(book);
      cart.addItem(drink);
      cart.removeItem(book);

      cart.items.should.contain(food);
      cart.items.should.contain(drink);
      cart.items.should.not.contain(book);
    });
    it("should delete last item if no parameters", function() {
      let cart = new ShoppingList();
      let food = new ShoppingListItem("apples", "food");
      let book = new ShoppingListItem("comics", "marvel");
      let drink = new ShoppingListItem("coke", "beverage");
      cart.addItem(food);
      cart.addItem(book);
      cart.addItem(drink);
      cart.removeItem();

      cart.items.should.contain(food);
      cart.items.should.contain(book);
      cart.items.should.not.contain(drink);
    });
    it("should only take in ShoppingListItem object", function() {
      let cart = new ShoppingList();
      let food = new ShoppingListItem("apples", "food");
      let book = new ShoppingListItem("comics", "marvel");
      let drink = new ShoppingListItem("coke", "beverage");
      cart.addItem(food);
      cart.addItem(book);
      cart.addItem(drink);

      expect(cart.removeItem.bind(cart, "food")).to.throw(Error);
    });
  });
});
