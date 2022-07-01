import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' /> 
          <p className='p__opensans'>
            Fusce ut facilisis nunc, sit amet mollis est.
              
          </p>
        </div>
        <p className='p__opensans'>
          Fusce ut facilisis nunc, sit amet mollis est.
          Pellentesque pharetra malesuada erat et elementum. 
          Etiam a laoreet arcu. Sed dictum in metus aliquam posuere
        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alth='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
