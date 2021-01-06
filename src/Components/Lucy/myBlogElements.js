import { useState } from "react"
import "./myBlog.css"
let Elements = (props)=>{
    let [change,setChange]= useState(false)
    return (
        <div >
            <span className="date_span" id={change?"box":""}>AXONVIP | 01 AUG, 2019</span>
            <h2 className="box_title">{props.title}</h2>
            <p className="box_paragraph">It is with great pleasure that I 
                speak to the I've experienced with the 
                Cantrell Brothers and the team at <span className={change? "hide":""}>...</span><span className="hide" id={change? "hidden":""}>. It's often hard to 
                    assess from within so you'll need to find someone outside, 
                    to slap on the rubber gloves and 
                    check that your business is in peak condition.</span></p>
               <button onClick={()=>setChange(!change)} className="read_more">{change? "read less":"read more" }</button>
        </div>
    )
}

export default Elements