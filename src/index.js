const init = () => {
// Selects the form element
const inputForm = document.querySelector("form")

// Adds an event listener to the forms submit event
inputForm.addEventListener("submit", (event) => {
  // Prevents the default page refresh
  event.preventDefault()

  // Gets the input element where the user enters the movie ID
  const input = document.querySelector("input#searchByID")

  // Fetches movie data from the server based on ID input
  fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      // Targets the elements where the movie details will be displayed
      const title = document.querySelector("section#movieDetails h4")
      const summary = document.querySelector("section#movieDetails p")

      // Updates the elements with the fetched movie data
      title.innerText = data.title
      summary.innerText = data.summary
    })
})
}

document.addEventListener('DOMContentLoaded', init);