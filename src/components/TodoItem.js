
import  React, { Component } from "react"

 class TodoItem extends Component {
            
    render(){

        return(
                     <li className="list-group-item
                     text-capitalize
                     mt-3
                     d-flex 
                     justify-content-between"
                           >
                <h6 >{this.props.title}</h6>       
                <div className="icon">

        <span>
            <li className="fas fa-pen text-success mx-2" onClick={this.props.edit}>  </li>
        </span>
        <span>
            <li className="fas fa-trash text-danger mx-2" onClick={this.props.delete}></li>
        </span>

        </div>               
                                 </li>
        )
    }
}

export default TodoItem ;