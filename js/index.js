let container = document.querySelector('.articles')

const render = async () => {
  let url = 'http://localhost:3000/posts'; //endpoint

  const res = await fetch(url);
  const posts = await res.json(); // store all data inside posts
  //console.log(posts)
  
  let template = ''
  posts.forEach(post => {
    template += `
    <article>
      <div>
        <h2>${post.title}</h2>
        <div class="content">${post.content.slice(0, 200)}</div>
        <button onclick="window.location.href = '/details.html?id=${post.id}'">read more...</button>
      </div>
    </article>
    `
  })
  container.innerHTML = template
}

window.addEventListener("DOMContentLoaded", () => render())