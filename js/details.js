let container = document.querySelector('.details')
const id = new URLSearchParams(window.location.search).get('id')

const render = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id) // fetch single post
  const post = await res.json();

  const template = `
  <article>
      <div>
        <h2>${post.title}</h2>
        <div class="content">${post.content}</div>
      </div>
    </article>
  `
  container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => render())