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


let GenerateAnswers = (props) => (

  props.answers.map(answer => 
    <Grid item xs={4}>
        <AnswerSummaryCard info={answer}/>
    </Grid>
  )
  
)

let categoryPage = (props) => {

    const classes = useStyles();
    let router = useRouter();

    let answerArray = [];

    for(let i = 0; i < props.answers.length; i++){

      if(router.query.category == props.answer[i].category){
        answerArray.push(props.answer[i]);
      }

    }

    return(
        <div className={classes.root}>
        <Grid container spacing={4}>

            <Grid item xs={12}>
            <AppBar />
            </Grid>

            <GenerateAnswers answers={answerArray}/>

        </Grid>
    </div>
    )

}

categoryPage.getInitialProps = async () => {
  const res = await fetch('http://68.183.183.193/api/answers/all');
  const data = await res.json();
    

  return {answers: data}

}


export default categoryPage;