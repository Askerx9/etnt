import React from 'react'
import ScrollToRef from "./ScrollToRef";

const Scroll = () => {

  return (
    <div className="scroll" onClick={(e) => ScrollToRef(e,'#presentation')}>

    </div>
  )
}

export default Scroll