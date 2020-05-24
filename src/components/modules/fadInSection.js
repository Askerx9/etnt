
import React, {useRef, useEffect} from "react";

const FadeInSection = (props) => {
    // const controller = new ScrollMagic.Controller();
    // const domRef = useRef();
    //
    // useEffect(()=>{
    //   new ScrollMagic.Scene({
    //     triggerElement: domRef.current,
    //   })
    //       .setClassToggle(domRef.current, "isVisible") // pins the element for the the scene's duration
    //       .addTo(controller); // assign the scene to the controller
    //
    //
    // },[domRef])

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.add('fade-in-section')
                if(entry.isIntersecting) {
                    entry.target.classList.add('isVisible')
                }

            });
        }, {threshold: 0.5});

        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection