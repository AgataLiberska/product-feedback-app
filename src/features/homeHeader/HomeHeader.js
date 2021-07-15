import React, {useState} from 'react';
import CategoriesList from '../categories/CategoriesList';
import RoadMapExcerpt from '../roadMap/RoadMapExcerpt';
import OpenIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/mobile/icon-close.svg';

import { HeaderWrapper, HeaderContainer, Banner, BannerText, BannerHeading, BannerTagline, MobileMenuToggle, HamburgerImg, CloseImg } from './HomeHeaderElements';

const HomeHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

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
                    <MobileMenuToggle aria-label='Toggle menu' aria-expanded={isNavOpen} aria-haspopup='true' onClick={toggleNav}> 
                        <HamburgerImg src={OpenIcon} alt='' navOpen={isNavOpen ? 1 : 0}/>
                        <CloseImg src={CloseIcon} alt='' navOpen={isNavOpen ? 1 : 0}/>
                    </MobileMenuToggle>
                </Banner>
                <CategoriesList />
                <RoadMapExcerpt />
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default HomeHeader;