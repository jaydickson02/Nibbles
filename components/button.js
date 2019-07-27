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

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button href="/" className={classes.button}>
        Nibbles
      </Button>
    </div>
  );
}