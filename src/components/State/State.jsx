import React, { useState } from "react";
import "./State.css";
const State = () => {
  const [text, setText] = useState('');
const [img, setImg] = useState(false)
const [open, setOpen] = useState('OPEN')

const change = () => {
    setImg(!img)
    setOpen(img ? 'OPEN' : 'CLOSE')
}


  return (
    <>

    <div className="box">
<button onClick={change}>{open} IMAGE</button>
{img && (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq-I7AsAFy5s4-LhIsBPm414CBlWPWVE_Uw&s" alt="" />
)}
    </div>




    <div className="box">
        <h2>{text}</h2>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>





    </>
  );

  
}
export default State
