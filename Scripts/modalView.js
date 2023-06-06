class ModalView {
  constructor(controller) {
    this.controller = controller;
    window.EventMediator.on("attach-modal-listeners", () => this.render());
  }
  render() {
    const target = document.getElementById("modalTarget");
    const template = document.getElementById("template3").innerHTML;
    const controller = this.controller
    $(".card").on("click", function () {
      const data = controller.modelData.results[this.id]
      const rendered = Mustache.render(template, {
        imageSrc:
          "https://www.themoviedb.org/t/p/w440_and_h660_face" +
          data.backdrop_path,
        name: data.original_title,
        rating: data.vote_average,
        votesCount: data.vote_count,
        description: data.overview,
      });
      target.innerHTML = rendered;
      $(target.children[0]).modal("show")
      $(".close-btn").on("click", function () {
        $(target.children[0]).modal("hide")
      })
    })
  }
}
export { ModalView };

