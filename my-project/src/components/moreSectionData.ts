
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

// === CALCULATES THE DAY OF THE YEAR AND DISPLAYS IT IN THE MORE SECTION === //
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


// === CALCULATES THE DAY OF THE WEEK AND DISPLAYS IT IN THE MORE SECTION === //
const dayOfWeekElement = document.getElementById('day-of-the-week-bottom-js') as HTMLElement | null;

function getDayOfWeek(date : Date) : string {
    const days : string[] = [
        "Sunday",    // index 0
        "Monday",    // index 1
        "Tuesday",   // index 2
        "Wednesday", // index 3
        "Thursday",  // index 4
        "Friday",    // index 5
        "Saturday"   // index 6
    ];

    return days[date.getDay()];

};

const today = new Date();
const dayOfWeek = getDayOfWeek(today);

if (dayOfWeekElement && dayOfWeek) {

    dayOfWeekElement.innerText = `${dayOfWeek}`
};


// === CALCULATES THE WEEK OF THE YEAR AND DISPLAYS IT === //
const weekOfYearElement = document.getElementById('week-number-bottom-js') as HTMLElement | null;

function getWeekOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDays = (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
  return Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
}

const currentWeek = getWeekOfYear(new Date());
if (weekOfYearElement) {
  weekOfYearElement.textContent = `${currentWeek}`;
}








