import React, { Component } from 'react'
import s from './prgs.module.css'
import { Link, Route, useHistory } from "react-router-dom";
import Prog from './Prog';
import { withRouter } from "react-router";


 function Programers() {
let programers = [   {num:1, namber:'programmer 1', name: 'Atom', languiges: 'React, Js', ashxatavardz:'347 958 dr'},
                     {num:2, namber:'programmer 2', name: 'Anan', languiges: 'PHP', ashxatavardz:'547 008 dr'},
                     {num:3,namber:'programmer 3', name: 'Anna', languiges: 'Node', ashxatavardz:'947 157 dr'},
                     {num:4,namber:'programmer 4', name: 'Aram', languiges: 'HTML CSS',ashxatavardz:'958 dr'}
                 ];

     let programer = programers.map((el,ind)=><div key={ind}> 
                                                <Link to={`/programmer/${el.num}`}>
                                                    <div className={s.tvyal}>
                                                        <div>{el.namber}</div>
                                                    </div>
                                                </Link>
                                             </div>) 
    
    return (
        <div>
       <div className={s.prgs} >{programer}</div>
       
       <Route path="/programmer/:id" 
       render={ ()=> <Prog programers={programers}/>
       } />
       </div>
    );
  }
  export default withRouter(Programers)

  

  
