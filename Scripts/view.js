class View {
  constructor(controller) {
    this.controller = controller;
    window.EventMediator.on("render", this.render);
    this.render();
  }
  render() {
    const getMovieNum = this.controller.getNumOfMovies();
    const template = document.getElementById("template").innerHTML;
    const rendered = Mustache.render(template, {
      pageNum: "1",
      movieNum: getMovieNum,
      topMovieName: "Top GUN:Maverick",
      rating: "8.3",
    });
    document.getElementById("target").innerHTML = rendered;
  }
}
export { View };
