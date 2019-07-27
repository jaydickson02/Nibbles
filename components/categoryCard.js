import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


let CategoryCard = () => (

  <Card>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Physics
        </Typography>
        <Typography variant="body2" color="textSecondary">
          The study of relativity, and quantum mechanics and other bullshit
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

)

export default CategoryCard;
