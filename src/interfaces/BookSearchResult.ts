import { Document } from "./Document";

export interface BookSearchResult {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Document[];
    num_found: number;
    q: string;
    offset?: any;
}