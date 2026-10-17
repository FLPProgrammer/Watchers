
import styled from 'styled-components';

export const Container = styled.main`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 80px 24px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    background: #0c0c0c;

    @media (max-width: 600px) {
        padding: 24px 16px;
        gap: 20px;
    }
`;
