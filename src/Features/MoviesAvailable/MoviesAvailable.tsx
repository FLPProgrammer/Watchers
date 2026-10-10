import { Container } from './styles';
import { movies } from './moviesData';
import { CardMovie } from '../CardMovie/CardMovie';



export function MoviesAvailable() {
    return (
        <Container>
            {movies.map((movie) => (
                <CardMovie
                    key={movie.name}
                    name={movie.name}
                    src={movie.src}
                    category={movie.category}
                />
            ))}
        </Container>
    );
}