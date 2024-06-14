function selectOption(element) {
    // Remove 'selected' class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add 'selected' class to the clicked option
   
