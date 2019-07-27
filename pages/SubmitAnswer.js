
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
        
        <input type="hidden" name="answerId" value="123456789"></input>
        <input type="submit"></input>
</form>

)

export default submitAnswer;