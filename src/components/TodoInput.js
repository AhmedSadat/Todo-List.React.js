import  React, { Component } from "react" ;
import './TodoInput.css' ;



 class TodoInput extends Component {
            
    render(){

        return(

            <div className="container">
                 <div className="card card-body">
                    <form onSubmit={this.props.handleSubmit}>
                       <div className="input-group">
                           <div className="input-group-prepend">
                             <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                             </div>
                           </div>
                           <input

                             type="text"
                             className="form-control text-capitalize"
                             placeholder="add todo item"
                             onChange={this.props.handleChange}
                              value={this.props.item}
                              />
                       </div>
                       <button 
                        type="submit"
                         className={this.props.edit ? 
                         'btn btn-block btn-success mt-3 text-uppercase' 
                         :'btn btn-block btn-primary mt-3'}
                         disabled={ this.props.item ? false : true }
                         > 
                              {this.props.edit ? "Edit Item":"Add Item"} 
                       </button>
                    </form>
                 </div>
            </div>
        )
    }
}

export default TodoInput ;