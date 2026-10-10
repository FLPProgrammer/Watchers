import styled from 'styled-components';

export const EmailBox = styled.section`
    width: 350px;
    height: 400px;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
   
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    padding: 20px;

    font-family: 'Poppins';
    
    background-color: #0c0c0c;


    strong {
        color: #e50914;
    }

    h3 {
        color: #fff;
    }

    p {
        color: #939393;
    }
    
`;


export const BoxInputs = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

`;

export const InputGroup = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    padding: 10px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;

    background-color: #40403e;
       
    &:focus-within {
        border-color: #e50914;
    }

`;


export const Label = styled.label`
    color: #fff;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 0;

    color: #fff;
    background: #40403e;

    &::placeholder {
        color: #939393;
        font-family: 'Poppins', sans-serif;
    }
`;

export const BoxActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

`;

export const Button = styled.button`
    width: 100%;
    padding: 7px 7px;
    
    
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;

    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.12);

    cursor: pointer;

    transition: 
        transform 0.2s ease,
        box-shadow 0.3s ease,
        background 0.3s ease
    ;

    &:hover {
          background: linear-gradient(
            135deg,
            #d0000d,
            #ff101c
        );

    transform: translateY(-2px);

    box-shadow:
        0 12px 25px rgba(0,0,0,0.5),
        0 0 25px rgba(229,9,20,0.35); 
        
    }

    &:active {
        transform: translateY(0);
    }
`;