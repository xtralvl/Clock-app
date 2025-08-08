import '../src/mobile.scss'
import '../src/mixins/daytime.scss';
import '../src/mixins/nighttime.scss';

const moreButton = document.getElementById('more-button') as HTMLButtonElement;
const lessButton = document.getElementById('less-button') as HTMLButtonElement;
const moreSection = document.getElementById('more-section') as HTMLElement;

moreButton.addEventListener('click', () => {
    // fade out moreButton
    moreButton.classList.add('hidden');

    // after fade out, hide it and show lessButton
    setTimeout(() => {
      moreButton.style.display = 'none';

      lessButton.style.display = 'flex';
      // fade in lessButton
      lessButton.classList.remove('hidden');

      // show moreSection smoothly
      moreSection.classList.add('visible');

      setTimeout(() => {
        moreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50); // tweak if needed, 50–200ms is usually enough

    }, 100);  // match CSS transition duration
});

lessButton.addEventListener('click', () => {
    // fade out lessButton
    lessButton.classList.add('hidden');

    setTimeout(() => {
      lessButton.style.display = 'none';

      moreButton.style.display = 'flex';
      // fade in moreButton
      moreButton.classList.remove('hidden');

      // hide moreSection smoothly
      moreSection.classList.remove('visible');

      window.scrollTo({ top: 0, behavior: 'smooth' });

    }, 100);
});
