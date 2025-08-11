// === THIS FUNCTION FETCHES THE CURRENT TIME BASED ON THE PROVIDED IP ADDRESS FROM AN EXTERNAL API === //

const currentTime = document.getElementById('current-time-top') as HTMLElement | null;
const currentSeconds = document.getElementById('current-seconds-top') as HTMLElement | null;
const currentTimeZone = document.getElementById('current-time-zone-top') as HTMLElement | null;

export async function getTime(ip: string) {
    const url = `https://timeapi.io/api/time/current/ip?ipAddress=${ip}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        // Log the full time result for debugging
        console.log(result);

        // Optionally, update the DOM element with the current time if it exists
        if (currentTime && result && result.time && currentSeconds && result.seconds && currentTimeZone && result.timeZone) {

            const time = result.time;
            const seconds = result.seconds;
            const timeZone = result.timeZone;

            currentTime.textContent = `${time}`;  // Adjust according to API's returned property
            currentSeconds.textContent = `${seconds}`;  // Adjust according to API's returned property
            currentTimeZone.textContent = `${timeZone}`;  // Adjust according to API's returned property
        }

    } catch (error: any) {
        console.log(error.message);
    }
}
