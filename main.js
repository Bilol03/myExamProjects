let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'
let mainAppend = document.querySelector('.append')
let topMovie = document.querySelector('.btns1')
let popular = document.querySelector('.btns2')
let upcoming = document.querySelector('.btns3')

let search = document.querySelector("#search")
let min = document.querySelector("#min")
let max = document.querySelector("#max")
let btn = document.querySelector('.btn')

let prev = document.querySelector('.prev')
let title = document.querySelector('.title')
let next = document.querySelector('.next')

let upcomingApi = 'https://api.themoviedb.org/3/movie/upcoming?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1'
let topRatedApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1'
let popularApi = 'https://api.themoviedb.org/3/movie/popular?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1'


async function rend() {
    let responseUpcoming = await fetch(upcomingApi)
    let responseRated = await fetch(topRatedApi)
    let responsePopular = await fetch(popularApi)


    responseUpcoming = await responseUpcoming.json()
    responseRated = await responseRated.json()
    responsePopular = await responsePopular.json()


    render(responseUpcoming, responseRated, responsePopular)
    topMovies(responseUpcoming)
    searchesSort(responseUpcoming, responseRated, responsePopular)

}
rend()




async function topMovies(response){
    for(let top of response.results){
        let movie = document.createElement('div')
        movie.className = 'movie'
        
        movie.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${top.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
        
        <div class="movie-info">
            <h3>${top.original_title}</h3>
            <span class="orange">${top.vote_average}</span>
        </div>
        <span class="date">${top.release_date}</span>
    `
        mainAppend.append(movie)
    }
}
topMovies()



async function render (response1, response2, response3){
    topMovie.onclick = ( () => {
        mainAppend.innerHTML = null

        for(let top of response1.results){
            let movie = document.createElement('div')
            movie.className = 'movie'
            
            movie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${top.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
            
            <div class="movie-info">
                <h3>${top.original_title}</h3>
                <span class="orange">${top.vote_average}</span>
            </div>
            <span class="date">${top.release_date}</span>
        `
            mainAppend.append(movie)

        }
        topMovies()
    })

    popular.onclick = ( () => {
        mainAppend.innerHTML = null
        for(let top of response2.results){
            let movie = document.createElement('div')
            movie.className = 'movie'
            
            movie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${top.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
            
            <div class="movie-info">
                <h3>${top.original_title}</h3>
                <span class="orange">${top.vote_average}</span>
            </div>
            <span class="date">${top.release_date}</span>
        `
            mainAppend.append(movie)

        }
    })


    upcoming.onclick = ( () => {
        mainAppend.innerHTML = null
        for(let top of response3.results){
            let movie = document.createElement('div')
            movie.className = 'movie'
            
            movie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${top.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
            
            <div class="movie-info">
                <h3>${top.original_title}</h3>
                <span class="orange">${top.vote_average}</span>
            </div>
            <span class="date">${top.release_date}</span>
        `
            mainAppend.append(movie)

        }
    })
}

async function searchesSort (response1, response2, response3) {
    btn.addEventListener('click', function () {
        alert("This part does not work yet! ")
    })
}


async function bottomRender() {
    prev.onclick = ( () => {
        alert("This part does not work yet!")
    })
    next.onclick = ( () => {
        alert("This part does not work yet!")
    })


}
bottomRender()


render()

