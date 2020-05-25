import React from "react";

const FadeInSection = (props) => {

    const domRef = React.useRef();

    React.useEffect(() => {
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        let width = window.innerWidth;
        window.addEventListener('resize', () => {width = window.innerWidth})
        if(isIE) {
            return
        }
        if(IntersectionObserver !== undefined && width > 678) {
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
        }

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