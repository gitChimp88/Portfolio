import Layout from '@/src/layout/Layout';
import About from 'components/About';
import Contact from 'components/Contact';
import Home from 'components/Home';
import News from 'components/News';
import Service from 'components/Service';
import dynamic from 'next/dynamic';
import { Fragment, useContext, useEffect, useState } from 'react';
const Portfolio = dynamic(() => import('components/Portfolio'), {
  ssr: false,
});
const Index = () => {
  const [isClient, setIsClient] = useState(false);
  const [contactSectionRef, setContactSectionRef] = useState(null);
  const [serviceSectionRef, setServiceSectionRef] = useState(null);
  const [portfolioSectionRef, setPortfolioSectionRef] = useState(null);
  const [homeSectionRef, setHomeSectionRef] = useState(null);

  useEffect(() => setIsClient(true), []);
  const scrollIntoView = (target) => {
    console.log('target - ', target);
    if (target === 'contact') {
      if (contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (target === 'service') {
      if (serviceSectionRef.current) {
        serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (target === 'portfolio') {
      if (portfolioSectionRef.current) {
        portfolioSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (target === 'home') {
      if (homeSectionRef.current) {
        homeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  if (!isClient) return null;
  return (
    <Layout scrollIntoView={scrollIntoView}>
      {/* HOME */}
      <Home
        setContactSectionRef={setContactSectionRef}
        setServiceSectionRef={setServiceSectionRef}
        setPortfolioSectionRef={setPortfolioSectionRef}
        setHomeSectionRef={setHomeSectionRef}
      />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service />
      {/* /SERVICE */}
      <div className="tokyo_tm_portfolio_titles" />
      {/* PORTFOLIO */}
      {/* <Portfolio /> */}
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      {/* <Contact /> */}
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
