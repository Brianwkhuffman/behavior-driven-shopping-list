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
  render(idx) {
    let htmlOutput = `<li class="completed_${
      this.isDone
    }" onchange="changeCheckedStatus(${idx}, this)"><input type="checkbox"/><span>${
      this.name
    }: </span><span>${this.description} </span><button>remove</button></li>`;
    return htmlOutput;
  }
}
