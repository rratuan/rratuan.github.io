// Fungsi untuk memuat halaman sesuai dengan informasi terakhir yang disimpan
function loadPage() {
    var lastVisitedPage = sessionStorage.getItem('lastVisitedPage');

    // Jika tidak ada informasi terakhir, atau halaman terakhir adalah null atau undefined, tampilkan halaman home
    if (!lastVisitedPage || lastVisitedPage === 'null' || lastVisitedPage === 'undefined') {
        openMenu('home');
    } else {
        openMenu(lastVisitedPage);
    }
}

function openMenu(namaHidangan) {
    var i;
    var x = document.getElementsByClassName("hidangan");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(namaHidangan).style.display = "flex";
    // Simpan informasi halaman terakhir yang dikunjungi hanya jika halaman terakhir belum pernah disimpan
    var lastVisitedPage = sessionStorage.getItem('lastVisitedPage');
    if (!lastVisitedPage || lastVisitedPage === 'null' || lastVisitedPage === 'undefined') {
        sessionStorage.setItem('lastVisitedPage', namaHidangan);
    }
}

// function mengurangi jumlah pesanan
function decreaseQuantity(button) {
    var quantityElement = button.nextElementSibling; // Menggunakan nextElementSibling untuk mendapatkan elemen berikutnya (span.quantity)
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    }
}

// function menambah jumlah pesanan
function increaseQuantity(button) {
    var quantityElement = button.previousElementSibling; // Menggunakan previousElementSibling untuk mendapatkan elemen sebelumnya (span.quantity)
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

