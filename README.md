# Clock App — Frontend Mentor Challenge

This project is my solution to the [Frontend Mentor Clock App challenge](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM).  
It’s a responsive, mobile-first web application that displays the current time, date, and location, along with a random inspirational quote.  
I went beyond the original requirements by adding several extra features, including a seconds counter, auto-scrolling animations, and three distinct background images that adapt to the time of day.

---

## 📸 Demo

Live site: [View on Netlify](https://clock-app-frontend-mentor-xtralvl.netlify.app/)

---

## ✨ Features

- **Real-time clock** with hours, minutes, and **seconds counter**.
- **Dynamic backgrounds** for **morning**, **daytime**, and **evening**, implemented with SCSS mixins and TypeScript logic.
- **Inspirational quotes** fetched from an external API.
- **Location & timezone detection** using the user’s IP address.
- Expandable **"More" section** with additional time-related information.
- **Auto scroll down/up** animation when toggling the "More" section.
- Fully **responsive** layout (mobile-first design approach).
- Built with modern frontend tools and practices.

---

## 📡 APIs Used

1. **[ipwho.is](https://ipwho.is/)**  
   - Retrieves user location, timezone, and current time **based on the user’s IP address**.

2. **[quoteslate.vercel.app API](https://quoteslate.vercel.app/api/quotes/random)**  
   - Provides random inspirational quotes.

---

## 🛠️ Technologies & Tools

- **TypeScript** — Component-based scripts for modularity.
- **SCSS** — Custom styles with mixins for time-of-day themes.
- **Vite** — Fast and modern development build tool.
- **Figma** — Used for design reference.
- **Netlify** — Hosting and deployment.
- **ChatGPT** — Assisted in learning API usage and refining logic.
- **Mobile-first** responsive development.

---

## 🚀 How It Works

1. **Location & Time**  
   - On page load, the app requests location and timezone info from `ipwho.is` **based on the user’s IP**.
   - Displays the current time and date according to the detected timezone.

2. **Dynamic Backgrounds**  
   - Background image and styling change automatically depending on whether it’s morning, daytime, or evening.

3. **Quotes**  
   - Fetches a new random quote from `quoteslate.vercel.app` each time the refresh button is clicked.

4. **"More" Section with Auto Scroll**  
   - Displays additional time-related info:
     - Current timezone
     - Day of the year
     - Day of the week
     - Week number  
   - When toggled open, the page automatically **scrolls down** to reveal the section.  
   - When toggled closed, the page **scrolls back up** smoothly.

---

## 🧩 Additional Improvements Beyond Requirements

- Implemented a **seconds counter** for a more precise clock display.
- Added **three background states** (instead of the default two).
- Created **SCSS mixins** for time-of-day styling.
- Applied **TypeScript modules** for clean code structure.
- Implemented **smooth auto-scrolling** for section transitions.

---

## 📚 What I Learned

This was my **first project using APIs**. I learned how to:

- Fetch and process JSON data from external APIs in **TypeScript**.
- Use **IP-based APIs** to retrieve location and time data.
- Handle asynchronous operations with **`async/await`**.
- Combine API data to build a **dynamic UI**.
- Apply **SCSS mixins** for reusable, theme-based styling.
- Implement **mobile-first** responsive design.
- Add **smooth auto-scrolling** interactions to improve UX.

