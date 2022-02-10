import styled from 'styled-components';

const Section = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    color: #fff;
`;

interface BannerTitleProps {
    children: string;
}

export default function BannerTitle({ children }: BannerTitleProps) {
    return (
        <Section>
            <H1>{children}</H1>
        </Section>
    );
}
