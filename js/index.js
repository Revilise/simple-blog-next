let container = document.querySelector('.articles')

const render = async () => {

  // fistly, sort by date value
  // then, sort by desc parametr 
  let url = 'http://localhost:3000/posts?_sort=date&_order=desc'; //endpoint

  const res = await fetch(url);
  const posts = await res.json(); // store all data inside posts
  //console.log(posts)

  let template = ''
  posts.forEach(post => {
    let date = new Date(post.date).toDateString()
    template += `
    <article>
      <div>
        <h2>${post.title}</h2>
        <p class="date"><small>${date}</small></p>
        <div class="content">${post.content.slice(0, 200)}</div>
        <button onclick="window.location.href = '/details.html?id=${post.id}'">read more...</button>
      </div>
    </article>
    `
  })
  container.innerHTML = template
}

window.addEventListener("DOMContentLoaded", () => render())