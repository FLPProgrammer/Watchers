
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.nav`
    box-sizing: border-box;
    position: relative;
    z-index: 10;

    width: 100%;
    min-height: 100px;
    padding: 12px 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    background: linear-gradient(180deg, #111111 0%, #0c0c0c 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

    @media (max-width: 760px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        padding: 16px 20px;
    }

    @media (max-width: 480px) {
        gap: 14px;
        padding: 12px 14px;
    }
`;

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

export const Logo = styled(Image)`
    display: block;
    width: 76px;
    height: 76px;
    object-fit: contain;

    transition:
        transform 0.3s ease,
        filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 0 8px rgba(229, 9, 20, 0.3));
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;

export const OptionsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 480px) {
        order: 3;
        width: 100%;
        gap: 18px;
    }
`;

export const Option = styled.button`
    position: relative;

    padding: 12px 4px;

    color: #bdbdbd;
    background: transparent;
    border: none;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    cursor: pointer;

    transition: color 0.25s ease;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 5px;

        width: 100%;
        height: 2px;

        background: #e50914;
        border-radius: 2px;

        transform: scaleX(0);
        transform-origin: center;

        transition: transform 0.25s ease;
    }

    &:hover {
        color: #ffffff;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &:focus-visible {
        color: #ffffff;
        outline: 2px solid #e50914;
        outline-offset: 4px;
        border-radius: 3px;
    }

    &:focus-visible::after {
        transform: scaleX(1);
    }

    &:active {
        color: #ff3943;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        &::after {
            transition: none;
        }
    }
`;

export const OtherOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    flex-shrink: 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: #bdbdbd;
        text-decoration: none;

        border-radius: 50%;
        outline-offset: 3px;

        transition:
            color 0.25s ease,
            background-color 0.25s ease,
            transform 0.25s ease;
    }

    a:focus-visible {
        outline: 2px solid #e50914;
    }

    svg {
        box-sizing: content-box;
        width: 21px;
        height: 21px;
        padding: 10px;

        color: inherit;
        border-radius: 50%;

        cursor: pointer;

        transition:
            color 0.25s ease,
            background-color 0.25s ease,
            transform 0.25s ease;
    }

    > svg:hover,
    a:hover svg {
        color: #ffffff;
        background-color: rgba(229, 9, 20, 0.15);
        transform: translateY(-2px);
    }

    > svg:focus-visible {
        color: #ffffff;
        outline: 2px solid #e50914;
        outline-offset: 2px;
    }

    > svg:active,
    a:active svg {
        transform: translateY(0);
    }

    @media (max-width: 480px) {
        gap: 2px;

        svg {
            width: 19px;
            height: 19px;
            padding: 8px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        a,
        svg {
            transition: none;
        }
    }
`;
