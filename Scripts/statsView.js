class StatsView {
  constructor(controller) {
    this.controller = controller;
    window.EventMediator.on("render", () => this.render());
    this.render();
    document.getElementById("next").addEventListener("click", () => this.controller.handleNextPage())
    document.getElementById("previous").addEventListener("click", () => this.controller.handlePreviousPage())
  }
  render() {
    this.target = document.getElementById("target");
    if (this.controller.modelLoading) {
      this.target.innerHTML = "Loading....";
      return;
    }
    let topRated = { vote_average: 0 }
    for (let movie of this.controller.modelData.results) {
      if (movie.vote_average > topRated.vote_average) {
        topRated = movie
      }
    }
    const template = document.getElementById("template").innerHTML;
    const rendered = Mustache.render(template, {
      pageNum: this.controller.modelData.page,
      movieNum: this.controller.modelData.results.length,
      topMovieName: topRated.original_title,
      rating: topRated.vote_average,
    });
    this.target.innerHTML = rendered;
  }
}
export { StatsView };

