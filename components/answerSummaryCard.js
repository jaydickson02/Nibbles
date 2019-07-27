
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


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

 let answerSummaryCard = (props) => {

  const classes = useStyles();
    
  return (
    <Card className={classes.card} onClick = {(event) => {window.location.href = '/answer/' + props.info._id} }>
        <CardActionArea>
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
      </CardActionArea>
    </Card>
  );
}

export default answerSummaryCard;