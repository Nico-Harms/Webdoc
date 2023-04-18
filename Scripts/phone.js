// jshint esversion: 6


// Her hentes alle prompts og svar fra HTML'en
const prompts = document.querySelectorAll('.prompt');
const responses = document.querySelectorAll('.chat-response');

// Her tilføjes en click event til hver prompt
prompts.forEach((prompt, index) => {
  prompt.addEventListener('click', () => {
    
    responses.forEach((response) => {
      response.style.display = 'none';
    }); // Sæt alle svar til display none
    responses[index].style.display = 'block';
  }); // Vis det tilsvarende svar med display block
});

// En event listener som fjerner alle svar når man klikker på prøv igen knappen
const retryButton = document.getElementById('retry-button');
retryButton.addEventListener('click', () => {
  responses.forEach((response) => {
    response.style.display = 'none';
  });
});
