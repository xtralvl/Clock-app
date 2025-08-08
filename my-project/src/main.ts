import '../src/mobile.scss'
import '../src/mixins/daytime.scss';
import '../src/mixins/nighttime.scss';

const moreButton = document.getElementById('more-button') as HTMLButtonElement;
const lessButton = document.getElementById('less-button') as HTMLButtonElement;
const moreSection = document.getElementById('more-section') as HTMLElement;


moreButton.addEventListener('click', () => {
    moreButton.style.display = 'none';
    lessButton.style.display = 'flex';
    moreSection.style.display = 'grid';
})

lessButton.addEventListener('click', () => {
    lessButton.style.display = 'none';
    moreButton.style.display = 'flex';
    moreSection.style.display = '';

})


console.log('test')