import TextField from '@material-ui/core/TextField';

let submitAnswer = () => (


  <form method="post" action="http://68.183.183.193/api/answer/add">
    <TextField
      variant="outlined"
      margin="normal"
      label="Question"
      name="title"
    />
    <TextField
      variant="outlined"
      margin="normal"
      label="Content"
      name="content"
    />
    <TextField
      variant="outlined"
      margin="normal"
      label="Author"
      name="author"
    />
    <TextField
      variant="outlined"
      margin="normal"
      label="Ranking"
      name="ranking"
    />
    <TextField
      variant="outlined"
      margin="normal"
      label="Category"
      name="category"
    />
    <input type="submit"></input>
  </form>

)

export default submitAnswer;
