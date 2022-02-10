import { useAppSelector } from '../store/hooks';
import { selectNewsArticles } from '../store/slices';
import { StyledContent } from '../components';

export default function News() {
    const articles = useAppSelector(selectNewsArticles);

    return (
        <main>
            <StyledContent className="container">
                <h1>News Coverage</h1>
                <video width="640" height="360" controls>
                    <source src="/family-of-charlotte-county-homicide-victim-react-to-arrest.mp4" type="video/mp4" />
                    Sorry, your browser does not support this video type.
                </video>
                {articles.map(({ title, url }) => (
                    <a href={url} title={title} target="_blank" rel="noreferrer">
                        <p>{title}</p>
                    </a>
                ))}
            </StyledContent>
        </main>
    );
}
