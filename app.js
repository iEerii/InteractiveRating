document.addEventListener('DOMContentLoaded', function() {

    const numButtons = document.querySelectorAll('.list');
    console.log('hola', numButtons)

    function activeBotton() {
        this.value;
        
        numButtons.forEach((button) => {
            button.classList.remove('active');
            this.classList.add('active');
        });

        localStorage.setItem('value', this.value);

    }
    
    numButtons.forEach((button) => button.addEventListener('click', activeBotton));
    
})