// Dev dependencies
import { useState, useEffect } from 'react';
// Components
import { Navigation } from '../components/Navigation/navigation';
import { Header } from '../components/Header/header';
import { News } from '../components/News/news';
import { About } from '../components/About/about';
import { Partners } from '../components/Partners/partners';

import { ProductCreation } from '../components/Student/ProductCreation/productCreation';
import { StudentFeedbacks } from '../components/Student/StudentFeedback/studentFeedback';

import { Donate } from '../components/Donate/donate';
import { Contact } from '../components/Contact/contact';
// fake data
import appData from '../data/data.json';
// convinient module
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Homepage = () => {
  const [landingPageData, setLandingPageData] = useState({});

  /**
   * This app is using the hard data
   * We can use data from any APIs by custom it
   */
  useEffect(() => {
    setLandingPageData(appData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <News data={landingPageData.News} />
      <About data={landingPageData.About} />
      <Partners data={landingPageData.Partners} />
      <Donate />
      <StudentFeedbacks data={landingPageData.StudentFeedbacks} />
      <ProductCreation />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Homepage;
