// Dev dependencies
import { useState, useEffect } from 'react';
// Components
import { Navigation } from '../../components/Navigation/navigation';
import { Header } from '../../components/Header/header';
import { News } from '../../components/News/news';
import { About } from '../../components/About/about';
import { Partners } from '../../components/Partners/partners';

import { Donate } from '../../components/Donate/donate';
import { Contact } from '../../components/Contact/contact';
import { JoinUs } from '../../components/JoinUs/joinUs';

import Messenger from '../../components/MessengerBuble/messenger';
import CallAPI from '../../helper/callAPI';
// fake data
import appData from '../../data/data.json';
// convinient module
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Homepage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [banners, setBanners] = useState([]);
  // const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    setLandingPageData(appData);
    CallAPI('banners').then((res) => {
      setBanners(res.data.data);
    });

    // CallAPI('feedback').then((res) => {
    //   setFeedback(res.data.data);
    // });
  }, []);

  return (
    <div>
      <Navigation />
      <Header banners={banners} />
      <News data={landingPageData.News} />
      <About data={landingPageData.About} />
      <Partners data={landingPageData.Partners} />
      <Donate />
      <JoinUs data={landingPageData.JoinUs} />
      <Contact data={landingPageData.Contact} />
      <Messenger />
    </div>
  );
};

export default Homepage;
