
import  React, { Component } from "react" ;
import TodoItem from '../TodoItem/TodoItem' ;


class TodoList extends Component {

 
            
    render(){ 

    

     const   {items , handleDelete , handleEdit , clearList} = this.props ;

        return(
           <ul className="list-group">
              <h3 className="text-center text-capitalize mt-3">Todo List Items</h3>
              {items.map((element , index)=>{
               return <TodoItem 
                                   key={element.id}
                                   delete={()=>handleDelete(element.id)}
                                   edit={()=>handleEdit(index)}
                                   title={element.title}
                />
              } )}
              <button type="button" className="btn 
              btn-danger
               mt-5 
              btn-block
              text-uppercase"
              onClick={clearList}>Clear</button>
           </ul>  
        )
    }
}

export default TodoList ;