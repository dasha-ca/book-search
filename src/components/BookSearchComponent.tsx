import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import React, { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { BooksService } from '../services/BooksService';
import { Book } from "../interfaces/Book";
import LinearProgress from "@material-ui/core/LinearProgress";
import BookCardComponent from "./BookCardComponent";

interface searchState {
    titleSortAscending: boolean;
    publishDateSortAscending: boolean;
}

const BookSearchComponent: React.FC = () => {

    const [searchState, setSearchState] = useState<searchState>({
        titleSortAscending: true,
        publishDateSortAscending: true,
    });

    const [books, setBooks] = useState<Book[]>([])
    const [inProgress, setInProgress] = useState<boolean>(false);

    const changeHandler = async (event: any) => {
        setInProgress(true);
        const books = await BooksService.getBooksByTitle(event.target.value);
        setBooks(books);
        setInProgress(false);
    };

    const debouncedEventHandler = useMemo(
        () => debounce(changeHandler, 500)
        , []);

    return (
        <>
            {inProgress && <LinearProgress />}
            <div style={{ margin: "20px" }}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    bgcolor: 'background.paper',
                    borderRadius: 1
                }}  >
                    <TextField
                        id="search-box"
                        label="Book Title of ISBN"
                        onChange={debouncedEventHandler}
                        style={{ width: "500px" }}
                    />
                </Box>
                <br /><br />
                <hr />

                <Box sx={{ flexWrap: 'wrap', alignContent: "align-content", display: "flex" }}>
                    {books.map(book => <BookCardComponent {...book} />)}
                </Box>

            </div>
        </>

    );
}

export default BookSearchComponent;