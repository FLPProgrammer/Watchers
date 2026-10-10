import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export const Banner = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MainTitle = styled.h1`
    color: #e50914;
    font-size: 60px;
    font-family: 'Cinzel', sans-serif;
    text-shadow: 0 0 20px rgba(229, 9, 20, 0.4);

    position: absolute;
    top: 20%;
    left: 25%;

    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

    padding: 10px;
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);

    animation: slideFromLeft ease-in-out 2s;

    @keyframes slideFromLeft {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }
`;

export const SecondTitle = styled.h2`
    color: #fff;
    font-size: 40px;
    font-family: 'Poppins';

    position: absolute;
    top: 40%;
    left: 45%;

    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

    padding: 10px;
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);
`;

export const ButtonMovies = styled.button`
    width: 200px;
    padding: 11px 16px;

    position: relative;
    top: -40%;
    left: 80%;

    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.12);

    background: linear-gradient(
        135deg,
        #b0000a,
        #e50914
    );

    font-family: 'Poppins';
    color: #fff;
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;

    &:hover {
        background: linear-gradient(
            135deg,
            #d0000d,
            #ff101c
        );

        transform: translateY(-2px);

        box-shadow:
            0 12px 25px rgba(0, 0, 0, 0.5),
            0 0 25px rgba(229, 9, 20, 0.35);
    }

    &:active {
        transform: translateY(0);
    }
`;