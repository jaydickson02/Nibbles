//Import Styling
//import { makeStyles } from '@material-ui/core/styles';
//Import Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

//const useStyles = makeStyles(theme => ({
//}));


let CategoryCard = (props) => {

  //const classes = useStyles();

  return(
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CategoryCard;
