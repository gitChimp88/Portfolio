import { Fragment } from 'react';
const Intro = () => {
  return (
    <Fragment>
      {/* <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div> */}
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Mike Sullivan</h3>
        <span>Web Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          My foray into web development began with JavaScript. Over the past
          five years, I've devoted the majority of my time to mastering the
          language, delving into its intricacies and applications. My focus on
          JavaScript has allowed me to develop a comprehensive skill set in
          crafting, programming, and managing dynamic web applications
        </p>
        <p>
          My expertise extends to full-stack development, with a focus on React
          and Node.js. I thrive on transforming conceptual ideas into
          comprehensive platforms, going the extra mile to ensure each site
          boasts a distinctive, modern aesthetic. In addition, I have hands-on
          experience in utilizing AWS cloud solutions to enhance the
          scalability, reliability, and overall performance of web applications.
          This holistic approach to development reflects my commitment to
          delivering robust and cutting-edge solutions in the ever-evolving
          landscape of web technologies.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>17.06.1988</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>35</span>
              </li> */}
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>Barcelona</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:tokyo@gmail.com"
                  >
                    michaelksullivan50@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>British</span>
              </li>

              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Reading, Cooking, Guitar</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/MichaelSullivanFS.pdf" download>
          <span>Download CV</span>
        </a>
      </div> */}
    </Fragment>
  );
};
export default Intro;
