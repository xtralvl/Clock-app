const currentDate = new Date();

const greeting = document.getElementById('greeting-top') as HTMLElement | null;
const body = document.querySelector('body') as HTMLBodyElement | null;



function getCurrentGreeting() {
    const currentHours = currentDate.getHours(); // 0–23
    let currentGreeting: string;

    if (currentHours >= 5 && currentHours < 12) {
        currentGreeting = 'GOOD MORNING';
        body?.classList.remove('nighttime')
        body?.classList.add('morning');

    } else if (currentHours >= 12 && currentHours < 17) {
        currentGreeting = 'GOOD AFTERNOON';
        body?.classList.remove('morning')
        body?.classList.add('daytime');

    } else if (currentHours >= 17 && currentHours < 21) {
        currentGreeting = 'GOOD EVENING';
        body?.classList.remove('daytime')
        body?.classList.add('nighttime');

    } else {
        currentGreeting = 'GOOD NIGHT';
    }

    if (greeting) {
        greeting.textContent = currentGreeting;
    }
}

getCurrentGreeting();
