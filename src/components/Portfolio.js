import Isotope from 'isotope-layout';
import { useContext, useEffect, useRef, useState } from 'react';
import { TokyoContext } from '../Context';
import { tokyo } from '../utils';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
const detailData = [
  {
    id: 1,
    thumbnail: 'assets/img/portfolio/recipeWrangleLogo.png',
    title: 'RecipeWrangle',
    text: [
      'Project Overview',
      'RecipeWrangle is a groundbreaking mobile application that revolutionizes the vegan cooking experience, placing the power of artificial intelligence in the hands of users. This app seamlessly integrates React Native for the frontend, while leveraging AWS services such as Cognito, Lambda, and RDS for a robust and scalable backend infrastructure.',
      'Key features:',
      'AI-Generated Recipes: Empowering users to receive personalized vegan recipes. The app covers a wide spectrum of meals, allowing users to explore diverse plant-based dishes tailored to their specific taste preferences.',
      "Ingredient Customization: RecipeWrangle simplifies the cooking process by enabling users to input available ingredients, allowing the AI engine to craft delightful vegan dishes based on what's already in their pantry. This unique feature adds a layer of personalization, making vegan cooking more accessible and convenient.",
      "Promoting Sustainability: A core value of RecipeWrangle is its commitment to sustainability. By suggesting recipes that align with users' available ingredients, the app actively promotes mindful cooking, reducing food waste and unnecessary purchases. This not only enhances the user experience but also contributes to positive environmental impact.",
      "Save and Organize: To enhance user convenience, RecipeWrangle offers a 'Save' feature, allowing users to store their favorite recipes for future use. This personalized recipe collection facilitates easy retrieval and recreation of beloved dishes, fostering a user-friendly and organized culinary experience.",
      'Share the Joy of Cooking: RecipeWrangle encourages the community aspect of plant-based living by making it effortless for users to share their favorite recipes with friends and family. The app facilitates seamless recipe sharing options, fostering a sense of community and inspiring others with delightful culinary creations.',
      'Technologies used: ',
      'Frontend: React Native',
      'Backend Services: AWS (Cognito, Lambda, RDS)',
      'Solution:',
      'RecipeWrangle is a comprehensive solution that leverages React Native for a user-friendly interface and integrates seamlessly with AWS services for a secure and scalable backend. The AI engine ensures a personalized experience, while features like ingredient customization, sustainability promotion, and social sharing make it an all-encompassing tool for both seasoned plant-based chefs and those new to the vegan journey.',
    ],
    client: 'RecipeWrangle',
    date: 'March 01, 2024',
    category: 'Mobile',
    share: [
      {
        id: 1,
        iconName: 'icon-facebook-squared',
        link: 'https://www.facebook.com/',
      },
      {
        id: 2,
        iconName: 'icon-twitter-squared',
        link: 'https://twitter.com/',
      },
      {
        id: 3,
        iconName: 'icon-behance-squared',
        link: 'https://www.behance.net/',
      },
      {
        id: 4,
        iconName: 'icon-linkedin-squared',
        link: 'https://www.linkedin.com/',
      },
    ],
    bigImage: 'assets/img/portfolio/recipeGraphic.png',
    images: [
      'assets/img/portfolio/02.png',
      'assets/img/portfolio/03.png',
      'assets/img/portfolio/04.png',
    ],
  },
  {
    id: 2,
    thumbnail: 'assets/img/portfolio/pizza.svg',
    title: 'Pizza wallet',
    text: [
      'Project overview: ',
      'Pizza Wallet merges the worlds of blockchain and dining to create a unique and rewarding experience for users. With React Native for a user-friendly interface and AWS services for a reliable backend, the app ensures a secure and seamless process from Web3 login to earning and redeeming crypto tokens. By simplifying the check-in process and introducing a blockchain-powered reward system, Pizza Wallet redefines how users interact with their favorite pizza establishments.',
      'Key Features:',
      'Web3 Login and Wallet Creation: Pizza Wallet offers a unique user experience by allowing seamless login through Web3 authentication. Users not only gain access to the app but also have a digital wallet automatically created for them, ensuring a secure and convenient entry into the world of blockchain-powered dining rewards.',
      'QR Code Check-in at Pizza Shops: Elevating the dining experience, Pizza Wallet enables users to visit designated pizza shops and effortlessly check in using QR codes. This innovative feature enhances user engagement and loyalty, creating a direct connection between patrons and their favorite pizzerias.',
      'Crypto Token Rewards: Users are incentivized for their loyalty through the accumulation of crypto tokens. Each check-in at a partner pizza shop earns users these tokens, which can be utilized to unlock discounts on future purchases. Pizza Wallet transforms the traditional loyalty program by introducing a secure and blockchain-based reward system.',
      'Blockchain-Powered Security: Emphasizing the importance of security, Pizza Wallet leverages blockchain technology to ensure the integrity of user data and transaction history. The decentralized nature of the blockchain enhances transparency and trust, providing users with a secure and reliable platform.',
      'Technologies Used:',
      'Frontend: React Native',
      'Backend Services: AWS (DynamoDB, Lambda)',
    ],
    client: 'Pizza wallet',
    date: 'September 22, 2023',
    category: 'Mobile',
    share: [
      {
        id: 1,
        iconName: 'icon-facebook-squared',
        link: 'https://www.facebook.com/',
      },
      {
        id: 2,
        iconName: 'icon-twitter-squared',
        link: 'https://twitter.com/',
      },
      {
        id: 3,
        iconName: 'icon-behance-squared',
        link: 'https://www.behance.net/',
      },
      {
        id: 4,
        iconName: 'icon-linkedin-squared',
        link: 'https://www.linkedin.com/',
      },
    ],
    bigImage: 'assets/img/portfolio/mainPizzaLogo.svg',
    images: [
      'assets/img/portfolio/pizzaShot1.png',
      'assets/img/portfolio/pizzaShot2.png',
    ],
  },
  {
    id: 2,
    thumbnail: 'assets/img/portfolio/pizzaWallet.jpg',
    title: 'Project 2',
    text: [
      'We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.',
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    client: 'Pizza wallet',
    date: 'October 22, 2022',
    category: 'Detail',
    share: [
      {
        id: 1,
        iconName: 'icon-facebook-squared',
        link: 'https://www.facebook.com/',
      },
      {
        id: 2,
        iconName: 'icon-twitter-squared',
        link: 'https://twitter.com/',
      },
      {
        id: 3,
        iconName: 'icon-behance-squared',
        link: 'https://www.behance.net/',
      },
      {
        id: 4,
        iconName: 'icon-linkedin-squared',
        link: 'https://www.linkedin.com/',
      },
    ],
    bigImage: 'assets/img/portfolio/1.jpg',
    images: ['assets/img/portfolio/2.jpg', 'assets/img/portfolio/3.jpg'],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');
  useEffect(() => {
    const data = document.querySelector('.item__');
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope('.gallery_zoom', {
          itemSelector: '.item__',
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });

  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={'portfolio'}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={'Portfolio'}
                title={'Creative Portfolio'}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange('*')}
                    >
                      All
                    </a>
                  </li>

                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange('Mobile')}
                    >
                      Mobile
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange('Web')}
                    >
                      Web
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="detail Mobile mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Mobile project"
                    data-category="Mobile"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/recipeWrangleLogo.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail Mobile mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Mobile project"
                    data-category="Mobile"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-contain bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/pizza.svg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail Web mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Web project"
                    data-category="Web"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/8.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
