import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button style={{width: "100%"}} href={'/category/' + props.content} variant="contained" color="primary" className={classes.button}>
        {props.content}
      </Button>
    </div>
  );
}