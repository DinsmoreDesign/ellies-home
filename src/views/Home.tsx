import { useAppSelector } from '../store/hooks';
import { Anchor, Banner, BannerTitle, ColoredFooter, Column, Gif, Link, PageContent } from '../components';

import ellieHeart from '../assets/ellie-heart.gif';
import prayer from '../assets/ellie-prayer.jpeg';
import angel from '../assets/jesus-welcomes-an-angel.jpeg';
import { ReactComponent as ChevronDown } from '../assets/chevron-down.svg';

export default function Home() {
    const title = useAppSelector(state => state.home.title);
    const subtitle = useAppSelector(state => state.home.subtitle);
    const description = useAppSelector(state => state.home.description);

    return (
        <main>
            <Banner>
                <BannerTitle>{title}</BannerTitle>
                <Anchor href="#content" title="Go to content">
                    <ChevronDown height={50} width={50} fill="#FFF" />
                </Anchor>
            </Banner>
            <PageContent id="content">
                <Gif src={ellieHeart} alt="Ellie banner" />
                <h2>{subtitle} -</h2>
                <blockquote>
                    {description.map(desc => (
                        <p>
                            <em>{desc}</em>
                        </p>
                    ))}
                </blockquote>
                <section className="row">
                    <Column>
                        <img src={angel} alt="Jesus Welcomes an Angel" />
                    </Column>
                    <Column>
                        <img src={prayer} alt="Ellie's Prayer" />
                    </Column>
                </section>
                {/* <Link to="/news" className="button">
                    Read news coverage
                </Link> */}
            </PageContent>
            <ColoredFooter>
                <PageContent>
                    <Link to="/news-coverage">Read news coverage</Link>
                </PageContent>
            </ColoredFooter>
        </main>
    );
}
