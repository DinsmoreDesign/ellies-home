import { useAppSelector } from '../store/hooks';

export default function Home() {
    const title = useAppSelector(state => state.home.title);
    const subtitle = useAppSelector(state => state.home.subtitle);
    const description = useAppSelector(state => state.home.description);

    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}-</p>
            {description.map(desc => (
                <p>{desc}</p>
            ))}
        </header>
    );
}
