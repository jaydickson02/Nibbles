import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography style={{width:"600px"}} variant="h6" color="inherit">
            {props.content}
          </Typography>
          
          <Button href={'/submitAnswer'} variant="contained" color="primary" className={classes.button}>
            Submit your own answer!
           </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}