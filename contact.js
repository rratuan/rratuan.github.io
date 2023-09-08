const scriptId = 'AKfycbzATnkARFdvMZxUq7YynylY7B4uC6pDmbQgbQYBITaZg6iPzzLSRzTu0SGKay-gn60ndA'
const scriptUrl = 'https://script.google.com/macros/s/AKfycbzATnkARFdvMZxUq7YynylY7B4uC6pDmbQgbQYBITaZg6iPzzLSRzTu0SGKay-gn60ndA/exec'

$(document).ready(function () {
    $('#form').on('submit', function (e) {
        e.preventDefault();

        var formData = {
            name: $('#inputName').val(),
            email: $('#inputEmail').val(),
            phone: $('#inputNumber').val(),
            comment: $('#inputComment').val()
        };

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbzATnkARFdvMZxUq7YynylY7B4uC6pDmbQgbQYBITaZg6iPzzLSRzTu0SGKay-gn60ndA/exec',
            method: 'POST',
            data: formData,
            success: function () {
                alert('Data berhasil disimpan ke database.');
                $('#form')[0].reset();
            },
            error: function () {
                alert('Terjadi kesalahan. Data tidak dapat disimpan.');
            }
        });
    });
});
