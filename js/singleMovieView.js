function updateViewSingleMovie() {
    const movieId = model.inputs.singleMovie.movieId;
    const movie = findMovieById(movieId);
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHTML()}
        <h1>${movie.title}</h1>
        <div>
            <img src="${movie.imageUrl}" style="height: 120px"/>
        </div>
        <div>
            <b></b><br/>
            ${movie.year}<br/>
            ${movie.genre}
        </div>
        <h3>Rating</h3>
        ${createCurrentRatingHtml()}
        <h3>Gi din rating: </h3>
        <div style="display: flex; font-size: 200%">
            <div onclick="addRating(1, ${movieId})">★</div>
            <div onclick="addRating(2, ${movieId})">★</div>
            <div onclick="addRating(3, ${movieId})">★</div>
            <div onclick="addRating(4, ${movieId})">★</div>
            <div onclick="addRating(5, ${movieId})">★</div>
        </div>
    `;
}

function createCurrentRatingHtml() {
    const movieId = model.inputs.singleMovie.movieId;
    let ratingCount = 0;
    let ratingSum = 0;
    for (let rating of model.ratings) {
        if (rating.movieId == movieId) {
            ratingCount++;
            ratingSum += rating.stars;
        }
    }
    const rating = (ratingSum / ratingCount).toFixed(1);
    return /*HTML*/`
        Snitt rating: ${rating}<br/>
        Antall ratinger: ${ratingCount}<br/>
    `;
}
