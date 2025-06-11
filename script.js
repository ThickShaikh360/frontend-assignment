function selectOption(optionNumber) {
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Remove checked class from all radios
    document.querySelectorAll('.radio').forEach(radio => {
        radio.classList.remove('checked');
    });
    
    // Add selected class to clicked option
    document.querySelectorAll('.option')[optionNumber - 1].classList.add('selected');
    
    // Add checked class to corresponding radio
    document.getElementById('radio' + optionNumber).classList.add('checked');
    
    // Update total price based on selection
    const prices = ['$10.00', '$18.00', '$24.00'];
    document.querySelector('.total-price').textContent = `Total : ${prices[optionNumber - 1]} USD`;
}

// Add some hover effects and animations
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});