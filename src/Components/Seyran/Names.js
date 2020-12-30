import React from "react"

export default function Names(props){
    return(
        <div>
        <li key={props.key}>{props.names}
        </li>
        <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}