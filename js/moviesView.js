function updateViewMovies(){    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Filmer</h1>
        ${createMoviesHtml()}
    `;
}

function createMoviesHtml(){
    const movies = model.movies;
    let html = '';
    for(let i = 0; i < movies.length; i++){
        const movie = movies[i];
        html += /*HTML*/`
            <div style="display: flex; gap: 10px">
                <div>
                    <img src="${movie.imageUrl}" style="height: 120px"/>
                </div>
                <div>
                    <b>${movie.title}</b><br/>
                    ${movie.year}<br/>
                    ${movie.genre}
                </div>
            </div>
        `;
    }
    return html;
}
