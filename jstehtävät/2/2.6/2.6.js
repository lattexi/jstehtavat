const numMovies = parseInt(prompt("Enter the number of movies you want to rate:"));

const movies = [];

for (let i = 0; i < numMovies; i++) {
    const movieTitle = prompt("Enter the title of movie " + (i + 1) + ":");
    const movieRating = parseInt(prompt("Enter the rating (1-5) for movie " + (i + 1) + ":"));

    const movie = {
        title: movieTitle,
        rating: movieRating
    };

    movies.push(movie);
}

movies.sort(function (a, b) {
    return b.rating - a.rating;
});

const highestRatedMovie = movies[0];

let output = "<h2>Movies</h2>";
for (let i = 0; i < movies.length; i++) {
    output += "<p>" + movies[i].title + " - Rating: " + movies[i].rating + "</p>";
}
output += "<h2>Highest Rated</h2>";
output += "<p>Title: " + highestRatedMovie.title + "</p>";
output += "<p>Rating: " + highestRatedMovie.rating + "</p>";

document.body.innerHTML = output;
