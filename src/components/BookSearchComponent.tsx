import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import React, { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import orderBy from 'lodash/orderBy';
import { BooksService } from '../services/BooksService';
import { Book } from "../interfaces/Book";
import LinearProgress from "@material-ui/core/LinearProgress";
import BookCardComponent from "./BookCardComponent";
import Switch from '@material-ui/core/Switch';

interface searchState {
    sortAscending: boolean;
    sortFieldName: string;
}

const BookSearchComponent: React.FC = () => {

    const [searchState, setSearchState] = useState<searchState>({
        sortAscending: true,
        sortFieldName: "title"
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
            <Box sx={{
                display: 'flex',
                margin: 50,
                justifyContent: 'space-evenly',
                borderRadius: 5
            }}  >
                <TextField
                    id="search-box"
                    label="Search by book title or ISBN"
                    onChange={debouncedEventHandler}
                    style={{ width: "500px" }}
                />
            </Box>
            <br /><br />
            <div style={{ display: "flex" }}>
                <div style={{ margin: "0 20px", flexGrow: "1" }}>
                    <br /><br />
                    <Box sx={{
                        flexWrap: 'wrap',
                        alignContent: "align-content",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        {orderBy(books, [searchState.sortFieldName], [
                            searchState.sortAscending ? 'asc' : 'desc'])
                            .map(book =>
                                <BookCardComponent key={book.isbn + book.title} {...book} />
                            )}

                    </Box>
                </div>

                <div style={{ margin: "20px" }}>
                    <div style={{ width: "300px" }}>
                        <Switch
                            onChange={(a, checked) => setSearchState({
                                ...searchState,
                                sortAscending: checked,
                                sortFieldName: "title"
                            })}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'sort by title' }}
                        />
                        <label>Sort by title (Ascending)</label>
                    </div>

                    <div >
                        <Switch
                            onChange={(a, checked) => setSearchState({
                                ...searchState,
                                sortAscending: checked,
                                sortFieldName: "publish_year"
                            })}
                            name="checkedB"
                            inputProps={{ 'aria-label': 'sort by date' }}
                        />
                        <label>Sort by date (Ascending) </label>
                    </div>


                </div>

            </div>


        </>

    );
}

export default BookSearchComponent;
