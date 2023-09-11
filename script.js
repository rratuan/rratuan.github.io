document.addEventListener('DOMContentLoaded', function() {
    let myIframe = document.getElementById('myIframe');

    // Fungsi untuk mengganti sumber iframe
    function gantiSumberIframe(src) {
        // Ganti URL sumber iframe dengan URL yang diinginkan
        myIframe.src = src; // Ganti URL ini sesuai dengan yang Anda inginkan
    }

    // loop ganti warna navbar
    let menuLinks = document.querySelectorAll('div a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            menuLinks.forEach(function(link) {
                link.classList.remove('clickActive');
            });

            link.classList.add('clickActive')
        })
    })

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

// home active
document.addEventListener('DOMContentLoaded', function() {
    linkHome.classList.add('clickActive');
})