
let submitAnswer = () => (


<form method="post" action="http://68.183.183.193/api/answer/add">
        <label>Question:</label>
        <input type="text" name="title"></input>
        <label>Content:</label>
        <input type="text" name="content"></input>
        <label>Author:</label>
        <input type="text" name="author"></input>
        <label>Ranking:</label>
        <input type="text" name="ranking"></input>
        <label>Category:</label>
        <input type="text" name="category"></input>
        <label>id:</label>
        <input type="text" name="answerId"></input>
        <input type="submit"></input>
</form>

)

export default submitAnswer;