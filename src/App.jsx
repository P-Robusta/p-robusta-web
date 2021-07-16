// Dev dependencies
import { useState, useEffect } from 'react';
// Components
import { Navigation } from './components/Navigation/navigation';
import { Header } from './components/Header/header';
import { Features } from './components/features';
import { About } from './components/About/about';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/Testimonials/testimonials';
import { Team } from './components/Staff/Team';
import { Contact } from './components/Contact/contact';

import CallAPI from './helper/callAPI';

// fake data
import appData from './data/data.json';
// convinient module
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  /**
   * This app is using the hard data
   * We can use data from any APIs by custom it
   */
  useEffect(() => {
    setLandingPageData(appData);
    CallAPI('categories').then((res) => console.log(res.data.data));
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
