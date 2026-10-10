import { MoviesAvailable } from '../MoviesAvailable/MoviesAvailable';
import { Container } from './styles';


export function ContentArea() {
    return (
        <Container>
            <MoviesAvailable />
        </Container>
    )
}