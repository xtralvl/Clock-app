const greeting = document.getElementById('greeting-top') as HTMLElement | null;
const body = document.querySelector('body') as HTMLBodyElement | null;

function updateGreeting() {
    const currentDate = new Date(); // Get fresh time each call
    const currentHours = currentDate.getHours();
    let currentGreeting: string;

    // Remove all possible classes first
    body?.classList.remove('morning', 'daytime', 'nighttime');

    if (currentHours >= 5 && currentHours < 12) {
        currentGreeting = 'GOOD MORNING';
        body?.classList.add('morning');
    } else if (currentHours >= 12 && currentHours < 18) {
        currentGreeting = 'GOOD AFTERNOON';
        body?.classList.add('daytime');
    } else {
        currentGreeting = currentHours >= 18 && currentHours < 21 ? 'GOOD EVENING' : 'GOOD NIGHT';
        body?.classList.add('nighttime');
    }

    if (greeting) greeting.textContent = currentGreeting;
} 

// Run immediately
updateGreeting();

// Optional: update every minute to keep background and greeting in sync
setInterval(updateGreeting, 60000);
