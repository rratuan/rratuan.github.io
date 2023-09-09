let stackBtn = document.getElementById('techStackBtn');
let toolsBtn = document.getElementById('toolsBtn');
let stackContainer = document.getElementById('stack-container');
let toolsContainer = document.getElementById('tools-container');

toolsContainer.style.display = 'none'

stackBtn.addEventListener('click', function() {
    stackContainer.style.display = 'block';
    toolsContainer.style.display = 'none';
});

toolsBtn.addEventListener('click', function() {
    stackContainer.style.display = 'none';
    toolsContainer.style.display = 'block';
})

