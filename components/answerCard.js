import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 let answerCard = (props) => {

  const classes = useStyles();
    
  return (
    <Card style={{height: '40vw'}} className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.info.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.info.content}
        </Typography>
        <Typography variant="body2" component="p">
        {props.info.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default answerCard;
