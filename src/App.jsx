// Dev dependencies
import { useState, useEffect } from 'react';
//import axios from 'axios';
// Components
import { Navigation } from './components/Navigation/navigation';
import { Header } from './components/Header/header';
import { Features } from './components/features';
import { About } from './components/About/about';
import { Services } from './components/services';
import { ProductCreation } from './components/Student/ProductCreation/productCreation';
import { StudentFeedbacks } from './components/Student/StudentFeedback/studentFeedback';
import { Testimonials } from './components/Testimonials/testimonials';
import { Team } from './components/Staff/Team';
import { Contact } from './components/Contact/contact';


import ITRaiseIT from './components/ITraiseIT/it_raise_it';
import News1 from './components/News/news1';
import News2 from './components/News/news2'

import CallAPI from './helper/callAPI';

// fake data
import appData from './data/data.json';
// convinient module
import SmoothScroll from 'smooth-scroll';
//import { Router, Route } from 'express';

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
    CallAPI('categories').then((res) => console.log(res.data.data)).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Router>
        <Route>
          <ITRaiseIT />
        </Route>
      </Router> */}
      <ITRaiseIT />
      <News1 />
      <News2 />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <StudentFeedbacks data={landingPageData.StudentFeedbacks} />
      <ProductCreation />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
