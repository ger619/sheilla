 import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

// import { motion } from "framer-motion";

// import { fadeIn } from "../variants";

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    return (
      <section className="section" id='about' ref={ref}>
          <div className="container mx-auto">
              <div>
                  <div className="flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top">
                  </div>
                  <div>
                      <h2>About me.</h2>
                      <h3>Bachelor of Laws degree at the Africa Nazarene University.</h3>
                      <p>
                          Post Graduate Diploma at the Kenya School of Law.
                      </p>
                      <p>
                          Certified Professional Mediator. CPM (mti) East Africa
                      </p>
                      <div>
                          <div className="flex" >
                              <div className='text-[40px] font-tertiary text-gradient'>
                                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                              </div>
                              <div className='font-primary text-sm tracking-[2px]'>
                                  Years of <br />
                                  Experience
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default About;
