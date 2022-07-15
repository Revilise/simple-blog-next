let container = document.querySelector('.details')
const btn = document.querySelector('.detele-btn')
const id = new URLSearchParams(window.location.search).get('id')

const render = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id) // fetch single post
  const post = await res.json();

  let date = new Date(post.date).toDateString()
  const template = `
  <article>
      <div>
        <h2>${post.title}</h2>
        <p class="date"><small>${date}</small></p>
        <div class="content">${post.content}</div>
      </div>
    </article>
  `
  container.innerHTML = template
}

btn.addEventListener("click", async (e) => {
  const res = await fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE'
  })

  window.location.href = window.location.href.replace("details.html", "index.html")
})

window.addEventListener('DOMContentLoaded', () => render())