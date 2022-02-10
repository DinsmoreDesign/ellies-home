import styled from 'styled-components';

import banner from '../assets/banner.jpeg';

interface BannerProps {
    isSmall?: boolean;
}

export default styled.header<BannerProps>`
    background: url(${banner}) no-repeat center center fixed;
    background-size: cover;
    height: ${props => (props.isSmall ? '50vh' : '100vh')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
`;
