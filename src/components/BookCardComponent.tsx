import { Book } from "../interfaces/Book";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        maxWidth: 800,
        margin: 10,
        backgroundColor: '#DEEBA9',
    },
    flexRoot: {
        display: "flex",
        flexWrap: "nowrap"
    },

});

const BookCardComponent: React.FC<Book> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={props.isbn}>
            <CardContent>
                <h3>{props.title}</h3><br />

                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: "1" }}>
                        <p>By <strong>{props.author_name && <span>{props.author_name}</span>}</strong></p>
                        <p>Published {props.publish_year}</p>
                        <p>{props.number_of_pages > 0 && props.number_of_pages} pages</p>
                    </div>
                    <div style={{ flexGrow: "1" }}>
                        {props.isbn && props.isbn.length > 0 && <img
                            src={`https://covers.openlibrary.org/b/isbn/${props.isbn}-M.jpg`}
                            alt={props.title}
                        />}
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}

export default BookCardComponent;