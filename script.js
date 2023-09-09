document.addEventListener('DOMContentLoaded', function() {
    let myIframe = document.getElementById('myIframe');

    // Fungsi untuk mengganti sumber iframe
    function gantiSumberIframe(src) {
        // Ganti URL sumber iframe dengan URL yang diinginkan
        myIframe.src = src; // Ganti URL ini sesuai dengan yang Anda inginkan
    }

    // Even listener untuk tautan about
    let linkAbout = document.getElementById('linkAbout');

    linkAbout.addEventListener('click', function(e) {
        e.preventDefault(); // Untuk mencegah pengalihan ke halaman baru
        gantiSumberIframe('about.html');
    });

    // even listener untuk tautan project
    let linkProject = document.getElementById('linkProject');

    linkProject.addEventListener('click', function(e) {
        e.preventDefault();
        gantiSumberIframe('project.html');
    });

    // even listener untuk tautan contact
    let linkContact = document.getElementById('linkContact');

    linkContact.addEventListener('click', function(e) {
        e.preventDefault();
        gantiSumberIframe('contact.html');
    });

    // even listener untuk tautan home
    let linkHome = document.getElementById('linkHome');

    linkHome.addEventListener('click', function(e) {
        e.preventDefault();
        gantiSumberIframe('home.html');
    });

})
