const MOVIE_API_KEY= `ae8115887a332015cc3739c9ecb9b70d`;
const API_URL= `https://api.themoviedb.org/3/movie/popular?`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

let movieContainer =document.querySelector(".movie-container")

const buildthedom = (results)=>{
    results.forEach( movie => {
        movieContainer.innerHTML += ` <div class="movie">
             <input type="hidden">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">

            <div class="info">
                <span class="movie-title">${movie.title}</span>
                <div class="count">
                    <div class="vote" >
                        <span>${movie.vote_average}</span>
                    </div>
                    <div class="release-date">
                        <span>${movie.release_date}</span>
                    </div>
                </div>
                
            </div>
           </div>`;
    });
}
const MOST_POPULAR_MOVIE= async()=>{
    const request= await fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1`);
    // const request = fetch('https://api.themoviedb.org/3/movie/popular?api_key=ae8115887a332015cc3739c9ecb9b70d')
    // console.log(request);

    const {results} = await request.json();
    

    // console.log(results);
    buildthedom(results);    

}

MOST_POPULAR_MOVIE();









































































































// const MOVIE_API_KEY = `ae8115887a332015cc3739c9ecb9b70d`
// const API_URL = `https://api.themoviedb.org/3/movie/popular?`
// const IMAGE_URL = `https://image.tmdb.org/t/p/w500`

// const MOST_POPULAR_MOVIE = async()=>{
//     const request =await fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1 `);
//     const {results}= await request.json();
//     console.log(results);
// }


// MOST_POPULAR_MOVIE();