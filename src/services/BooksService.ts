import { BookSearchResult } from "../interfaces/BookSearchResult";
import { Book } from "../interfaces/Book";
import { SearchResultsIsbn } from "../interfaces/SearchResultsIsbn";

class BooksDataService {
    public async getBooksByTitle(bookTitle: string) {
        bookTitle = encodeURIComponent(bookTitle);
        const result = await fetch(`https://openlibrary.org/search.json?q=${bookTitle}&limit=10`);
        const searchResult = await result.json() as BookSearchResult;

        const books = searchResult.docs.map(document => {
            const _book: Book = {
                author_alternative_name: document.author_alternative_name && document.author_alternative_name[0],
                author_key: document.author_key && document.author_key[0],
                author_name: document.author_name && document.author_name[0],
                edition_key: document.edition_key && document.edition_key[0],
                first_sentence: document.first_sentence && document.first_sentence[0],
                isbn: document.isbn && document.isbn[0],
                // key: document.key && document.key[0],
                language: document.language && document.language[0],
                lccn: document.lccn && document.lccn[0],
                number_of_pages: document.number_of_pages_median,
                publish_date: document.publish_date && document.publish_date[0],
                publish_place: document.publish_place && document.publish_place[0],
                publish_year:  document.publish_year && document.publish_year[0],
                publisher: document.publisher && document.publisher[0],
                subject: document.subject && document.subject[0],
                subtitle: document.subtitle && document.subtitle,
                time: document.time && document.time[0],
                title: document.title && document.title,
                title_suggest: document.title_suggest && document.title_suggest[0],
                type: document.type[0],
            };
            return _book
        })


        return books;
    }

    public async getBooksByIsbn(bookIsbn: string) {
        bookIsbn = encodeURIComponent(bookIsbn);
        // TODO: this endpoint service throws a CORS error. So I could not use it. 
        // Since I don't own their server and I don't want to waste time setting up a proxy - I gave up
        const result = await fetch(`https://openlibrary.org/api/volumes/brief/isbn/${bookIsbn}.json`);
        const searchResult = await result.json() as SearchResultsIsbn;
        return searchResult.items;
    }
}

export const BooksService = new BooksDataService();