import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderProps } from '../../sliderProps';
import SectionTitle from '../SectionTitle';

const testimonialData = [
  {
    id: 1,
    text: 'I had the pleasure of working closely with Michael, a skilled developer who brought creativity and expertise to the table while developing outstanding web and mobile app MVPs during our collaboration. His innovative approach and commitment to perfection were evident as he brought my vision to life. I wholeheartedly recommend him for his technical prowess and dedication to delivering exceptional results.',
    authorImage: 'assets/img/testimonials/stefano.jpeg',
    authorName: 'Stefano Calandriello',
    authorDesignation: 'Founder - Pizza wallet',
  },
  // {
  //   id: 2,
  //   text: 'Something nice here, blah blah blahj blah blah blah blach, eriovhjerivrkejvrjesjkjinrkfnejknjernjnnjnj',
  //   authorImage: 'assets/img/testimonials/2.jpg',
  //   authorName: 'Nuno',
  //   authorDesignation: 'Software architect',
  // },
  // {
  //   id: 3,
  //   text: "These people really know what they are doing! Great customer support availability and supperb kindness.",
  //   authorImage: "assets/img/testimonials/3.jpg",
  //   authorName: "Baraka Clinton",
  //   authorDesignation: "English Teacher",
  // },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Happy Customers</h3>
          <SectionTitle
            pageName={'Testimonials'}
            title={`What they're saying`}
          />
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
