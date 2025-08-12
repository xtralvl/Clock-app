// === FETCHES THE USER'S CITY & COUNTRY FROM THEIR IP AND DISPLAYS IT === //

const cityAndCountry = document.getElementById('current-time-zone-top') as HTMLElement | null;
const timeZoneAbbr = document.getElementById('current-time-zone-abbreviation-top') as HTMLElement | null;

async function getLocation() {
    const url = 'https://ipwho.is/';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();

        const cityName = result.city?.toUpperCase();
        const countryCode = result.country_code;
        const abbr = result.timezone?.abbr;

        if (cityAndCountry && timeZoneAbbr && cityName && countryCode) {
            cityAndCountry.textContent = `IN ${cityName}, ${countryCode}`;
            timeZoneAbbr.textContent = abbr || '';
        }
    } catch (error: any) {
        console.log(error.message);
    }
}

// Run immediately on import
getLocation();
