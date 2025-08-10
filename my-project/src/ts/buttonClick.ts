
const moreButton = document.getElementById('more-button') as HTMLButtonElement;
const lessButton = document.getElementById('less-button') as HTMLButtonElement;
const moreSection = document.getElementById('more-section') as HTMLElement;


/* === This function runs when we click on button "MORE",
so with this, we hide the "MORE" and show the "LESS" button and show the "MORE SECTION"
*/

// When we click on button "MORE"
moreButton.addEventListener('click', () => {
    moreButton.classList.add('hidden');
  
    setTimeout(() => {
      moreButton.style.display = 'none';

      lessButton.style.display = 'flex';
      lessButton.classList.remove('hidden');

      moreSection.classList.add('visible');

  
      // Wait for DOM to update before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight, // ✅ scrolls to the very bottom
          behavior: 'smooth'
        });
      }, 100); // match your transition time or adjust as needed
  
    }, 100);
  });


  // When we click on button "LESS"
  lessButton.addEventListener('click', () => {
    lessButton.classList.add('hidden');
  
    setTimeout(() => {
      lessButton.style.display = 'none';
  
      moreButton.style.display = 'flex';
      moreButton.classList.remove('hidden');
  
      moreSection.classList.remove('visible');
  
      // It scrolls back to the top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  });
  


  
  