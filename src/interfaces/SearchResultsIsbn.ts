export interface AuthorUrl {
    url: string;
    name: string;
}

export interface Author2 {
    key: string;
    name: string;
}

export interface Identifiers {
    isbn_13: string[];
    openlibrary: string[];
}

export interface Classifications {
    lc_classifications: string[];
}

export interface Publisher {
    name: string;
}

export interface Subject {
    name: string;
    url: string;
}

export interface Book {
    url: string;
    key: string;
    title: string;
    subtitle: string;
    authors: AuthorUrl[];
    number_of_pages: number;
    identifiers: Identifiers;
    classifications: Classifications;
    publishers: Publisher[];
    publish_date: string;
    subjects: Subject[];
}

export interface Record {
    isbns: string[];
    issns: any[];
    lccns: any[];
    oclcs: any[];
    olids: string[];
    publishDates: string[];
    recordURL: string;
    data: Book;
    details: PreviewInfo;
}

export interface IsbnDetails {
    publishers: string[];
    subtitle: string;
    last_modified: LastModified;
    source_records: string[];
    title: string;
    number_of_pages: number;
    isbn_13: string[];
    created: Created;
    languages: Language[];
    full_title: string;
    lc_classifications: string[];
    publish_date: string;
    key: string;
    authors: Author2[];
    latest_revision: number;
    works: Work[];
    type: Type;
    subjects: string[];
    revision: number;
}

export interface PreviewInfo {
    bib_key: string;
    info_url: string;
    preview: string;
    preview_url: string;
    details: IsbnDetails;
}


export interface LastModified {
    type: string;
    value: Date;
}

export interface Created {
    type: string;
    value: Date;
}

export interface Language {
    key: string;
}

export interface Work {
    key: string;
}

export interface Type {
    key: string;
}

export interface SearchResultsIsbn {
    records: any[]; 
    items: any[];
}
