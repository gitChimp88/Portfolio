import { TokyoContext } from '@/src/Context';
import { useContext } from 'react';
import SectionTitle from '../SectionTitle';

const Pricing = ({ scrollToContact }) => {
  const { navChange } = useContext(TokyoContext);
  return (
    <div className="tokyo_tm_pricing w-full h-auto clear-both float-left px-[0px] pt-[100px] pb-[60px] bg-white">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          {/* <h3 className="text-[20px] font-bold">Pricing</h3> */}
          <SectionTitle pageName={''} title={'Pricing'} />
        </div>
        <div className="list w-full h-auto clear-both float-left">
          <ul className="ml-[-40px]">
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>
                      €100
                      <span style={{ fontSize: '18px', marginLeft: '5px' }}>
                        {' '}
                        /mo
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[18px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Static website
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>5 pages</p>
                  </li>
                  <li className="opacity-50">
                    <p>Unlimited edits</p>
                  </li>
                  <li className="opacity-50">
                    <p>Includes hosting</p>
                  </li>
                  <li className="opacity-50">
                    <p>Lifetime updates</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a onClick={scrollToContact} href="#">
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>TBD</span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[18px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    web / mobile app
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>Customized design</p>
                  </li>
                  <li className="active">
                    <p>Quality Logo</p>
                  </li>
                  <li className="opacity-50">
                    <p>Performance optimization</p>
                  </li>
                  <li className="opacity-50">
                    <p>Free Support</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a onClick={scrollToContact} href="#">
                    <span>Contact</span>
                  </a>
                </div>
                <span className="popular absolute inline-block bg-black text-white text-[13px] px-[20px] pb-[3px] pt-0 top-[-17px] right-[10px]">
                  Popular
                </span>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>TBD</span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[18px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    E-commerce
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>Customized design</p>
                  </li>
                  <li className="active">
                    <p>Quality Logo</p>
                  </li>
                  <li className="opacity-50">
                    <p>Performance optimization</p>
                  </li>
                  <li className="opacity-50">
                    <p>Free Support</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a onClick={scrollToContact} href="#">
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
