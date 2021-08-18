import styled from 'styled-components';
import mobileBanner from '../../assets/suggestions/mobile/background-header.png';
import tabletBanner from '../../assets/suggestions/tablet/background-header.png';
import desktopBanner from '../../assets/suggestions/desktop/background-header.png';

export const HeaderWrapper = styled.header`
    margin-bottom: ${props => props.isMobileNavOpen ? '4.5rem' : '0'};
    position: relative;
    z-index: 300;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.625rem;
        margin-bottom: 2.5rem;
    }

    @media screen and (min-width: 1024px) {
        align-self: start;
        grid-template-columns: 1fr;
        grid-template-rows: 8.5rem auto auto;
        padding: unset;
        gap: 1.5rem;
    }
`


export const Banner = styled.div`
    position: ${props => props.isOpen ? 'fixed' : 'static'};
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.5rem;
    background-image: url(${mobileBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: var(--white);

    @media screen and (min-width: 768px) {
        position: static;
        border-radius: 0.625rem;
        background-image: url(${tabletBanner})
    }

    @media screen and (min-width: var(--desktop)) {
        background-image: url(${desktopBanner});
    }
`

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }
`

export const BannerHeading = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.375rem;
`

export const BannerTagline = styled.p`
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.125rem;
    opacity: 0.75;
`

export const MobileMenuToggle = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -1rem;
    padding: 0 1rem;
    border: 0;
    background-color: transparent;
`

export const HamburgerImg = styled.img`
    position: relative;
    visibility: ${({navOpen}) => (navOpen ? 'hidden' : 'visible')};
    z-index: 100;

`

export const CloseImg = styled.img`
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    visibility: ${({navOpen}) => (navOpen ? 'visible' : 'hidden')};

`