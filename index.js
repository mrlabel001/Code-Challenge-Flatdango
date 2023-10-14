fetch("http://localhost:3000/films")
.then(res => res.json())
.then(movie => {
    let movie1 = document.getElementById("movie1")
    movie1.innerHTML = `
    <p>title: ${movie[0].title}<br><br>
    runtime: ${movie[0].runtime}<br><br>
    capacity: ${movie[0].capacity}<br><br>
    showtime: ${movie[0].showtime}<br><br>
    tickets_sold: ${movie[0].tickets_sold}<br><br>
    description: ${movie[0].description}</p>
    <br><br><img src="${movie[0].poster}" alt="poster"/>
    `
    console.log(movie[0])
})