import React, {useState} from 'react';
import {Button} from '@shopify/polaris';
import {ArrowLeftMinor, ArrowRightMinor} from '@shopify/polaris-icons';

const Slideshow = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"none"}} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
    <polyline points="15 18 9 12 15 6"/>
  </svg>;
  const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"none"}} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
    <polyline points="9 18 15 12 9 6"/>
  </svg>;
  
  if (!Array.isArray(props.images) || length <= 0) {
    return null;
  }

  return (
    <div style={{
      position:"relative",
      width: "100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Button icon={leftArrow} onClick={prevSlide}></Button>
      {
        props.images.map((image, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={image.node.originalSrc} style={{width:"100%"}}/>)}
            </div>
          ); 
        })
      }
      <Button icon={rightArrow} onClick={nextSlide}></Button>
    </div>
  );
}
export default Slideshow;

// .slide {
//   opacity: 0;
//   transition-duration: 1s ease;
// }
// .slide.active {
//   opacity: 1;
//   transition-duration: 1s;
//   transform: ScalarLeafsRule(1.08);
// }
