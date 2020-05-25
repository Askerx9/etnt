import gsap from 'gsap'
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const ScrollToRef = (event, ref) => {
    console.log(event)
    event.preventDefault()
    gsap.to(window, {duration: 2, scrollTo:ref})
}

export default ScrollToRef ;