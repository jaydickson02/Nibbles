import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {useRouter} from 'next/router';
import NoSsr from '@material-ui/core/NoSsr';

//Import Components
import AnswerSummaryCard from "../../components/answerSummaryCard";
import AppBar from "../../components/appBar";
import BreadCrumbs from "../../components/breadcrumb";


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
    <Grid key={answer.title} item xs={4}>
        <AnswerSummaryCard info={answer}/>
    </Grid>
  )
  
)

let categoryPage = (props) => {

    const classes = useStyles();
    let router = useRouter();

    let answerArray = [];

    for(let i = 0; i < props.answers.length; i++){

      if(router.query.category == props.answers[i].category){
        answerArray.push(props.answers[i]);
      }

    }

    return(
      
        <div className={classes.root}>
          
        <Grid container spacing={4}>

            <Grid item xs={12}>
              <AppBar />
            </Grid>

            <Grid item xs={10}>
              <NoSsr>
                <BreadCrumbs title={router.query.category}/>
              </NoSsr>
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