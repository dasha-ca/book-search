import Box from "@material-ui/core/Box";
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
        backgroundColor: '#deeaee',
    }
});

const BookCardComponent: React.FC<Book> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <span>{props.title}</span><br />
                <span>{props.first_publish_year}</span><br />
                <span>{props.number_of_pages_median}</span><br />
                {props.author_name && props.author_name.length > 0 && <span>{props.author_name[0]}</span>}<br />

                {props.isbn && props.isbn.length > 0 && <img
                    src={`https://covers.openlibrary.org/b/isbn/${props.isbn[0]}-S.jpg`}
                    alt={props.title}
                />}
                {/* <pre>{JSON.stringify(props, null, 3)}</pre> */}
            </CardContent>
            <CardActions>
                <Button size="small">Vew More</Button>
            </CardActions>
        </Card>
    );
}

export default BookCardComponent;