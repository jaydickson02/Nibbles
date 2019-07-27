import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import SimpleBar from './smallSimpleBar';


const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
}));
//

 let answerCard = (props) => {

  const classes = useStyles();
    
  return (
    <Card style={{height: '40vw', position: 'relative'}} className={classes.card}>
      <CardContent>

      <SimpleBar content={props.info.title}/>

      <div style={{height:"35px"}}></div>

      <div> 
      <Typography variant="h7">
      THIS IS THE TOP VOTED ANSWER
        </Typography>
      </div>

      <div style={{height:"10px"}}></div>

    <div>
        <Typography variant="h6">
            {props.info.content}
        </Typography>

        <div style={{height:"8px"}}></div>

        <Typography variant="h7">
            - {props.info.author}
        </Typography>
        
    </div>

   
        


        </CardContent>
    </Card>
  );
}

export default answerCard;
