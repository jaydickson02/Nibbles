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
  

let answerPage = (props) => {

    const classes = useStyles();
    let router = useRouter();
    
    //console.log(props.answers[0]._id);

    //console.log(router.query.id);

    let answer;

    for(let i = 0; i < props.answers.length; i++){

      if(props.answers[i]._id == router.query.id){
         answer = props.answers[i];
         
      }

    }

    //console.log(answer);

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
          <Categorys />
          </Grid>
        </Grid>
    </div>
    )
}

answerPage.getInitialProps = async () => {
  const res = await fetch('http://68.183.183.193/api/answers/all');
  const data = await res.json();
    

  return {answers: data}

}



export default answerPage;