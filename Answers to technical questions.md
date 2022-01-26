# Answers to technical questions

## How long did you spend on the coding assignment? 
about 5 hours

## What would you add to your solution if you had more time?
* Refactor code to clean styles
* Add caching (not to abuse API each time)
* Implement tests using Jest. Jest is already set up, I just need to write a few tests in the App.test.tsx file.
* Implement pagination.
* Add a feature that allows users clicking on the book cards to see covers and more information about the book. For now, however, I decided to redirect to Amazon from the title.

## If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
* setup tests
* Implement Accessibility (AODA/ WCAG 2.0/2.1 AA) compliance
* npm packages used: react-material. Just to make some UI elements look good, lodash - for sorting and “debounce”
* Book Search returns only 10 books at a time for performance reasons. But we can increase it to any other amount if needed.


## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
**startTransition** looks very promising because it keeps an app responsive even during large screen updates.
```javascript
const [newBook, setNewBook] = useState(0)

function changeNewBook(event) {
    const value = Number(event.target.value);

    if (enableStartTransition) {
        React.startTransition(() => {
            setNewBook(value);
        });
    } else {
        setNewBook(value);
    }
}

<input type="range" value={newBook} onChange={changeNewBook} />

<Complicated newBook ={newBook} />
```


## How would you track down a performance issue in production? Have you ever had to do this?
I would start with Lighthouse and then browser dev tools, and after that Why Did You Render library. 


## How would you improve the API that you just used? 
I would increase the relevance of the search result, for example when you are querying “Lords of the rings” you can see many unrelated books and duplicated results. 

## Please describe yourself using correctly formatted JSON.
```json
{
  "firstName": "Daria", 
  "middleName":null
  "lastName": "Romanova",
  "homeTown": "Toronto",
  "yearsExperience": 3,
  "lookingForJobOpportunities": true,
  "skills": [
    "JavaScript",
    "React",
    "MongoDB"
    ],
  "favouriteBooks": [
    {
      "title": "Harry Potter"
      "author": "J. K. Rowling"
      "year": 1997
    },
    {
      "title": "Idiot"
      "author": "Fyodor Dostoyevsky"
      "year": 1868
    },
    {
      "title": "Doctor Faustus"
      "author": "Thomas Mann"
      "year": 1947
    }
  ]
}
```

