class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }
  check() {
    this.isDone = true;
  }
  uncheck() {
    this.isDone = false;
  }
  render() {
    let htmlOutput = `<li class="completed_${this.isDone}"><span>${this.name}</span><span>${this.description}</span></li>`;
    return htmlOutput;
  }
}
