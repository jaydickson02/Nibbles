import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Import Components
import AppBar from "../components/appBar";
import CategoryCard from '../components/CategoryCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

let index = () => {

  const classes = useStyles();
  
  
  return(
    <div>
      <div className={classes.root}>
        <Grid container spacing={4}>

          <Grid item xs={12}>
            <AppBar />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

          <Grid item xs={4}>
            <CategoryCard />
          </Grid>

        </Grid>
      </div>
      
    </div>

)
}

export default index;
