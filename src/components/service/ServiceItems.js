import { TokyoContext } from '@/src/Context';
import { useContext } from 'react';

const services = [
  {
    id: 1,
    name: 'Web Development',
    text: [
      'It is my aim to create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      'Global Accessibility: Reach a global audience with a well-crafted web application.',
      'Enhanced User Interaction: Provide a dynamic and interactive user experience on the web.',
      'Scalability and Adaptability: Scale your web app to accommodate growing user needs and technological advancements.',
    ],
    image: 'assets/img/news/webdev.png',
  },
  {
    id: 2,
    name: 'Mobile Apps',
    text: [
      'In an era where accessibility and user engagement are paramount, having a robust mobile presence is non-negotiable. As a seasoned developer, I bring my expertise to the world of mobile app development, offering tailored solutions that seamlessly integrate with your business objectives.',
      'Leverage the power of mobile applications to tap into a broader audience base. With millions of users accessing information on the go, a well-crafted mobile app can be a game-changer for your business.',
      'A mobile app provides a personalized and optimized experience for users. Tailoring the interface to fit various device screens ensures an intuitive and engaging interaction, fostering user satisfaction and loyalty.',
      'Stand out in a crowded digital landscape by establishing a strong presence on mobile devices. A well-designed app not only reinforces brand identity but also makes your services accessible at the fingertips of your audience.',
      'Mobile apps can leverage device features such as cameras, GPS, and notifications, enhancing functionality and user experience. This opens up exciting possibilities for interactive and dynamic applications.',
    ],
    image: 'assets/img/news/mobileDev.png',
  },
  {
    id: 3,
    name: 'E-Commerce',
    text: [
      'In a digital age where online presence is pivotal, crafting an effective e-commerce platform is imperative. With expertise in e-commerce development, I deliver tailored solutions aligning seamlessly with your business goals.',
      'Shopify simplifies the process of setting up and managing an online store. Its user-friendly interface allows businesses to focus on what they do best—selling products—without the complexities of technical intricacies.',
      "Whether you're a startup or an established enterprise, Shopify offers flexibility and scalability. Easily customize your store to match your brand, and scale effortlessly as your business grows.",
      'With an increasing number of users shopping on mobile devices, having a mobile-optimized store is crucial. Shopify ensures a seamless and responsive shopping experience for customers on various devices.',
      'Trust is paramount in e-commerce. Shopify provides robust security features to safeguard customer data and ensure secure transactions, instilling confidence in your online shoppers.',
    ],
    image: 'assets/img/news/eCommerceDev.png',
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
