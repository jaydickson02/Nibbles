import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from './button'
import { Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <NoSsr>
    <div>
      <Paper style={{height:'36.6vw'}} className={classes.root}>

        <Button content={'Physics'}/>

        <Button content={'Biology'} />

        <Button content={'Psychology'} />

        <Button content={'Mathmatics'} />

        <Button content={'Chemistry'} />

        <Button content={'Geology'} />

        <Button content={'Computer Science'} />
        
        <Button content={'Literature'} />

        <Button content={'Art'} />

        <Button content={'History'} />
      </Paper>
    </div>
    </NoSsr>
  );
}