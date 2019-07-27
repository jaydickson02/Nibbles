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

const categorieDict = [
                        ["Physics", "Whatever the fuck"],
                        ["Chemistry", "Blowing up nerds"],
                        ["Biology", "Death by Snoo Snoo"],
                        ["Psychology", "My brain after a hackathon"],
                        ["Computer Science", "Why do you bind functions in React"],
                        ["Geology", "Rocks"],
                      ]

let CardList = (props) => (

  props.categories.map(key =>
    <Grid item xs={4}>
      <CategoryCard title={key[0]} content={key[1]}/>
    </Grid>

)

);

let index = () => {

  const classes = useStyles();


  return(
    <div>
      <div className={classes.root}>
        <Grid container spacing={4}>

          <Grid item xs={12}>
            <AppBar />
          </Grid>

          {<CardList categories={categorieDict} />}

        </Grid>
      </div>

    </div>

)
}

export default index;
