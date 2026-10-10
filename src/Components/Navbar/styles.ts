import styled from 'styled-components';
import Image from 'next/image';


export const Container = styled.div`
    width: 100%;
    height: 150px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    background-color: #0c0c0c;
    box-shadow: 0 8px 30px rgba(0,0,0,0.65);
    border-bottom: 1px solid rgba(255,255,255, 0.08);

`;

export const LogoBox = styled.div`
`;


export const Logo = styled(Image)`
`;

export const OptionsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Option = styled.h3`
    color: #fff;
    font-family: 'Poppins', sans-serif;

    &:hover {
        text-decoration: underline;
        color: #e50914;
        cursor: pointer;
    }
`;

export const OtherOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;