// === THIS FUNCTION FETCHES THE USER'S CURRENT LOCATION (CITY AND THE ABBREVATION OF COUNTRY) BASED ON THEIR IP ADDRESS, FROM AN EXTERNAL API === //

const cityAndCountry = document.getElementById('current-time-zone-top') as HTMLHeadElement;

async function getLocation() {
    const url = 'https://api.ipbase.com/v2/info?apikey=ipb_live_jtLM2NbWsakEi1tt6KU3bvWKewS3Fq0FkLUJEczx';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        const cityName = result.data.location.city.name;
        const countryName = result.data.location.country.alpha2;

        // CHANGE THE TEXT IN THE DOM
        cityAndCountry.textContent = `${cityName}, ${countryName}`

    } catch (error: any) {
        console.log(error.message)
    }

}
getLocation();