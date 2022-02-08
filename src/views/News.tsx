import { useAppSelector } from '../store/hooks';
import { selectNewsArticles } from '../store/slices';

export default function News() {
    const articles = useAppSelector(selectNewsArticles);

    return (
        <section>
            <header>
                <h1>News Coverage</h1>
            </header>
            <main>
                {articles.map(({ title, url }) => (
                    <a href={url} title={title} target="_blank" rel="noreferrer">
                        <p>{title}</p>
                    </a>
                ))}
            </main>
        </section>
    );
}
