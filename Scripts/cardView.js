class cardView {
  constructor(controller) {
    this.controller = controller;
    window.EventMediator.on("render", () => this.render());
    this.render();
  }
  render() {
    const target = document.getElementById("moviesTarget");
    if (this.controller.modelLoading) {
      console.log(this.controller.modelLoading);
      target.innerHTML = "Loading....";
      return;
    }
    const template = document.getElementById("template2").innerHTML;
    const rendered = Mustache.render(template, {
      movies: this.controller.modelData.results.map((res) => {
        return {
          src:
            "https://www.themoviedb.org/t/p/w440_and_h660_face" +
            res.backdrop_path,
          movieName: res.original_title,
          movieRating: res.vote_average,
        };
      }),
    });
    target.innerHTML = rendered;
  }
}
export { cardView };
