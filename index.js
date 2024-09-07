const scriptURL = 'https://script.google.com/macros/s/AKfycbzKMEXuFjqny28tT82oyE0q4lQfAB4hw7-qkaUoeZnbNOyfkLdIWEodWEFzc9zHQK0/exec'
const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." )) 
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})