import { ArticleType } from '../type/ArticleType'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';

const myTime = (string: string): string => {
    let date = new Date(string);
    return date.toLocaleDateString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

const ExpandedArticle = () => {

    const [singleArticle, setSingleArticles] = useState<ArticleType>()

    const params = useParams()


    useEffect(() => {
        fetchOneArticle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchOneArticle = async () => {
        try {
            const response = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${params.articleId}`
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setSingleArticles(data)
            } else {
                console.log("went wrong")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container className="containerMax">
            {singleArticle && <Card sx={{ maxWidth: 345 }} className="articleCard">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={singleArticle.imageUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {singleArticle.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {singleArticle.summary}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {myTime(singleArticle.publishedAt)}
                        </Typography>
                    </CardContent>
                    <a href={`${singleArticle.url}`} target="_blank" rel="noreferrer">
                        <Button variant="contained">Cliccami!</Button>
                    </a>
                </CardActionArea>
            </Card>
            }
        </Container>
    )

}

export default ExpandedArticle