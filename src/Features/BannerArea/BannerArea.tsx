import {
    Container,
    Banner,
    MainTitle,
    SecondTitle,
    ButtonMovies
} from './styles';

interface BannerAreaProps {
    onMoviesClick: () => void;
}

export function BannerArea({
    onMoviesClick
}: BannerAreaProps) {
    return (
        <Container>

            <Banner
                src="/banner.jpg"
                alt="Banner Principal"
                width={1000}
                height={700}
            />

            <MainTitle>
                Watcher's
            </MainTitle>

            <SecondTitle>
                Your Heavenly Streaming Service
            </SecondTitle>

            <ButtonMovies onClick={onMoviesClick}>
                See our available content here!
            </ButtonMovies>

        </Container>
    );
}