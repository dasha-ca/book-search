import { BookSearchResult } from "../interfaces/BookSearchResult";
import { SearchResultsIsbn } from "../interfaces/SearchResultsIsbn";

class BooksDataService {
    public async getBooksByTitle(bookTitle: string) {
        bookTitle = encodeURIComponent(bookTitle);
        const result = await fetch(`https://openlibrary.org/search.json?q=${bookTitle}&limit=10`);
        const searchResult = await result.json() as BookSearchResult;
        return searchResult.docs;
    }

    public async getBooksByIsbn(bookIsbn: string) {
        bookIsbn = encodeURIComponent(bookIsbn);
        const result = await fetch(`https://openlibrary.org/api/volumes/brief/isbn/${bookIsbn}.json`);
        const searchResult = await result.json() as SearchResultsIsbn;
        return searchResult.items;
    }
}

export const BooksService = new BooksDataService();