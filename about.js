let techStack = document.getElementById('techStack');

techStack.addEventListener('click', function(){
    let container = document.getElementById('container');
    
    container.innerHTML = '';

    let techStackItems = document.getElementById('techStackItems').innerHTML;

    container.innerHTML = techStackItems;
})

let tools = document.getElementById('tools');

tools.addEventListener('click', function() {
    let container = document.getElementById('container');

    container.innerHTML = '';

    let toolsItems = ['Visual Studio Code', 'Git', 'Webpack', 'Babel'];
    
    container.innerHTML = toolsItems;

})