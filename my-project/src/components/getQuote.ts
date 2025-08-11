// 
const refreshButton = document.getElementById('refresh-button') as HTMLButtonElement;

const quote = document.getElementById('quote') as HTMLParagraphElement;
const author = document.getElementById('author') as HTMLParagraphElement;


refreshButton.addEventListener('click', () => {
    async function getQuote() {
        const url = 'https://api.quotable.io/quotes/random';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error (`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error: any) {
            console.log(error.message)
        }
        }
    getQuote();
})

