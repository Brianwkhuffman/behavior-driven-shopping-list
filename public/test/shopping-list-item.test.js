const expect = chai.expect;
const should = chai.should();

describe("ShoppingListItem", function() {
  it("should be a function", function() {
    expect(ShoppingListItem).to.be.a("function");
  });
  it("should have a name property", function() {
    let food = new ShoppingListItem("apples", "food");
    food.name.should.equal("apples");
  });
  it("should have a description property", function() {
    let food = new ShoppingListItem("apples", "food");
    food.description.should.equal("food");
  });
  it("should have an isDone property", function() {
    let food = new ShoppingListItem("apples", "food");
    food.isDone.should.equal(false);
  });
  describe(".check", function() {
    it("should be a function", function() {
      let food = new ShoppingListItem("apples", "food");
      expect(food.check).to.be.a("function");
    });
    it("property isDone should be true", function() {
      let food = new ShoppingListItem("apples", "food");
      food.check();
      expect(food.isDone).to.be.true;
    });
  });
  describe(".uncheck", function() {
    it("should be a function", function() {
      let food = new ShoppingListItem("apples", "food");
      expect(food.uncheck).to.be.a("function");
    });
    it("property isDone should be false", function() {
      let food = new ShoppingListItem("apples", "food");
      food.check();
      food.uncheck();
      expect(food.isDone).to.be.false;
    });
  });
  //   describe(".render", function() {});
});
