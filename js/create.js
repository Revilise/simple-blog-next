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
    body: JSON.stringify(newPost), // parse from POJO to JSON
    headers: {'Content-Type': 'application/json'}
  })

  window.location.replace('/index.html')
}

form.addEventListener("submit", create)