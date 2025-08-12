// === FETCHES THE CURRENT TIME (HH:MM) FROM THE USER'S IP AND DISPLAYS IT === //

const currentTime = document.getElementById('current-time-top') as HTMLElement | null;

async function getTime() {
    const url = `http://ipwho.is/`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        console.log(result);

        if (currentTime && result?.timezone?.current_time) {
            const isoTime = result.timezone.current_time;
            const time = isoTime.slice(11, 16); // HH:MM
            currentTime.textContent = time;
        }
    } catch (error: any) {
        console.log(error.message);
    }
}

// Run immediately on import
getTime();
