let container = document.querySelector('.articles')
let search = document.querySelector('.search')
let search_input = document.querySelector('.search-input')

const render = async (term) => {
  let url = 'http://localhost:3000/posts?_sort=date&_order=desc';

  if (term) {
    url += `&q=${term}`
  }

  const res = await fetch(url);
  const posts = await res.json();

  let template = ''

  if (posts.length === 0) {
    template += `
    <div class="nothing_found"><img src="img/sadcat.jpg"></div>
    `
  } else {
    posts.forEach(post => {
      let date = new Date(post.date).toDateString()
      template += `
      <article>
        <div>
          <h2>${post.title}</h2>
          <p class="date"><small>${date}</small></p>
          <div class="content">${post.content.slice(0, 200)}</div>
          <a class="nav-btn" href="details.html?id=${post.id}">read more...</a>
        </div>
      </article>
      `
    })
  }
  container.innerHTML = template
}

window.addEventListener("DOMContentLoaded", () => render())

search.addEventListener("submit", (event) => {
  event.preventDefault()
  render(search_input.value.trim())
})