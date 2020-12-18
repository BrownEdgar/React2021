//Code here
import React, {Component} from 'react'
import Data from './data.json'

 export default class App extends Component {
     state = {
         users: Data.users
     }
     render () {
         return (
             <div>
                 {Data.users.map(elem =>{
                     return (
                         <Developers 
                         key={elem.id}
                         name={elem.name}
                         skills={elem.skills}
                         phone={elem.phone} />
                     )
                 })}
             </div>
         )
     }
 }

