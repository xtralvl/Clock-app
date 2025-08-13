// === Sets the time locally and periodically fetches it from the API to make sure it is synchronized === //

const currentTime = document.getElementById('current-time-top') as HTMLElement | null;
const currentSeconds = document.getElementById('current-seconds-top') as HTMLElement | null;

let currentDate: Date;

// Renders the current local clock
function renderTime() {
    if (!currentDate) return; // Don't try to render before we have a date

    if (currentTime) {
        const hh = currentDate.getHours().toString().padStart(2, '0');
        const mm = currentDate.getMinutes().toString().padStart(2, '0');
        currentTime.textContent = `${hh}:${mm}`;
    }
    if (currentSeconds) {
        const ss = currentDate.getSeconds().toString().padStart(2, '0');
        currentSeconds.textContent = ss;
    }
}

// Initializes clock and syncs with API
async function initClock() {
    const url = 'https://ipwho.is/';
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        currentDate = new Date(result.timezone.current_time);

        renderTime();
    } catch (error: any) {
        console.log(error.message);
    }
}

// Tick every second locally
setInterval(() => {
    if (currentDate) {
        currentDate.setSeconds(currentDate.getSeconds() + 1);
        renderTime();
    }
}, 1000);

// Resync every 10 minutes
setInterval(initClock, 600000);

// First sync when page loads
initClock();
