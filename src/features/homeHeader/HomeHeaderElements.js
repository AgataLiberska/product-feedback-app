import styled from 'styled-components';
import mobileBanner from '../../assets/suggestions/mobile/background-header.png';
import tabletBanner from '../../assets/suggestions/tablet/background-header.png';
import desktopBanner from '../../assets/suggestions/desktop/background-header.png';

export const HeaderWrapper = styled.header`
 
`

export const HeaderContainer = styled.div`

`

export const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.5rem;
    background-image: url(${mobileBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: var(--white);

    @media screen and (min-width: var(--tablet)) {
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