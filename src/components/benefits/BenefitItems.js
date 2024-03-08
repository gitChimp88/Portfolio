import { TokyoContext } from '@/src/Context';
import { useContext } from 'react';

const services = [
  {
    id: 1,
    name: 'Swift Project Completion',
    text: [
      'Timely project completion with a focus on efficiency, ensuring your vision comes to life without unnecessary delays.',
    ],
    image: 'assets/img/news/webdev.png',
  },
  {
    id: 2,
    name: 'Affordability Without Compromise',
    text: [
      'Offering competitive pricing without sacrificing quality, providing cost-effective solutions for businesses of all sizes.',
    ],
    image: 'assets/img/news/mobileDev.png',
  },
  {
    id: 3,
    name: 'Client-Centric Approach',
    text: [
      'Your success is my priority; I strive to understand your business goals and deliver a solution that aligns seamlessly with your vision.',
    ],
    image: 'assets/img/news/eCommerceDev.png',
  },
];
const BenefitItems = () => {
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
              <p className="text">{service.text[0]}</p>

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
export default BenefitItems;
