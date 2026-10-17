
import styled from 'styled-components';

export const ProfileBox = styled.section`
    box-sizing: border-box;
    width: 350px;
    min-height: 400px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;

    font-family: 'Poppins', sans-serif;
    text-align: center;

    background: linear-gradient(145deg, #121212, #0c0c0c);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;

    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);

    transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        border-color: rgba(229, 9, 20, 0.3);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    }

    h3 {
        margin: 0;
        color: #ffffff;
        font-size: 21px;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: #939393;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 400px) {
        width: 100%;
        padding: 20px;
    }
`;

export const BoxImg = styled.div`
    width: 100%;
    margin: 12px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const BoxPlaceholder = styled.div`
    width: 120px;
    height: 120px;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #e50914;
    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(229, 9, 20, 0.16),
            transparent 70%
        ),
        #1c1c1c;

    border: 2px solid rgba(229, 9, 20, 0.55);
    border-radius: 50%;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;

    box-shadow: 0 0 25px rgba(229, 9, 20, 0.1);

    transition:
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;

    ${ProfileBox}:hover & {
        border-color: #e50914;
        box-shadow: 0 0 28px rgba(229, 9, 20, 0.2);
        transform: scale(1.03);
    }
`;

export const Button = styled.button`
    box-sizing: border-box;
    width: 100%;
    max-width: 240px;
    min-height: 40px;
    padding: 10px 16px;

    color: #ffffff;
    background: #1c1c1c;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 7px;

    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.2s ease;

    &:hover {
        background: linear-gradient(135deg, #d0000d, #ff101c);
        border-color: #e50914;
        box-shadow: 0 6px 18px rgba(229, 9, 20, 0.2);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }

    &:focus-visible {
        outline: 2px solid #ff3943;
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;
