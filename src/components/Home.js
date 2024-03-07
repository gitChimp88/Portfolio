import { useState, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';
import Testimonials from './about/Testimonials';
import SectionTitle from './SectionTitle';
import Pricing from './service/Pricing';
import ServiceItems from './service/ServiceItems';
import Portfolio from './Portfolio';
import Contact from './Contact';

const socialIcon = [
  {
    id: 1,
    iconName: 'icon-twitter-squared',
    link: 'https://twitter.com/',
  },

  {
    id: 2,
    iconName: 'icon-linkedin-squared',
    link: 'https://www.linkedin.com/in/michael-sullivan-303969a3/',
  },
];
const Home = ({
  setContactSectionRef,
  setServiceSectionRef,
  setPortfolioSectionRef,
  setHomeSectionRef,
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const contactSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);

  const homeSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    setContactSectionRef(contactSectionRef);
    setServiceSectionRef(servicesSectionRef);
    setHomeSectionRef(homeSectionRef);
    setPortfolioSectionRef(portfolioSectionRef);
  }, [
    setContactSectionRef,

    setServiceSectionRef,
    setHomeSectionRef,
    setPortfolioSectionRef,
  ]);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      // setTimeout(function () {
      //   contactSectionRef.current?.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'start',
      //   });
      // }, 1000);
    }
  };
  return (
    <div>
      <SectionContainer name={'home'}>
        <div ref={homeSectionRef} className="container">
          <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
            <div className="home_content flex items-center">
              <div
                className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
                data-type="wave"
              >
                {' '}
                {/* data-type values are: "wave", "circle", "square"*/}
                <div
                  className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                  data-img-url="assets/img/slider/1.jpg"
                />
              </div>
              <div className="details ml-[80px]">
                <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                  Professional <span>Web design</span>
                </h3>
                <p className="job font-montserrat font-medium w-full mb-[25px]">
                  Elevating Ideas into Seamless Solutions: Innovative
                  Development, Business-Focused Results.
                </p>
                <div className="social w-full float-left">
                  <ul className="m-0 list-none">
                    {socialIcon.map((item) => (
                      <li className="mr-[8px] inline-block" key={item.id}>
                        <a
                          className="text-black text-[20px] transition-all duration-300 hover:text-black"
                          href={item.link}
                          target="_blank"
                        >
                          <i className={item.iconName} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div ref={servicesSectionRef} className="container">
          <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
            <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
              <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                <SectionTitle
                  pageName={'Services'}
                  title={'What can I do for you?'}
                />
              </div>
            </div>
            <ServiceItems />
          </div>
        </div>

        {/* PRICING */}

        <Pricing scrollToContact={scrollToContact} />

        {/* PORTFOLIO */}
        <div ref={portfolioSectionRef} className="container">
          <Portfolio />
        </div>

        {/* Testimonials */}
        <div>
          <Testimonials />
        </div>

        {/* CONTACT */}

        <div ref={contactSectionRef} className="container">
          <Contact />
        </div>
      </SectionContainer>
    </div>
  );
};
export default Home;
