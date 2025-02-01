import React from 'react';
import Banner from '../../Header/Banner';
import PopularGames from '../PopularGames/PopularGames';
import ContactPages from '../ContactPages/ContactPages';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import DownBanner from '../DownBanner/DownBanner';
import Reviews from '../Reviews/Reviews';
import SwiperBanner from '../SwiperBanner/SwiperBanner';
import Videos from '../../Component/Videos/Videos';

const Home = () => {
    return (
        <div>
          <Banner/>
          <SwiperBanner/>
          <MiddleBanner/>
          <ContactPages/>
          <PopularGames/>
          <Videos/>
          <DownBanner/>
          <Reviews/>
        </div>
    );
};

export default Home;