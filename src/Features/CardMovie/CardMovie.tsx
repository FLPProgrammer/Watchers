'use client'

import { Container, MovieCoverBox, Cover, MovieInformationBox } from './styles';
import { ICardMovieProps } from '@/src/Interfaces/Interfaces';


export function CardMovie({name, src, category}: ICardMovieProps) {
    return (
        <Container>
            <MovieCoverBox>
                <Cover
                    src={src}
                    alt={name}
                    width={200}
                    height={200}
                />
            </MovieCoverBox>
            <MovieInformationBox>
                <strong>{name}</strong>
                <strong>{category}</strong>
            </MovieInformationBox>
        </Container>
    )
}