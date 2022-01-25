import { BookSearchResult } from "../interfaces/BookSearchResult";
import { SearchResultsIsbn } from "../interfaces/SearchResultsIsbn";

class BooksDataService {
    public async getBooksByTitle(bookTitle: string) {
        bookTitle = encodeURIComponent(bookTitle);
        const result = await fetch(`http://openlibrary.org/search.json?q=${bookTitle}&limit=10`);
        const searchResult = await result.json() as BookSearchResult;
        console.log("getBooksByTitle results", searchResult);
        return searchResult.docs;
    }

    public async getBooksByIsbn(bookIsbn: string) {
        bookIsbn = encodeURIComponent(bookIsbn);
        const result = await fetch(`http://openlibrary.org/api/volumes/brief/isbn/${bookIsbn}.json`);
        const searchResult = await result.json() as SearchResultsIsbn;
        console.log("getBooksByIsbn results", searchResult);
        return searchResult.items;
    }
}

export const BooksService = new BooksDataService();