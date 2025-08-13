 // FETCHES A RANDOM QUOTE WHEN PAGE OPENED 
 
const refreshButton = document.getElementById('refresh-button') as HTMLButtonElement;

const quote = document.getElementById('quote') as HTMLParagraphElement;
const author = document.getElementById('author') as HTMLParagraphElement;


    async function getQuote() {
        const url = 'https://quoteslate.vercel.app/api/quotes/random';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error (`Response status: ${response.status}`);
            }

            const result = await response.json();

            const fetchedQuote = result.quote;
            const fetchedAuthor = result.author;

            quote.textContent = `${fetchedQuote}`;
            author.textContent = `${fetchedAuthor}`;
            
        } catch (error: any) {
            console.log(error.message)
        }
    }

    getQuote();

 // FETCHES A NEW RANDOM QUOTE WHEN CLICKED ON REFFRESH BUTTON   
    refreshButton.addEventListener('click', () => {
        getQuote();

    })

