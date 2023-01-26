document.addEventListener('DOMContentLoaded', function() {

    const raiting = document.getElementById('raiting');

    raiting.innerHTML = localStorage.getItem('value');
    
})