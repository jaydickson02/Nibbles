import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {useRouter} from 'next/router';

//Import Components
import AnswerCard from "../../components/answerCard";
import AppBar from "../../components/appBar";

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

let categoryPage = () => {

    const classes = useStyles();
    let router = useRouter();

    return(
        <div className={classes.root}>
        <Grid container spacing={4}>

            <Grid item xs={12}>
            <AppBar />
            </Grid>

            <Grid item xs={8}>
            
          <AnswerCard info={answer}/>
          </Grid>

          <Grid item xs={4}>
          <AnswerCard info={answer}/>
          </Grid>
        </Grid>
    </div>
    )

}


export default categoryPage;