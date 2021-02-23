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
  
  if (!Array.isArray(props.images) || length <= 0) {
    return null;
  }

  return (
    <section style={{
      position:"relative",
      width: "100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Button icon={ArrowLeftMinor} style={{position:"absolute !important", top:"50%", left:"0.5rem", width:"10rem !important", zIndex:"10", cursor:"pointer", userSelect:"none"}} onClick={prevSlide}></Button>
      {
        props.images.map((image, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={image.node.originalSrc}  style={{width: "100%"}}/>
              )}
            </div>
          ); 
        })
      }
      <Button icon={ArrowRightMinor} style={{position:"absolute !important", top:"50%", right:"0.5rem", width:"10rem !important", zIndex:"10", cursor:"pointer", userSelect:"none"}} onClick={nextSlide}></Button>
    </section>
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
