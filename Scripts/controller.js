class Controller {
  constructor(model) {
    this.model = model;
    window.EventMediator.on("movies.loaded", (data) => {
      this.model.movies = data;
      this.model.isLoading = false;
      console.log(this.model.movies);
      window.EventMediator.emit("render");
    });
    this.fetchMovies();
  }
  get modelLoading() {
    return this.model.isLoading;
  }
  get modelData() {
    return this.model.movies;
  }
  fetchMovies() {
    $.ajax({
      url: "https://api.themoviedb.org/3/movie/popular?api_key=baa5ad8737855832863aad27513d65b6",
      success: function (data) {
        window.EventMediator.emit("movies.loaded", data);
      },
      error: function () {},
    });
  }
}
export { Controller };
