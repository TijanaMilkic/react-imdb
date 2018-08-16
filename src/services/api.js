const key = '79844e20';
const baseURL = `http://www.omdbapi.com/?apikey=${key}&`;

export function fetchMovie(title) {
    let url = `${baseURL}t=${title}`;   
    return fetch(url)
        .then(response => response.json())
}

export function fetchMovieByID(id) {
    let url = `${baseURL}i=${id}`;   
    return fetch(url)
        .then(response => response.json())
}