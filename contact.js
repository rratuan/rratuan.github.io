const scriptURL = 'https://script.google.com/macros/s/AKfycbxEXm87gZIeKCLZtkEAe7wLZHZYl_k8VsMySXzX2V1apwlm11W2daZpMhcWZch6Dvg/exec'
const form = document.forms['ratu-contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
