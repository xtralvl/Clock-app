// === UPDATES THE SECONDS DISPLAY LIVE USING THE SYSTEM CLOCK === //

const currentSeconds = document.getElementById('current-seconds-top') as HTMLElement | null;

function startSecondsCounter() {
    function updateSeconds() {
        const now = new Date();
        const seconds = now.getSeconds().toString().padStart(2, '0');
        if (currentSeconds) currentSeconds.textContent = seconds;
    }

    updateSeconds();
    setInterval(updateSeconds, 1000);
}

// Run immediately on import
startSecondsCounter();
