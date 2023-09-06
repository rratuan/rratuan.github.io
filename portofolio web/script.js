let myIframe = document.getElementById('myIframe');

// Fungsi untuk mengganti sumber iframe
function gantiSumberIframe(src) {
    // Ganti URL sumber iframe dengan URL yang diinginkan
    myIframe.src = src; // Ganti URL ini sesuai dengan yang Anda inginkan
}

// Menambahkan event listener ke tombol
gantiSourceButton.addEventListener('click', gantiSumberIframe);