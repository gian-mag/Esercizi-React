import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { ArticleType } from '../type/ArticleType'
import { Link } from 'react-router-dom'

interface SingleArticleProps {
    article: ArticleType
}

export default function ActionAreaCard({ article }: SingleArticleProps) {
    return (
        <Card sx={{ maxWidth: 345 }} className="articleCard">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={article.imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>

                </CardContent>
                <Link to={"/expanded" + article.id}>
                    <Button variant="contained">Cliccami Tutt!</Button>
                </Link>
            </CardActionArea>
        </Card>
    );
}