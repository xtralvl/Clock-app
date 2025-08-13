
// === FETCHES THE USER'S CURRENT TIMEZONE AND DISPLAYS IT IN THE MORE SECTION === //
const currentTimezone = document.getElementById('current-time-zone-city-bottom-js') as HTMLElement | null;

async function showMoreSectionDataApi() {
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

showMoreSectionDataApi();

// === CALCULATES THE DAY OF THE YEAR, DAY OF THE WEEK AND THE WEEK NUMBER AND DISPLAYS IT IN THE MORE SECTION === //
const dayOfYearElement = document.getElementById('day-of-the-year-bottom-js') as HTMLElement | null;

function getDayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function updateDayOfYear() {
  if (!dayOfYearElement) return;
  const now = new Date();
  const dayOfYear = getDayOfYear(now);
  dayOfYearElement.textContent = `${dayOfYear}`;
}

updateDayOfYear();

