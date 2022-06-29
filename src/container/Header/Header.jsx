import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/> 
      <h1 className='app__header-h1'>The Key to Fine Dine</h1>
      <p className='p__opensans' style={{ margin:'2rem 0'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis, diam nec consequat imperdiet,
         mauris tellus molestie turpis, nec accumsan velit leo sit amet nisi. Donec vehicula justo ac nisi porta 
         scelerisque. Sed scelerisque est varius purus cursus, quis accumsan turpis ultricies. Pellentesque dapibus 
         et ex sed consectetur
      </p>
      <button type='button' className='custom__button'>Explore More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header image' />
    </div>
  </div>
);

export default Header;
