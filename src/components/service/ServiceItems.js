import { TokyoContext } from '@/src/Context';
import { useContext } from 'react';

const services = [
  {
    id: 1,
    name: 'Web Development',
    text: [
      'It is my aim to create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      'Something about they way websites are built that is important, page load speed, keyword seo to help with search rankings, Cloud platform expertise to help with scaling and cost',
    ],
    image: 'assets/img/news/1.jpg',
  },
  {
    id: 2,
    name: 'Mobile Apps',
    text: [
      'Something about what you can provide on the mobile side of things ewiojf oiejfiej oijefi ifiewjf ijiew ifjiojf fejjf jfiejw ojefien ewfij reghre iorjgr igjirn ijgrn nijgkeng igjierjg ijgi reojigre ijrgirj griji ervrrferhvrvjieruhvwjviwejjvewijvewjveiwjveijveiwjviejviwejviewjviewjviewjvioewjviewjviewjviewjviewjveiwjviewjviewjviewjviewjvewiojviewjviejviewjveiwjvieowjviejviowej',
      'Something more about mobile apps',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
    ],
    image: 'assets/img/news/2.jpg',
  },
  {
    id: 3,
    name: 'E-Commerce',
    text: [
      'It is my aim to create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      'Something about they way websites are built that is important, page load speed, keyword seo to help with search rankings, Cloud platform expertise to help with scaling and cost',
    ],
    image: 'assets/img/news/2.jpg',
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
