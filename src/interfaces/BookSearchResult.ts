import { Book } from "./Book";

export interface BookSearchResult {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Book[];
    num_found: number;
    q: string;
    offset?: any;
}