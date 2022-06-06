const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    if (input.value.length == input.dataset.length) {
        return input.classList.add('valid'), input.classList.remove('invalid');
    };
       return input.classList.add('invalid'), input.classList.remove('valid'); 
    
   
    
})