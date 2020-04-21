function toggleMainMenu(){

    let elem = document.getElementById('menu');
    
    if (elem.classList.contains('responsive-menu')==true){
        elem.classList.remove('responsive-menu');
    } else {
        elem.classList.add('responsive-menu');
    }
    
}