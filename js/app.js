document.addEventListener('DOMContentLoaded', function() {

    const numButtons = document.querySelectorAll('.list');
    const submitBtn = document.querySelector('.submit-box');

    let valueRate = 0;

    function activeBotton() {
        valueRate = this.value;
        
        numButtons.forEach((button) => {
            button.classList.remove('active');
            this.classList.add('active');
        });

        localStorage.setItem('value', this.value);

    }
    
    numButtons.forEach((button) => button.addEventListener('click', activeBotton));

    function showRaiting() {
        
        if (valueRate === 0) {
            Swal.fire('Please select an option');
            return;
        }

        window.location.href = "pages/success.html"

    }

    submitBtn.addEventListener('click', showRaiting);
    
})