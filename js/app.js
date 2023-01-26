document.addEventListener('DOMContentLoaded', function() {

    const numButtons = document.querySelectorAll('.list');
    const submitBtn = document.querySelector('.submit-box');
    

    function activeBotton() {
        this.value;
        
        numButtons.forEach((button) => {
            button.classList.remove('active');
            this.classList.add('active');
        });

        localStorage.setItem('value', this.value);

    }
    
    numButtons.forEach((button) => button.addEventListener('click', activeBotton));

    function showRaiting() {
        if (submitBtn){
            window.location.href = "html/succes.html"
        }
        const raiting = document.getElementById('#raiting');
        raiting.innerHTML = localStorage.getItem('value');
    }

    submitBtn.addEventListener('click', showRaiting);
   
})