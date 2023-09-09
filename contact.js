const scriptURL = 'https://script.google.com/macros/s/AKfycbxEXm87gZIeKCLZtkEAe7wLZHZYl_k8VsMySXzX2V1apwlm11W2daZpMhcWZch6Dvg/exec'
const form = document.forms['ratu-contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
        .then(data => {
            // Periksa jika pengiriman berhasil
            if (data.result === 'success') {
                // Kosongkan semua kolom input pada formulir
                form.reset();
                alert('Thank you, your message has been sent!');
            } else {
                alert('Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            alert('Sorry, an error occurred while sending the message. Please try again.');
        });
})