import { Container, TextField, Button, NoSsr, Paper, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let submitAnswer = () => {

  let classes = useStyles();

  return (
    <NoSsr>
      <Paper>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
          <Typography variant="h4">
            Submit a new answer
          </Typography>
            <form className={classes.form} method="post" action="http://68.183.183.193/api/answer/add">
              <TextField
                variant="outlined"
                margin="normal"
                label="Question"
                name="title"
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Content"
                name="content"
                fullWidth
                multiline
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Author"
                name="author"
                fullWidth
              />

              <TextField
                variant="outlined"
                margin="normal"
                label="Category"
                name="category"
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
              Submit
              </Button>

              <TextField
                type="hidden"
                margin="normal"
                name="views"
                value="0"
              />

              <TextField
                variant="outlined"
                margin="normal"
                name="ranking"
                type="hidden"
                fullWidth
              />
            </form>
          </div>
        </Container>
      </Paper>
    </NoSsr>
  )
}

export default submitAnswer;
