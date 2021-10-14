import React, { useState } from 'react'


function ColorPallete(props) {
  

  return (
    <>
      <div className="mx-3">

<h6 onClick={props.colorScheme}>Choose Color Scheme</h6>
{ props.showPallete 
        ? <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" style={{ "backgroundColor": "red" }} onClick={()=>props.buttonPressed("red")}>red</button>
        <button type="button" style={{ "backgroundColor": "yellow" }} onClick={()=>props.buttonPressed("yellow")}>yellow</button>
        <button type="button" style={{ "backgroundColor": "blue" }} onClick={()=>props.buttonPressed("#0dcaf0")} >Blue</button>
      </div>
        : null
    }

</div>
    </>
  )
}

export default ColorPallete
