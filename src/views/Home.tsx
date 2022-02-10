//import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '../store/hooks';
import { StyledContent } from '../components';

import banner from '../assets/banner-lg.jpeg';
import ellieHeart from '../assets/ellie-heart.gif';
import obituary from '../assets/obituary.jpeg';
import angel from '../assets/jesus-welcomes-an-angel.jpeg';
import { ReactComponent as ChevronDown } from '../assets/chevron-down.svg';

const StyledBanner = styled.header`
    background: url(${banner}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const StyledAnchor = styled.a`
    transition: opacity 0.3s ease-in-out;
    :hover {
        opacity: 0.8;
    }
`;

const StyledGif = styled.img`
    display: block;
    width: 50%;
    margin: 0 auto;
`;

const StyledColumn = styled.section.attrs({
    className: 'column'
})`
    display: flex !important;
    justify-content: center;
`;

export default function Home() {
    const title = useAppSelector(state => state.home.title);
    const subtitle = useAppSelector(state => state.home.subtitle);
    const description = useAppSelector(state => state.home.description);

    return (
        <main>
            <StyledBanner>
                <StyledAnchor href="#content" title="Go to content">
                    <ChevronDown height={50} width={50} fill="#FFF" />
                </StyledAnchor>
            </StyledBanner>
            <StyledContent id="content">
                <StyledGif src={ellieHeart} alt="Ellie banner" />
                <h1>{title}</h1>
                <h3>
                    <em>{subtitle} -</em>
                </h3>
                <blockquote>
                    {description.map(desc => (
                        <p>{desc}</p>
                    ))}
                </blockquote>
                <section className="row">
                    <StyledColumn>
                        <img src={angel} alt="Jesus Welcomes an Angel" />
                    </StyledColumn>
                    <StyledColumn>
                        <img src={obituary} alt="Ellie's Obituary" />
                    </StyledColumn>
                </section>
                {/* <Link to="/news" className="button">
                    Read news coverage
                </Link> */}
            </StyledContent>
        </main>
    );
}
