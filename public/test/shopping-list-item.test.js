const expect = chai.expect;
const should = chai.should();
var sandbox;

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
});
