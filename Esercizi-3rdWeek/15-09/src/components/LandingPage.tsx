
import { ArticleType } from '../type/ArticleType'
import { useEffect, useState } from 'react'
import SingleArticle from './SingleArticle'
import Container from '@mui/material/Container';

const LandingPage = () => {

    const [articles, setArticles] = useState<ArticleType[]>([])

    useEffect(() => {
        fetchArticle()
    }, [])

    const fetchArticle = async () => {
        try {
            const response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setArticles(data)
            } else {
                console.log("went wrong")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <Container className="containerTot">
            {
                articles.map((article, i) => (
                    <SingleArticle key={i} article={article}/>
                ))
            }
        </Container>

    )

}

export default LandingPage