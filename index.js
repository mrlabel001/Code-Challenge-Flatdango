fetch("http://localhost:3000/films")
    .then(res => res.json())
     .then(data => {
        data.forEach(movie => {
            let moviebox = document.getElementById("nav1")
            moviebox.innerHTML = `
            <h3>id: ${movie.id}</h3>
            <h3>title: ${movie.title}</h3>
            <h3>runtime: ${movie.runtime}</h3>
            <h3>capacity: ${movie.capacity}</h3>
            <h3>showtime: ${movie.showtime}</h3>
            <h3>tickets_sold: ${movie.tickets_sold}</h3>
            <h3>description: ${movie.description}</h3>
            <h3>poster: ${movie.poster}</h3>
            `
            moviebox.style.color = "red"
        });
     })

     //show list of all movies
     let listBtn = document.getElementById("movieList")
     listBtn.addEventListener("click", (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/films")
    .then(res => res.json())
     .then(data => {
        data.forEach(movie => {
            let movieContainer = document.getElementById("ul1")
          let li = document.createElement("li")
          li.className = "openMovie"
          li.innerHTML =`<li class="oneMovie" ><a href="#">${movie.title}</a></li>`
          movieContainer.appendChild(li)

            //see available tickets
          let buyTicket = movieContainer.querySelector(".openMovie")
          buyTicket.addEventListener("click", (e)=> {
            e.preventDefault()
            fetch("http://localhost:3000/films")
            .then(res => res.json())
            .then(data => {
                data.forEach(movie => {
                    let moviebox = document.getElementById("tickets")
                 moviebox.innerHTML = `
                    <h3>capacity: ${movie.capacity} <br><br>sold: ${movie.tickets_sold}</h3>
                    
                    `
                })
            })

          })
        
        })
    })
})
   



    