# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon
 
## Quotetionary 
 
### Summary
 
The assignment was to create a React app rendered in a web browser, with data consumed from a public API, in a team of 2 developers within a day and a half.
 
For the MVP version, we choose to make a quote bank app, with the following features supported:
- Users can pull a single random quote.
- Display all quotes available in the API on a single page.
  - Filter quotes by:
    - Tag
    - Author 
 
We also defined some stretch goals/additional feature ideas whilst brainstorming:
- Infinite scrolling
- Search by keyword
- Like/Dislike button
  - Where 'Like' adds more quotes from the same author, displayed at the top of all the quotes.
  - Where 'Dislike' removes the quote to be displayed.
- Pick random quote from selected tag.
- Consolidate current API data with an additional API to augment UX.
 
Once the scope of our tasks was defined, we proceeded to build wireframes.
 
#### Landing Page
![Landing Page](https://imgur.com/tX6NyvF.png "Home Page")
#### Quotes Pages
![Quotes Pages](https://imgur.com/AURFfAB.png "Quotes Page")
#### Random Quote Page
![Random Quote Page](https://imgur.com/od8BPNQ.png "Random Quote Page")
 
### Technologies
- HTML
- SCSS
- Javascript/JSX
- React
- Git & GitHub
 
### Libraries
- Bulma Framework
- Axios
 
### API Documentation
[GoQuotes API](https://goquotes.docs.apiary.io/#)

## Live Demo, Useful Links

[<img alt="Live Demo" src="https://imgur.com/P2NkQ7Q.png" height="35px">](https://dazzling-hoover-5876ce.netlify.app)
[<img alt="Follow databoy5000" src="https://imgur.com/QCKp4U4.png" height="35px">](https://github.com/login?return_to=%2Fdataboy5000)
[<img alt="Client Repository" src="https://imgur.com/XyaL8Dg.png" height="35px">](https://github.com/databoy5000/project-2)

### Table of Contents
+ [Summary](#summary)
  - [Landing Page](#landing-page)
  - [Quotes Pages](#quotes-pages)
  - [Random Quote Page](#random-quote-page)
+ [Technologies](#technologies)
+ [Libraries](#libraries)
+ [API Documentation](#api-documentation)
+ [Table of Contents](#table-of-contents)
+ [Pages](#pages)
+ [Functionalities](#functionalities)
  - [API request & Local Storage](#api-request---local-storage)
+ [Get/Display Random Quote](#get-display-random-quote)
  - [Filter hook](#filter-hook)
  - [Infinite scroll](#infinite-scroll)
+ [In-app Screenshots](#in-app-screenshots)
+ [Lessons Learnt](#lessons-learnt)
  - [Version Control](#version-control)
  - [Debugging](#debugging)
  - [Multiple API calls into one function](#multiple-api-calls-into-one-function)
  - [Team work makes the dream work](#team-work-makes-the-dream-work)
+ [Credits](#credits)

### Pages
1. Home page
2. Random Quote
3. Quotes
 
### Functionalities
 
#### API request & Local Storage
Below, we are making multiple API requests into one function and saving the result into local storage. This way there isn't a need to make these requests every page load, since it isn't a priority to display new quotes across the array of 8k+ quote objects to users.
 
```js
export async function getApiData() {
  try {
    const getQuotesRes = await getQuotes()
    const getTagsRes = await getAllTags()
    let quoteId = 0
    const quotes = getQuotesRes.data.quotes
    const tags = getTagsRes.data.tags
    const newQuotes = quotes.map(quote => {
      quoteId++
      return { ...quote, id: quoteId }
    })
    localStorage.setItem('quotes', JSON.stringify(newQuotes))
    localStorage.setItem('tags', JSON.stringify(tags))
    return false
  } catch (err) {
    return true
  }
}
```
 
### Get/Display Random Quote
The function below generates a random index within the array of quotes `quotesArray` pulled from the API, on the condition that `quotesArray` is not null (by implementing `!!`, the variable will return a boolean result whether data is null or available)
 
```js
  const [randomQuote, setRandomQuote] = React.useState(
    !!quotesArray &&
    quotesArray[Math.floor(Math.random() * quotesArray.length)])
  const handleClick = () => {
    setRandomQuote(quotesArray[Math.floor(Math.random() * quotesArray.length)])
  }
```
 
#### Filter hook
On the Quote page (allQuotes.js), quotes are filtered using a custom hook `useFilter(searchData)`, where `searchData` represents the array of quote objects to be iterated through for filtering. By default, `filteredQuotes` returns the full array called from the API, when no filters are selected. This way, it can be used as a single endpoint for data display, without having to use conditionals.
 
`useFilter()` hook:
```js
  const handleChange = e => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value })
  }
  function filterQuotes(originalQuotes) {
    const filteredTag = originalQuotes.filter(quote => {
      return (
      quote.tag === searchForm.tag 
      || searchForm.tag === 'All')
    )
    }
    const filteredAuthor = filteredTag.filter(quote => {
     return (
        quote.author.toLowerCase().includes(searchForm.searchField.toLowerCase()) 
        || searchForm.searchField === '')
     )
    }
    setFilteredQuotes(filteredAuthor)
    return filteredAuthor
  }
```
 
#### Infinite scroll
8k+ quotes were too much to display at once, and we wanted to give a go at infinite scrolling - displaying 10 quotes by default/per scroll - since it is currently widely used by many websites.
 
First, we had to set `handleScroll` to detect the bottom of the page, then slice the array of quotes to load by increments of 10 indexes:
```js
const handleScroll = ({ target }) => {
  if (target.scrollHeight - target.scrollTop === target.clientHeight) {
    setLoadingArray(filteredQuotes.slice(0, currentLoad + loadingHeight))
    setCurrentLoad(currentLoad + loadingHeight)
  }
}
```
 
Then, in useEffect(), 
```js
if (filteredQuotes) {
  setLoadingArray(filterQuotes(quotes).slice(0, loadingHeight))
  setCurrentLoad(loadingHeight)
  const target = document.getElementById('AllQuotes')
  target.scrollTop = 0
}
```
 
`target.scrollTop = 0` allows for each filter change to take the user to the page's default state: at the top of the page (a bit of UX magic there).
 
At last, `loadingArray` is the final endpoint to display the quotes within the pages' function return value.
 
### In-app Screenshots
![random quote page](https://imgur.com/FEaLZ0S.png "random quote page")
![Quotes page](https://imgur.com/WXAizLs.png "Quote page")
 
### Lessons Learnt
 
#### Version Control
We hit a few bottlenecks in terms of collaborating onto the same document. I definitely value the importance of working from the same repository and handling version control.
 
#### Debugging
With React, I felt a lot more comfortable console logging each step at the time, rather than jumping steps by typing bigger chunks of code at once. But debugging custom hooks proved to be a bit trickier than synchronous & asynchronous functions.
 
#### Multiple API calls into one function
The syntax was new to me and it wasn't a straightforward job to consolidate the API calls together and debug the function. Breaking code was a useful operation to understand the moving parts of a call.
 
#### Team work makes the dream work
I believe it's very important to define ahead of coding all of the necessary steps to complete a project (e.g. defining the app specifications, sudo coding, github), to split tasks between developers in an efficient manner, and to be agile with project's management. Without these steps, it is easy to waste time and resources to solve problems which could've been identified and/or avoided during the planning process.
 
### Credits
- [Go Quotes](https://goquotes.docs.apiary.io/): free open source API.
- [Axios](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser.
- [Bulma](https://bulma.io/documentation/overview/): free, open source framework that provides ready-to-use frontend components that you can combine to build responsive web interfaces.