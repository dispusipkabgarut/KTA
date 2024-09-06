const scriptURL = 'https://script.google.com/macros/s/AKfycbzM6WS_J2kbAmNBxPXgoKR54l3FckoNqy88G_aBJqIzXV_X7-HNFxUKh202V1fS_hq1/exec'
const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." )) 
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})