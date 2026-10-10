import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh; 
    overflow: hidden;  
    position: relative;

    &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url('/backgroundLogin.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            animation: backgroundZoom 10s ease-in-out infinite alternate;
    }

    @keyframes backgroundZoom {
        from {
           transform: scale(1);
        }
        to {
            transform: scale(1.2);
    }
}

`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    border: 1px solid rgba(255,255,255, 0.15);
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);

    padding: 20px;
    background-color: rgba(0,0,0,0.55);
    backdrop-filter: blur(10px);


    font-family: 'Poppins', sans-serif;

    animation: formEntrance 0.8s ease-out;


    @keyframes formEntrance {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
        }

         to {
            opacity: 1;
            transform: translateY(0) scale(1);
         }
    }
`;

export const BoxIcon = styled.div``;

export const Icon = styled(Image)``;

export const BoxFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const EmailBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 7px;
    color: rgba(255, 255, 255, 0.85);

    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;

    letter-spacing: 0.3px;
`;

export const Input = styled.input`
    width: 300px;
    padding: 12px 14px;

    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);

    background: rgba(255,255,255,0.06);

    font-family: 'Poppins';
    font-size: 14px;
    outline: none;

    box-shadow:
    inset 0 1px 2px rgba(0,0,0,0.4),
    0 4px 15px rgba(0,0,0,0.2);

    transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3 ease;
    

    &::placeholder {
        color: rgba(255,255,255,255,0.4);
        font-family: 'Poppins';

    }

    &:focus {
        border-color: rgba(229,9,20, 0.8);
        background: rgba(255,255,255, 0.09);

        box-shadow: 
            0 0 0 2px rgba(229, 9, 20, 0.15),
            0 0 18px rgba(229,9,20,0.15);
    }

`;

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        color: #fff;
        margin-top: 10px;
    }
`;

export const SignUpBox = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        color: #fff;
    }
`;

export const Button = styled.button`
    width: 200px;
    padding: 11px 16px;

    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.12);


    background: linear-gradient(
        135deg,
        #b0000a,
        #e50914
    );

    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        box-shadow 0.3s ease,
        background 0.3s ease; 

    transition-duration: 0.4s;

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



