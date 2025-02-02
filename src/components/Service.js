import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import FunFact from './service/FunFact';
import Partners from './service/Partners';
import Pricing from './service/Pricing';
import ServiceItems from './service/ServiceItems';

const Service = () => {
  return (
    <SectionContainer name={'service'}>
      <div>
        <div className="container">
          <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
            <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
              <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                <SectionTitle pageName={''} title={''} />
              </div>
            </div>
            <ServiceItems />
          </div>
        </div>
        {/* <Partners />
      <FunFact /> */}
        <Pricing />
      </div>
    </SectionContainer>
  );
};
export default Service;
