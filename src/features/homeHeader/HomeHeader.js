import React, {useState, useEffect} from 'react';
import CategoriesList from '../categories/CategoriesList';
import RoadMapExcerpt from '../roadMap/RoadMapExcerpt';
import MobileNav from './MobileNav';
import OpenIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/mobile/icon-close.svg';

import { HeaderWrapper, HeaderContainer, Banner, BannerText, BannerHeading, BannerTagline, MobileMenuToggle, HamburgerImg, CloseImg } from './HomeHeaderElements';

const HomeHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() =>{
        updatePredicate();
        window.addEventListener('resize', updatePredicate);

        return () => {
            window.removeEventListener('resize', updatePredicate);
        }
    })

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 768);
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Banner>
                    <BannerText>
                        <BannerHeading>Frontend Mentor</BannerHeading>
                        <BannerTagline>Feedback Board</BannerTagline>
                    </BannerText>
                    { isMobile ?                     
                        <MobileMenuToggle aria-label='Toggle menu' aria-expanded={isNavOpen} aria-haspopup='true' onClick={toggleNav}> 
                            <HamburgerImg src={OpenIcon} alt='' navOpen={isNavOpen ? 1 : 0}/>
                            <CloseImg src={CloseIcon} alt='' navOpen={isNavOpen ? 1 : 0}/>
                        </MobileMenuToggle> 
                    : null}
                </Banner>
                { isMobile ? <MobileNav isOpen={isNavOpen}/> : null }
                { isMobile ? null : <CategoriesList />}   
                { isMobile ? null : <RoadMapExcerpt />}          
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default HomeHeader;