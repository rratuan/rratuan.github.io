const scriptURL = 'https://script.google.com/macros/s/AKfycbxEXm87gZIeKCLZtkEAe7wLZHZYl_k8VsMySXzX2V1apwlm11W2daZpMhcWZch6Dvg/exec'
const form = document.forms['ratu-contact-form']
let alertSuccess = document.getElementById('alertSuccess');
let alertFailed = document.getElementById('alertFailed')

// alertSuccess.style.display = 'none'
// alertFailed.style.display = 'none'

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
        .then(data => {
            // Periksa jika pengiriman berhasil
            if (data.result === 'success') {
                // Kosongkan semua kolom input pada formulir
                form.reset();
                alertSuccess.style.display = 'block'
                
            } else {
                alertFailed.style.display = 'block'
            }
        })
        .catch(error => {
            console.error('An error:', error);
            alert('Sorry, an error while sending the message. Please try again.');
        });
})