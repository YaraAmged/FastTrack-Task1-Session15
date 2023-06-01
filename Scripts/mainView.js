class mainView {
  constructor(controller) {
    this.controller = controller;
    window.EventMediator.on("render", () => this.render());
    this.render();
  }
  render() {
    const target = document.getElementById("target");
    if (this.controller.modelLoading) {
      console.log(this.controller.modelLoading);
      target.innerHTML = "Loading....";
      return;
    }
    const template = document.getElementById("template").innerHTML;
    const rendered = Mustache.render(template, {
      pageNum: this.controller.modelData.page,
      movieNum: this.controller.modelData.results.length,
      topMovieName: "Top GUN:Maverick",
      rating: "8.3",
    });
    target.innerHTML = rendered;
  }
}
export { mainView };
