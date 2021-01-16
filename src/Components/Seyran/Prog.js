import React, { Component } from 'react';
import { withRouter } from "react-router";

function Prog(props) {
    let person = props.programers.filter(e => e.num == props.match.params.id)
        console.log(person)
      return (
       <div>
           <div>name: {person[0].name}</div>
           <div>ashxatavardz: {person[0].ashxatavardz}</div>
           <div>languiges: {person[0].languiges}</div>
       </div>
            )
    
    }

export default withRouter(Prog)