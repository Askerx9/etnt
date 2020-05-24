
import React, {useRef, useEffect} from "react";
import ScrollMagic from "ScrollMagic";

const FadeInSection = (props) => {
    const controller = new ScrollMagic.Controller();
    const domRef = useRef();

    useEffect(()=>{
      new ScrollMagic.Scene({
        triggerElement: domRef.current,
      })
          .setClassToggle(domRef.current, "isVisible") // pins the element for the the scene's duration
          .addTo(controller); // assign the scene to the controller


    },[domRef])

    return (
        <div
            className={`fade-in-section section`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection