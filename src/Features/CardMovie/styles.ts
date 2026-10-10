import styled from 'styled-components';
import Image from 'next/image';

export const MovieInformationBox = styled.div`
    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;

    padding: 20px 15px;

    display: flex;
    flex-direction: column;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.95),
        rgba(0, 0, 0, 0.6),
        transparent
    );

    opacity: 0;

    transform: translateY(20px);

    transition:
        opacity 0.3s ease,
        transform 0.3s ease;

    strong {
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }

    strong:first-child {
        font-size: 18px;
    }

    strong:last-child {
        font-size: 14px;
        color: #aaa;
    }
`;


export const Container = styled.div`
    position: relative;
    width: 180px;
    height: 270px;

    border-radius: 12px;
    overflow: hidden;

    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }

    &:hover ${MovieInformationBox} {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const MovieCoverBox = styled.div`
    width: 100%;
    height: 100%;
`;

export const Cover = styled(Image)`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;
