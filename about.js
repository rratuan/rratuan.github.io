document.getElementById('techStackBtn').addEventListener('click', function() {
    document.getElementById('stack-container').style.display = 'block';
    document.getElementById('tools-container').style.display = 'none';
});

document.getElementById('toolsBtn').addEventListener('click', function() {
    document.getElementById('stack-container').style.display = 'none';
    document.getElementById('tools-container').style.display = 'block';
});
document.getElementById('tools-container').style.display = 'none';
