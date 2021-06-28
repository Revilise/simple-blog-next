let textarea = document.querySelector('textarea')

textarea.addEventListener('input', event => {
  console.log(event.target.style.height)
  event.target.style.height = "auto"
  console.log(event.target.style.height)
  event.target.style.height = event.target.scrollHeight + 16 + "px"
  console.log(event.target.style.height)
})