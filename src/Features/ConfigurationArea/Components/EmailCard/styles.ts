
import styled from 'styled-components';

export const EmailBox = styled.section`
    box-sizing: border-box;
    width: 350px;
    min-height: 400px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    font-family: 'Poppins', sans-serif;

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

    strong {
        color: #e50914;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 3px;
    }

    h3 {
        margin: 0;
        color: #ffffff;
        font-size: 21px;
        font-weight: 600;
    }

    p {
        margin: 0 0 6px;
        color: #939393;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 400px) {
        width: 100%;
        padding: 20px;
    }
`;

export const BoxInputs = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const InputGroup = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 12px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    background: #1c1c1c;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;

    transition:
        border-color 0.25s ease,
        background-color 0.25s ease,
        box-shadow 0.25s ease;

    &:focus-within {
        background: #202020;
        border-color: #e50914;
        box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
    }
`;

export const Label = styled.label`
    color: #d4d4d4;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: 3px 0;

    color: #ffffff;
    background: transparent;
    border: none;
    outline: none;

    font-family: 'Poppins', sans-serif;
    font-size: 13px;

    &::placeholder {
        color: #777777;
    }

    &:focus-visible {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const BoxActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
`;

export const Button = styled.button`
    width: 100%;
    min-height: 38px;
    padding: 9px 12px;

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
