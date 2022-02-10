import styled from 'styled-components';

import { useAppSelector } from '../store/hooks';
import { selectNewsArticles } from '../store/slices';
import { Anchor, Banner, BannerTitle, ColoredFooter, Link, PageContent } from '../components';
import { ReactComponent as ChevronDown } from '../assets/chevron-down.svg';

const Video = styled.video`
    width: 100%;
    max-height: 100%;
`;

export default function News() {
    const newsArticles = useAppSelector(selectNewsArticles);

    return (
        <main>
            <Banner isSmall>
                <BannerTitle>News Coverage</BannerTitle>
                <Anchor href="#content" title="Go to content">
                    <ChevronDown height={50} width={50} fill="#FFF" />
                </Anchor>
            </Banner>
            <PageContent className="container" id="content">
                <Video width="640" height="360" controls>
                    <source src="/family-of-charlotte-county-homicide-victim-react-to-arrest.mp4" type="video/mp4" />
                    Sorry, your browser does not support this video type.
                </Video>
                {newsArticles.map(({ title, url }) => (
                    <a href={url} title={title} target="_blank" rel="noreferrer">
                        <p>{title}</p>
                    </a>
                ))}
            </PageContent>
            <ColoredFooter>
                <PageContent>
                    <Link to="/">Return home</Link>
                </PageContent>
            </ColoredFooter>
        </main>
    );
}
