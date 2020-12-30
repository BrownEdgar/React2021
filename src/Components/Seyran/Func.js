import React from "react"

export default function Func(props){
 const plus = props.total.reduce((a,b)=> a+b)
    return <p>{plus}</p>
}