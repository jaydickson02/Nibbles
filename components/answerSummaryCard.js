
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';

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
  let randViews = Math.floor(Math.random() * 1000);
    
  return (
    <Card style={{height:'100%'}} className={classes.card} onClick = {(event) => {window.location.href = '/answer/' + props.info._id} }>
        <CardActionArea>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          {props.info.title}
        </Typography>
        <Divider/>
        <div style={{height:"10px"}}></div>
        <Typography className={classes.pos} color="textSecondary">
        Views: {randViews}
        </Typography>
       
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default answerSummaryCard;