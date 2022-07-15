const form = document.querySelector('form')

const create = async (e) => {
  e.preventDefault();

  const newPost = {
    title: form.title.value,
    content: form.content.value,
    date: new Date()
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {'Content-Type': 'application/json'}
  })

  window.location.href = window.location.href.replace("create.html", "index.html")
}

form.addEventListener("submit", create)