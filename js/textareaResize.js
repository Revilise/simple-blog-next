let textarea = document.querySelector('textarea')

textarea.addEventListener('input', event => {
  event.target.style.height = "auto"
  event.target.style.height = event.target.scrollHeight + "px"
})
