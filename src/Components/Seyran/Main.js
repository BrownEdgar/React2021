
import React from "react"
import Func from "./Func"
import Names from "./Names";

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numb: [1,3,5,7,8],
            names:["Seyran", "Arman", "Arshak", "Armen"],
            delete: (item) =>{
                let names = this.state.names;
                names.splice(item, 1)
                this.setState({names:  this.state.names})
            }
        }
    }
    
    render (){
        return (
            <div>
                <Func total={this.state.numb}/>
                {this.state.names.map((el,id)=>{
                    return (<Names 
                    names={el}
                    key={id}
                    id={id}
                    delete={this.state.delete}/>)
                })}
            </div>
        )
    }
}
 