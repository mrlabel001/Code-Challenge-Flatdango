//show movie once page reloads
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(movie => {
    let movie1 = document.getElementById("movie1")
    movie1.innerHTML = `
    <p id="p1">title: ${movie[0].title}<br><br>
    runtime: ${movie[0].runtime}<br><br>
    capacity: ${movie[0].capacity}<br><br>
    showtime: ${movie[0].showtime}<br><br>
    tickets_sold: ${movie[0].tickets_sold}<br><br>
    description: ${movie[0].description}</p>
    <br><br><img id="image1" src="${movie[0].poster}" alt="poster"/><br><br>
    `
})
//get list of all movie titles
let btn = document.getElementById("movieListBtn")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data =>{
        data.forEach(movie => {
            let listContainer = document.getElementById("list")
            let list = document.createElement("li")
            list.textContent = movie.title
            listContainer.appendChild(list)

            list.addEventListener("click", (e) =>{
                e.preventDefault()
                movieDetails(movie)
               
                

                
            })
        });
    })
})
//click movie to see details and buy tickets
function movieDetails(movie){
    let detailsContainer = document.getElementById("movieDetails")
    detailsContainer.innerHTML = `
      <p id="detailed">title:${movie.title}<br><br>
       runtime:${movie.runtime}<br><br>
       capacity:${movie.capacity}<br><br>
       showtime:${movie.showtime}<br><br>
       tickets_sold:${movie.tickets_sold}<br><br>
       description:${movie.description}</p>
      <img id="poster" src="${movie.poster}"/><br><br>
      <p id="leftmsg">Tickets Left</p><input type="submit" value="" id="ticketCount">
      <button id="buyBtn">Buy Ticket</button>`
    let buyBtn = document.getElementById("buyBtn")
    let ticketsleft = movie.capacity - movie.tickets_sold
    let leftContainer = document.getElementById("ticketCount")
        leftContainer.value = ticketsleft
   //buy
    buyBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        if(leftContainer.value>0){
            leftContainer.value = leftContainer.value-1
            window.alert("SUCCESFULLY PURCHASED!!")
        
        if(leftContainer.value === 1){
            leftContainer.value = 0
            buyBtn.style.background = "red"
            buyBtn.textContent = "Sold Out"
            window.alert("OOPS!! SOLD OUT")
        }}
        else{
            leftContainer.value = 0
            buyBtn.style.background = "red"
            buyBtn.textContent = "Sold Out"
            window.alert("OOPS!! SOLD OUT")
        }
        
    })
    }
    
