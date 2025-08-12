// === FETCHES THE USER'S CURRENT TIMEZONE, DAY OF THE YEAR, DAY OF THE WEEK AND THE WEEK NUMBER AND DISPLAYS IT IN THE MORE SECTION === //

const currentTimezone = document.getElementById('current-time-zone-city-bottom-js') as HTMLElement | null;
const dayOfTheYear = document.getElementById('day-of-the-year-bottom-js') as HTMLElement | null;

async function showMoreSectionData() {
    const url = `https://ipwho.is/`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        const country = result.country;
        const city = result.city;
        

        if (currentTimezone && country && city) {
            currentTimezone.textContent = `${country}/${city}`;
        }

    } catch (error: any) {
        console.log(error.message);
    }
}

showMoreSectionData();
