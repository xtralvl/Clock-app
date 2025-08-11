// === THIS FUNCTION FETCHES THE USER'S CURRENT LOCATION (CITY AND THE ABBREVIATION OF COUNTRY) BASED ON THEIR IP ADDRESS, FROM AN EXTERNAL API === //

const cityAndCountry = document.getElementById('current-time-zone-top') as HTMLElement | null;

export async function getLocation(): Promise<string | null> {
    const url = 'https://api.ipbase.com/v2/info?apikey=ipb_live_jtLM2NbWsakEi1tt6KU3bvWKewS3Fq0FkLUJEczx';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        // Extract IP address, city name and country code from response
        const ipAddress = result.data.ip as string | null;
        const cityName = result.data.location.city.name as string | null;
        const countryCode = result.data.location.country.alpha2 as string | null;

        // Update the DOM element with city and country abbreviation if available
        if (cityAndCountry && cityName && countryCode) {
            cityAndCountry.textContent = `${cityName}, ${countryCode}`;
        }

        // Return the IP address for use in other modules/functions
        return ipAddress;

    } catch (error: any) {
        console.log(error.message);
        return null; // Return null if any error occurs
    }
}
