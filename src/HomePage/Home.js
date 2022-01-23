import React from 'react';
import { InfoSection } from '..';
import {homeOnjOne,homeOnjTwo,homeOnjThree,homeOnjFour}  from './Data';


const Home = () => {
  return(
      <>
      <InfoSection {...homeOnjOne}/>
      <InfoSection {...homeOnjTwo}/>
      <InfoSection {...homeOnjThree}/>
      <InfoSection {...homeOnjFour}/>
            
      </>
  )
};

export default Home;
